/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const data = [
  // { entityName: 'allDatoCmsEntity', uri: 'entities', template: 'entity.jsx' },
];

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const pageNumbers = [2, 3, 4];

  return new Promise(async (resolve, reject) => {
    for (let instance of data) {
      const { entityName, uri, template } = instance;
  
      const result = await graphql(`
        {
          ${entityName} {
            edges {
              node {
                slug
              }
            }
          }
        }
      `);
      
      result.data[entity].edges.map(({ node: entity }) => {
        createPage({
          path: `${uri}/${entity.slug}`,
          component: path.resolve(`./src/templates/${template}`),
          context: {
            slug: entity.slug,
            googleDriveFileData,
          },
        })
      });
    }
  
    pageNumbers.map( (pageNumber, index) =>
      createPage({
        path: `pages/${pageNumber}`,
        component: path.resolve(`./src/templates/page.jsx`),
        context: {
          pageNumber,
          nextPage: index === pageNumbers.length - 1 ? null : `pages/${pageNumber + 1}`,
        },
      })
    );
    resolve();
  });
}
