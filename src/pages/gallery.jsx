import React, { useState } from 'react';
import { Layout, SEO, PictureCard, PictureModal, HeaderBanner } from '../components';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const Styles = {
  Grid: styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr));
    gap: 2rem;
    grid-auto-flow: dense;
    padding: 2rem 0;
  `,
}

const getArticleFromArtwork = (articles, slug) => {
  const filteredArticles = articles.edges.filter(
    item => item.node.artwork !== null && item.node.artwork.slug === slug
  );

  if (filteredArticles.length === 0) {
    return null;
  }

  return filteredArticles[0].node;
}

const GalleryPage = ({ data }) => {
  const { allDatoCmsArtwork: artworks, datoCmsPage: page, allDatoCmsArticle: articles } = data;

  const [currentPicture, setCurrentPicture] = useState(null);

  return (
    <Layout>
      <SEO title="Gallery" />
      <HeaderBanner
        imageUrl={page.galleryBanner.url}
        title="Gallery"
      />
      <Container>
        <Styles.Grid>
          {artworks.edges.map(
            ({ node }, index) =>
              <li key={index}>
                <PictureCard
                  {...node}
                  article={getArticleFromArtwork(articles, node.slug)}
                  setCurrentPicture={setCurrentPicture}
                />
              </li>
          )}
        </Styles.Grid>
      </Container>
      { currentPicture !== null &&
        <PictureModal
          picture={currentPicture}
          onHide={() => setCurrentPicture(null)}
        />
      }
    </Layout>
  );
}

export default GalleryPage;

export const query = graphql`
  query GalleryQuery {
    datoCmsPage {
      galleryBanner {
        url
      }
    }
    allDatoCmsArtwork(sort: {fields: position, order: ASC}) {
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
    allDatoCmsArticle {
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
