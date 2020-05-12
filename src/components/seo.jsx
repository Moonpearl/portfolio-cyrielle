/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { withLocale } from "../state/locale"

function SEO({ description, meta, title, currentLocale }) {
  const { site } = useStaticQuery(
    graphql`
      query SeoQuery {
        site: datoCmsSite {
          globalSeo {
            siteName
            titleSuffix
            twitterAccount
            facebookPageUrl
            fallbackSeo {
              description
              title
              twitterCard
              image {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    `
  )
  // console.log(data);
  // const { site } = data;

  const metaTitle = title || site.globalSeo.fallbackSeo.title
  const metaDescription = description || site.globalSeo.fallbackSeo.description

  return (
    <Helmet
      htmlAttributes={{
        lang: currentLocale.code,
      }}
      title={metaTitle}
      titleTemplate={`%s | ${site.globalSeo.siteName}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: site.globalSeo.fallbackSeo.twitterCard,
        },
        {
          name: `twitter:creator`,
          content: site.globalSeo.twitterAccount,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default withLocale(SEO);
