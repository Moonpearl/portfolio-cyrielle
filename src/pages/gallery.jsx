import React from 'react';
import { Layout, SEO, PictureCard } from '../components';
import { BackgroundImageContainer } from '../styles';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

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
}

const GalleryPage = ({ data }) =>
  <Layout>
    <SEO title="Gallery" />
    <BackgroundImageContainer imageUrl={data.datoCmsAboutPage.galleryBanner.url}>
      <Styles.Overlay className="bg-dark" />
      <Styles.Header>Gallery</Styles.Header>
    </BackgroundImageContainer>
    <Container>
      <Styles.Grid>
        {data.allDatoCmsArtwork.edges.map(
          (edge, index) => <PictureCard key={index} {...edge.node} />
        )}
      </Styles.Grid>
    </Container>
  </Layout>
;

export default GalleryPage;

export const query = graphql`
  query GalleryQuery {
    datoCmsAboutPage {
      galleryBanner {
        url
      }
    }
    allDatoCmsArtwork(sort: {fields: position, order: ASC}) {
      edges {
        node {
          name
          description
          image {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`;
