# gatsby-mesh-example

Example of [@gentics/gatsby-source-mesh](https://github.com/mesh/gatsby-source-mesh)
Please file any issues [over there](https://github.com/gentics/gatsby-source-mesh/issues).

## Install

1. `git clone https://github.com/gentics/gatsby-mesh-example.git && cd gatsby-mesh-example/`
1. `yarn && yarn develop`

You can either choose to use this example in combination with the preconfigured Gentics Mesh Demo instance which will be regularly resetted or you can [download the Gentics Mesh Demo server](https://getmesh.io/Download) and start it via `java -jar mesh-demo-x.y.z.jar`. In that case you can update the `gatsby-config.js` and use `http://localhost:8080/api/v1/demo/graphql` instead.

## Graph<em>i</em>QL

For an kitchen sink Graph<em>i</em>QL query you can run on Gatsby’s
graphql debugger at <http://localhost:8000/___graphql>, try this
link to preload with `gatsby develop` running:

[Preload kitchen sink Graph<em>i</em>QL query](http://localhost:8000/___graphql?query=%7B%0A%20%20vehicles%3A%20allNodes(filter%3A%20%7Bschema%3A%20%7Bname%3A%20%7Beq%3A%20%22vehicle%22%7D%7D%7D)%20%7B%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20data%20%7B%0A%20%20%20%20%20%20%20%20%20%20slug%0A%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20description%0A%20%20%20%20%20%20%20%20%20%20weight%0A%20%20%20%20%20%20%20%20%20%20vehicleImage%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20uuid%0A%20%20%20%20%20%20%20%20%20%20%20%20path%0A%20%20%20%20%20%20%20%20%20%20%20%20fields%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20image%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20height%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20categories%3A%20allNodes(filter%3A%20%7Bschema%3A%20%7Bname%3A%20%7Beq%3A%20%22category%22%7D%7D%7D)%20%7B%0A%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20childrenNodes%20%7B%0A%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20data%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20slug%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20data%20%7B%0A%20%20%20%20%20%20%20%20%20%20slug%0A%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A)

It puts this in the console:

```
{
  vehicles: allNodes(filter: {schema: {name: {eq: "vehicle"}}}) {
    edges {
      node {
        data {
          slug
          name
          description
          weight
          vehicleImage {
            uuid
            path
            fields {
              image {
                width
                height
              }
            }
          }
        }
      }
    }
  }
  categories: allNodes(filter: {schema: {name: {eq: "category"}}}) {
    edges {
      node {
        childrenNodes {
          id
          data {
            name
            slug
          }
        }
        data {
          slug
          name
        }
      }
    }
  }
}
```

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gentics/gatsby-mesh-example)

## [Current limitations](https://github.com/gentics/gatsby-source-mesh#current-limitations)

See https://github.com/gentics/gatsby-source-mesh for more.

## Fork

This example is a fork of the [gatsby-graphcms example](https://github.com/GraphCMS/gatsby-graphcms-example).