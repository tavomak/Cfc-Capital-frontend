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
    `query homepage {
      homepage{
        id
        seo {
          metaTitle
          metaDescription
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
            url
          }
        }
      }
      servicios {
        id
        Titulo
        slug
        Url_externa
        Detalle
        review
        Seo {
          metaTitle
          metaDescription
        }
        Slide {
          item_image {
            url
          }
        }
      }
    }`,
    {
      variables: {
        where: {
          ...(preview ? {} : { status: 'published' }),
        },
      },
    }
  )
  return data
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

export async function getServiceBySlug(slug, preview) {
  const data = await fetchAPI(
    `query Servicios($where: JSON){
      servicios(where: $where) {
        review
        Detalle
        Banner {
          url
        }
        Seo {
          metaTitle
          metaDescription
          shareImage {
            url
          }
        }
        Slide {
          item_image {
            url
          }
          titlulo
          subtitulo
          icono {
            url
          }
        }
        Proceso {
          descripcion
        }
        Faq {
          pregunta
          respuesta
        }
        Que {
          Titulo
          Contenido
        }
        Como {
          Titulo
          Contenido
        }
        Para {
          Titulo
          Contenido
        }
      }
    }`,
    {
      preview,
      variables: {
        where: {
          slug,
        },
      },
    }
  )
  return data.servicios
}

export async function getAllServices(preview) {
  const data = await fetchAPI(
    `query Servicios($where: JSON){
      servicios(where: $where) {
        slug
      }
    }
  `
  )
  return data.servicios
}