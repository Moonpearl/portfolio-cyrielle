import React, { useState } from "react";
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { PictureCard, PictureModal } from '.';

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

const Gallery = ({ articles, artworks }) => {
  const [currentPicture, setCurrentPicture] = useState(null);

  return (
    <>
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
    </>
  );
}

export default Gallery;
