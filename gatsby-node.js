/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const defaultLocale = 'en';
const locales = [defaultLocale, 'fr'];

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const data = [
  { entityName: 'allDatoCmsArticle', uri: 'news', template: 'article.jsx' },
  { entityName: 'allDatoCmsTag', uri: 'tags', template: 'tag.jsx' },
];

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  for (let locale of locales) {
    const localizedPage = {...page};
    if (locale === defaultLocale) {
      deletePage(page);
    } else {
      localizedPage.path = `/${locale}` + localizedPage.path;
    }
    localizedPage.context = {...localizedPage.context, locale};
    createPage(localizedPage);
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise(async (resolve, reject) => {
    for (let locale of locales) {
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
            path: `${locale === defaultLocale ? '' : `/${locale}` }/${uri}/${entity.slug}`,
            component: path.resolve(`./src/templates/${template}`),
            context: {
              slug: entity.slug,
              locale,
            },
          })
        });
      }
    }
    resolve();
  });
}
