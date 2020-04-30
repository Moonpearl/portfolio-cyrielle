import React, { useState } from 'react';
import ReactFlipCard from 'react-card-flip';
import { Card } from 'react-bootstrap';
import styled, { css } from 'styled-components';

const Styles = {
  Card: styled(Card)`
    ${ ({ backgroundImage }) => backgroundImage && css`
      background-image: url(${backgroundImage});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `}
    height: 250px;
  `,
}

const PictureCard = ({ name, description, image }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <ReactFlipCard isFlipped={isFlipped}>
        <Styles.Card backgroundImage={image.fluid.src} />
        <Styles.Card
          bg="primary"
          text="white"
          className="text-center"
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
