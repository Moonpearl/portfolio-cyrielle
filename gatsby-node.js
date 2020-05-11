/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const data = [
  { entityName: 'allDatoCmsArticle', uri: 'news', template: 'article.jsx' },
];

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

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
      
      result.data[entityName].edges.map(({ node: entity }) => {
        createPage({
          path: `${uri}/${entity.slug}`,
          component: path.resolve(`./src/templates/${template}`),
          context: {
            slug: entity.slug,
          },
        })
      });
    }
    resolve();
  });
}
