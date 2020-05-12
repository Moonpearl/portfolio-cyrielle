import React from 'react';
import { Layout, SEO, HeaderBanner, Gallery } from '../components';
import { LocalizedContent } from '../components/localization';
import { graphql } from 'gatsby';

const GalleryPage = ({ data }) => {
  const { allDatoCmsArtwork: artworks, datoCmsPage: page, allDatoCmsArticle: articles } = data;

  return (
    <Layout>
      <SEO title="Gallery" />
      <HeaderBanner imageUrl={page.galleryBanner.url}>
        <LocalizedContent>
          <span locale="en">Gallery</span>
          <span locale="fr">Galerie</span>
        </LocalizedContent>
      </HeaderBanner>
      <Gallery
        articles={articles}
        artworks={artworks}
      />
    </Layout>
  );
}

export default GalleryPage;

export const query = graphql`
  query GalleryQuery($locale: String!) {
    datoCmsPage(locale: {eq: $locale}) {
      galleryBanner {
        url
      }
    }
    allDatoCmsArtwork(
      filter: {locale: {eq: $locale}},
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
          tags {
            name
            slug
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
