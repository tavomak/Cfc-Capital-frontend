import { ApolloClient, InMemoryCache, HttpLink, gql } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({ uri: process.env.NEXT_PUBLIC_CMS_API_URL }),
  cache: new InMemoryCache(),
});

// Semaphore: max 5 concurrent (Hygraph limit: 10)
let _active = 0;
const _queue = [];
function _acquire() {
  return new Promise((resolve) => {
    const tryAcquire = () => {
      if (_active < 5) {
        _active++;
        resolve();
      } else _queue.push(tryAcquire);
    };
    tryAcquire();
  });
}
function _release() {
  _active--;
  if (_queue.length) _queue.shift()();
}

// Rate gate: ≥250ms between request starts (≤4 req/s vs Hygraph limit of 5)
let _lastStart = 0;
async function _rateGate() {
  const wait = Math.max(0, 250 - (Date.now() - _lastStart));
  if (wait) await new Promise((r) => setTimeout(r, wait));
  _lastStart = Date.now();
}

// Retry with exponential backoff
async function _queryWithRetry(fn, retries = 3, delay = 1000) {
  try {
    return await fn();
  } catch (err) {
    if (retries === 0) throw err;
    await new Promise((r) => setTimeout(r, delay));
    return _queryWithRetry(fn, retries - 1, delay * 2);
  }
}

// Compose: acquire semaphore → rate gate → run with retry → release
async function throttledQuery(fn) {
  await _acquire();
  try {
    await _rateGate();
    return await _queryWithRetry(fn);
  } finally {
    _release();
  }
}

export const getServices = () =>
  throttledQuery(() =>
    client.query({
      query: gql`
        query Services {
          services {
            id
            slug
            description
            title
            cardImage {
              url
              id
            }
          }
        }
      `,
    })
  );

export const getServiceBySlug = (slug) =>
  throttledQuery(() =>
    client.query({
      query: gql`
        query Service($slug: String!) {
          service(where: { slug: $slug }) {
            id
            description
            heroImage {
              url
            }
            heroImageMobile {
              url
            }
            review {
              markdown
            }
            title
            label
            heroDescription
            serviceContent {
              id
              color
              title
              image {
                url
              }
              content {
                text
              }
            }
            cardImage {
              url
            }
            serviceFaq {
              text
              title
            }
            serviceProcess {
              description
              subtitle
            }
          }
        }
      `,
      variables: {
        slug,
      },
    })
  );

export const getAllCategories = () =>
  throttledQuery(() =>
    client.query({
      query: gql`
        query getAllPosts {
          categories {
            id
            slug
            name
          }
        }
      `,
    })
  );

export const getAllPosts = () =>
  throttledQuery(() =>
    client.query({
      query: gql`
        query getAllPosts {
          posts(orderBy: createdAt_DESC) {
            id
            slug
            title
            video
            excerpt
            tags
            author {
              name
              title
              picture {
                url
              }
            }
            coverImage {
              url
            }
            categories {
              id
              name
            }
            createdAt
          }
        }
      `,
    })
  );

export const getPostsByCategoryAndProcess = (slug) => {
  const name = slug.charAt(0).toUpperCase() + slug.slice(1);
  return throttledQuery(() =>
    client.query({
      query: gql`
        query getAllPosts($slug: String!, $name: String!) {
          category(where: { name: $name }) {
            buttonText
            buttonUrl
            name
            slug
            subtite
            title
            image {
              url
            }
            posts(orderBy: date_DESC) {
              id
              slug
              title
              excerpt
              tags
              coverImage {
                url
              }
              author {
                name
                title
                picture {
                  url
                }
              }
            }
          }
          service(where: { slug: $slug }) {
            id
            serviceProcess {
              description
              id
            }
          }
        }
      `,
      variables: {
        slug,
        name,
      },
    })
  );
};

export const getPostAndMorePosts = (slug) =>
  throttledQuery(() =>
    client.query({
      query: gql`
        query Articles($slug: String!) {
          post(where: { slug: $slug }) {
            id
            content {
              json
              references {
                ... on Asset {
                  id
                  url
                  mimeType
                }
              }
            }
            title
            slug
            video
            excerpt
            tags
            author {
              name
              title
              picture {
                url
              }
            }
            coverImage {
              url
            }
            categories {
              id
              name
            }
            createdAt
          }
          morePosts: posts(
            orderBy: createdAt_DESC
            first: 3
            where: { NOT: { slug: $slug } }
          ) {
            id
            title
            slug
            excerpt
            tags
            author {
              name
              title
              picture {
                url
              }
            }
            coverImage {
              url
            }
          }
        }
      `,
      variables: {
        slug,
      },
    })
  );

export const getPageBySlugAndServices = (slug) =>
  throttledQuery(() =>
    client.query({
      query: gql`
        query Services($slug: String!) {
          pages(where: { slug: $slug }) {
            hero {
              id
              title
              subtitle
              description
              rtl
              endTime
              desktop {
                id
                url
              }
              mobile {
                id
                url
              }
              backgroundColor {
                hex
              }
              backgroundImage {
                id
                url
              }
              frontImage {
                id
                url
              }
            }
            highlights {
              title
              description
              icon
              color
            }
            accordion {
              title
              text
            }
            steps {
              description
              subtitle
            }
            posts(orderBy: createdAt_DESC, first: 1) {
              id
              slug
              title
              excerpt
              coverImage {
                url
              }
            }
            archives {
              id
              name
              pdf {
                url
              }
            }
          }
          services {
            id
            slug
            description
            title
            cardImage {
              url
              id
            }
          }
        }
      `,
      variables: {
        slug,
      },
    })
  );

export const getPageBySlugAndCategories = (slug) =>
  throttledQuery(() =>
    client.query({
      query: gql`
        query Articles($slug: String!) {
          pages(where: { slug: $slug }) {
            banner {
              backgroundColor {
                hex
              }
              buttonText
              buttonUrl
              subTitle
              title
              content {
                html
              }
              image {
                url
              }
            }
            posts {
              id
              slug
              title
              coverImage {
                url
              }
              categories {
                id
                name
              }
            }
          }
          categories {
            id
            name
            slug
          }
        }
      `,
      variables: {
        slug,
      },
    })
  );

export const getTeamMembers = () =>
  throttledQuery(() =>
    client.query({
      query: gql`
        query Teams {
          teams {
            highlights {
              title
              description
              icon
              color
            }
            team {
              description
              email
              id
              linkedinUrl
              name
              photo {
                url
              }
              position
            }
            directors {
              id
              linkedinUrl
              name
              photo {
                url
              }
              position
            }
            subManager {
              description
              email
              id
              linkedinUrl
              name
              photo {
                url
              }
              position
            }
            managers {
              description
              email
              id
              linkedinUrl
              name
              photo {
                url
              }
              position
            }
            subManager {
              description
              email
              id
              linkedinUrl
              name
              photo {
                url
              }
              position
            }
          }
        }
      `,
    })
  );

export const getUserByEmail = (email) =>
  throttledQuery(() =>
    client.query({
      query: gql`
        query getUserByEmail($email: String) {
          teams {
            directors(where: { email: $email }) {
              email
              id
              mobile
              name
              phone
              position
            }
            subManager(where: { email: $email }) {
              email
              id
              mobile
              name
              phone
              position
            }
            managers(where: { email: $email }) {
              email
              id
              mobile
              name
              phone
              position
            }
            team(where: { email: $email }) {
              email
              id
              mobile
              name
              phone
              position
            }
            workers(where: { email: $email }) {
              email
              id
              mobile
              name
              phone
              position
            }
          }
        }
      `,
      variables: { email },
    })
  );
