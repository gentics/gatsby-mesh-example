module.exports = {
  siteMetadata: {
    title: `Gentics Mesh Starter blog`,
    imageBaseUrl: 'https://demo.getmesh.io/api/v2/demo/webroot'
  },
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // Type used to prefix the mesh graphql types
        typeName: 'Mesh',
        // Field to be used to mount the graphql API
        fieldName: 'mesh',
        // Gentics Mesh server url
        url: 'https://demo.getmesh.io/api/v2/demo/graphql',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gentics Mesh Example',
        short_name: 'Gentics Mesh Example',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#61045f',
        display: 'minimal-ui',
        icons: [
          {
            src: `/favicons/chrome-192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/chrome-512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
};
