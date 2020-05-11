import React, { useState } from 'react';
import { Layout, SEO, PictureCard, PictureModal, HeaderBanner } from '../components';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const Styles = {
  Grid: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr));
    gap: 2rem;
    grid-auto-flow: dense;
    padding: 2rem 0;
  `,
}

const GalleryPage = ({ data }) => {
  const { allDatoCmsArtwork: artworks, datoCmsPage: page } = data;

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
            (edge, index) =>
              <PictureCard
                key={index}
                {...edge.node}
                setCurrentPicture={setCurrentPicture}
              />
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
  }
`;
