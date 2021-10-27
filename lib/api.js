async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    // throw new Error('Failed to fetch API')
  }

  return json.data
}

export async function getPreviewPostBySlug(slug) {
  const data = await fetchAPI(
    `
  query PostBySlug($where: JSON) {
    posts(where: $where) {
      slug
    }
  }
  `,
    {
      variables: {
        where: {
          slug,
        },
      },
    }
  )
  return data?.posts[0]
}

export async function getAllPostsWithSlug() {
  const data = fetchAPI(`
    {
      posts {
        slug
      }
    }
  `)
  return data?.allPosts
}

export async function getAllServicesForHome(preview) {
  const data = await fetchAPI(
    `
    query homepage {
      homepage{
        id
        seo {
          metaTitle
          metaTitle
          shareImage {
            url
          }
        }
        banners {
          id
          titlulo
          subtitulo
          icono {
            url
          }
          item_image {
            id
            url
          }
        }
      }
    }
  `,
    {
      variables: {
        where: {
          ...(preview ? {} : { status: 'published' }),
        },
      },
    }
  )
  return data.homepage
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `query Articles($where: JSON){
      articles(sort: "createdAt:desc", where: $where) {
        id
        title
        slug
        image {
          url
        }
        published_at
      }
    }
  `
  )
  return data.articles
}

export async function getPostAndMorePosts(slug, preview) {
  const data = await fetchAPI(
    `
  query Articles($where: JSON,){
    articles(where: $where) {
      id
      content
      title
      slug
      image{
        url
      }
    }

    morePosts: articles(sort: "date:desc", limit: 3) {
      id
      content
      title
      slug
      image{
        url
      }
    }

  }
  `,
    {
      preview,
      variables: {
        where: {
          slug,
        },
      },
    }
  )
  return data
}