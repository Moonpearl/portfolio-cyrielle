import React from 'react';
import { graphql } from 'gatsby';
import { Layout, SEO, HeaderBanner, Gallery } from '../components';

const TagPage = ({ data }) => {
  const {
    allDatoCmsArtwork: artworks,
    allDatoCmsArticle: articles,
    datoCmsPage: page,
    datoCmsTag: tag,
  } = data;

  return (
    <Layout>
      <SEO title={tag.name} />
      <HeaderBanner imageUrl={tag.banner ? tag.banner.fluid.src : page.tagDefaultBanner.url}>
        {tag.name}
      </HeaderBanner>
      <Gallery
        articles={articles}
        artworks={artworks}
      />
    </Layout>
  );
}

export default TagPage;

export const query = graphql`
  query TagQuery($slug: String!, $locale: String!) {
    datoCmsPage(locale: {eq: $locale}) {
      tagDefaultBanner {
        url
      }
    }
    datoCmsTag(
      locale: {eq: $locale},
      slug: {eq: $slug}
    ) {
      banner {
        fluid {
          src
        }
      }
      name
    }
    allDatoCmsArtwork(
      filter: {
        locale: {eq: $locale},
        tags: {elemMatch: {slug: {eq: $slug}}}
      },
      sort: {fields: position, order: ASC}
    ) {
      edges {
        node {
          name
          slug
          descriptionNode {
            childMarkdownRemark {
              html
            }
          }
          image {
            fluid {
              src
            }
          }
          backgroundColor {
            red
            green
            blue
          }
        }
      }
    }
    allDatoCmsArticle(filter: {locale: {eq: $locale}}) {
      edges {
        node {
          slug
          artwork {
            slug
          }
        }
      }
    }
  }
`;
