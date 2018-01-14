module.exports = {
  siteMetadata: {
    title: `Gatsby with Gentics Mesh`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-mesh`,
      options: {
        endpoint: `https://demo.getmesh.io/api/v1/demo/graphql`,
        query: `{
          users {
            elements {
              uuid
              username
              lastname
              firstname
              created
              edited
              etag
            }
          }
          groups {
            elements {
              uuid
              name
              created
              edited
              etag
            }
          }
          roles {
            elements {
              uuid
              name
              created
              edited
              etag
            }
          }
          tags {
            elements {
              uuid
              name
              etag
              tagFamily {
                name
                uuid
              }
            }
          }
          tagFamilies {
            elements {
              uuid
              name
              etag
            }
          }
          nodes {
            elements {
              uuid
              schema {
                name
                uuid
              }
              language
              parent {
                uuid
              }
              children {
                elements {
                  uuid
                }
              }
              path
              fields {
                ... on vehicle {
                  name
                  niceUrl
                  weight
                  SKU
                  stocklevel
                  slug
                  description
                  vehicleImage {
                    uuid
                    path
                    fields {
                      ... on vehicleImage {
                        image {
                          width
                          height
                        }
                      }
                    }
                  }
                }
                ... on category {
                  name
                  slug
                  description
                }
                ... on vehicleImage {
                  name
                  image {
                    fileName
                    width
                    height
                    sha512sum
                    fileSize
                    mimeType
                    dominantColor
                  }
                }
              }
            }
          }
        }`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gatsby with Gentics Mesh',
        short_name: 'Gatsby Mesh',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#61045f',
        display: 'minimal-ui',
        icons: [
          {
            src: `/favicons/chrome-192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/favicons/chrome-512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    `gatsby-plugin-offline`
  ],
}
