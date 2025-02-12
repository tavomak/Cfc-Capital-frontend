import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_CMS_API_URL,
  cache: new InMemoryCache(),
});

export const getServices = () =>
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
  });

export const getServiceBySlug = (slug) =>
  client.query({
    query: gql`
      query Service($slug: String!) {
        service(where: { slug: $slug }) {
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
  });

export const getAllCategories = () =>
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
  });

export const getAllPosts = () =>
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
  });

export const getPostsByCategoryAndProcess = (slug) => {
  const name = slug.charAt(0).toUpperCase() + slug.slice(1);
  return client.query({
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
  });
};

export const getPostAndMorePosts = (slug) =>
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
  });

export const getPageBySlugAndServices = (slug) =>
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
          posts(orderBy: createdAt_DESC, first: 1) {
            id
            slug
            title
            excerpt
            coverImage {
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
  });

export const getPageBySlugAndCategories = (slug) =>
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
  });

export const getTeamMembers = () =>
  client.query({
    query: gql`
      query Teams {
        teams {
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
  });

export const getUserByEmail = (email) =>
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
  });
