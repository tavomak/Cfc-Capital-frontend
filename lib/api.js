import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_CMS_API_URL,
  cache: new InMemoryCache(),
});

export const getServices = () => {
  return client.query({
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
}

export const getServicesForHome = () => {
  return client.query({
    query: gql`
      query Services {
        services {
          id
          slug
          description
          review {
            html
          }
          heroImage {
            url
            id
          }
          heroImageMobile {
            url
            id
          }
          title
          cardImage {
            url
            id
          }
        }
      }
    `,
  });
}


const server = process.env.NEXT_PUBLIC_CMS_API_URL;

async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(`${server}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
  }

  return json.data;
}

export async function getAllPostsForHome() {
  const data = await fetchAPI(
    `
    query getAllPostsForHome {
      posts(orderBy: createdAt_DESC) {
        id
        slug
        title
        coverImage {
          url
        }
        createdAt
      }
    }
  `,
  );
  return data.posts;
}

export async function getPostAndMorePosts(slug, preview) {
  const data = await fetchAPI(
    `
  query Articles($slug: String!){
    post(where: {slug: $slug}) {
      id
      content {
        html
      }
      title
      slug
      video
      coverImage {
        url
      }
    }

    morePosts: posts(orderBy: createdAt_DESC, first: 3, where: {NOT: {slug: $slug}}) {
      id
      title
      slug
      coverImage {
        url
      }
    }

  }
  `,
    {
      preview,
      variables: {
        slug,
      },
    },
  );
  return data;
}
