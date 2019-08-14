# Gentics Mesh Gatsby Example

The default Gatsby starter

Now uses Gatsby v2 and the new [gatsby-source-graphql](https://www.gatsbyjs.org/packages/gatsby-source-graphql/).

For an overview of how things work in `Gatsby` please refer to the [Gatsby docs](https://www.gatsbyjs.org/docs/)

## How to start

1. `git clone https://github.com/gentics/gatsby-mesh-example.git && cd gatsby-mesh-example/`
1. `yarn && yarn develop`

You can either choose to use this example in combination with the preconfigured Gentics Mesh Demo instance which will be regularly resetted or you can run your own headless cms server via `docker run -p 8080:8080 -d gentics/mesh-demo`.

In that case you need to update the `gatsby-config.js` and use `http://localhost:8080/api/v2/demo/graphql` instead.

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gentics/gatsby-mesh-example)
