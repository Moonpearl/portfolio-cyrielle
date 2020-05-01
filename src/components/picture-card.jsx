import React, { useState } from 'react';
import ReactFlipCard from 'react-card-flip';
import { Card } from 'react-bootstrap';
import styled, { css } from 'styled-components';
import { makeColor } from '../utils';

const Styles = {
  Card: styled(Card)`
    ${ ({ backgroundColor }) => backgroundColor && css`
      background-color: ${makeColor(backgroundColor)};
    `}
    ${ ({ backgroundImage }) => backgroundImage && css`
      background-image: url(${backgroundImage});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `}
    height: 300px;
  `,
}

const PictureCard = ({ name, description, image, backgroundColor }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <ReactFlipCard isFlipped={isFlipped}>
        <Styles.Card backgroundImage={image.fluid.src} />
        <Styles.Card
          text="white"
          className="text-center"
          backgroundColor={backgroundColor}
        >
          <Card.Body>
            <Card.Title as="h3">{name}</Card.Title>
          </Card.Body>
        </Styles.Card>
      </ReactFlipCard>
    </div>
  );
}

export default PictureCard
