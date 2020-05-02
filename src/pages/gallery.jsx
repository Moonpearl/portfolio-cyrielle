import React, { useState } from 'react';
import { Layout, SEO, PictureCard, PictureModal } from '../components';
import { BackgroundImageContainer } from '../styles';
import styled, { css } from 'styled-components';
import { Container, Modal } from 'react-bootstrap';
import { makeColor } from '../utils';

const Styles = {
  Header: styled.h1`
    padding: 4rem 0;
    color: white;
    text-align: center;
  `,
  Overlay: styled.div`
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    opacity: .5;
  `,
  Grid: styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr));
    gap: 2rem;
    grid-auto-flow: dense;
    padding: 2rem 0;
  `,
  Picture: styled.img`
    object-fit: cover;
  `,
  Modal: styled(Modal)`
    & .modal-content {
      ${ ({ backgroundColor }) => backgroundColor && css`
        color: white;
        background-color: ${makeColor(backgroundColor)};
      `}
    }
  `,
}

const GalleryPage = ({ data }) => {
  const [currentPicture, setCurrentPicture] = useState(null);

  return (
    <Layout>
      <SEO title="Gallery" />
      <BackgroundImageContainer imageUrl={data.datoCmsPage.galleryBanner.url}>
        <Styles.Overlay className="bg-dark" />
        <Styles.Header>Gallery</Styles.Header>
      </BackgroundImageContainer>
      <Container>
        <Styles.Grid>
          {data.allDatoCmsArtwork.edges.map(
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
