const path = require('path');
const slash = require('slash');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {

    // 1. Define set of templates that should be used
    const templates = {
      'category': path.resolve(`src/templates/category.js`),
      'vehicle': path.resolve(`src/templates/vehicle.js`)
    };

    // 2. Run the graphql query to load all pages
    graphql(`
      {
        mesh {
          pages: nodes {
            elements {
              path
              schema {
                name
              }
            }
          }
        }
      }    
    `).then(result => {
      if (result.errors) {
        console.log(result.errors);
      }
      // 3. Create pages for each loaded element.
      //    Use the `page.schema.name` to select the 
      //    matching template. Discard any other page 
      //    that can't be mapped to our templates.
      //    Use the `path` field from the loaded 
      //    element to generate the page
      result.data.mesh.pages.elements
        .filter(page => templates[page.schema.name] != null)
        .map(page => {
          var template = templates[page.schema.name];
          createPage({
            path: page.path,
            component: slash(template),
            context: {
              nodePath: page.path,
            },
          });
        });
      resolve();
    });
  });
};
