const path = require('path');
const slash = require('slash');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const templates = {
      'category': path.resolve(`src/templates/category.js`), 
      'vehicle': path.resolve(`src/templates/vehicle.js`)
    };

    graphql(`
      {
        mesh {
          allPosts: nodes {
            elements {
              path
              uuid
              schema {
                name
              }
              ... on Mesh_category {
                fields {
                  slug
                }
              }
              ... on Mesh_vehicle {
                fields {
                  slug
                }
              }
            }
          }
        }
      }    
    `).then(result => {
      if (result.errors) {
        console.log(result.errors);
      }
      result.data.mesh.allPosts.elements.filter(node => node.fields).map(node => {
        var template = templates[node.schema.name];
        createPage({
          path: `${node.path}`,
          component: slash(template),
          context: {
            nodePath: node.path,
          },
        });
      });
      resolve();
    });
  });
};
