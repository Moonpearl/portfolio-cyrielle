import React, { useState } from 'react';
import ReactFlipCard from 'react-card-flip';
import { Card, Button } from 'react-bootstrap';
import styled, { css } from 'styled-components';
import { makeColor } from '../utils';
import { FaRegEye } from 'react-icons/fa';

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

const PictureCard = ({
  name,
  description,
  image,
  backgroundColor,
  setCurrentPicture,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const picture = {
    name,
    description,
    image,
    backgroundColor,
  };

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
            <Card.Text>
              <small>
                {description}
              </small>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="outline-light" onClick={() => setCurrentPicture(picture)}>
              <FaRegEye />
            </Button>
          </Card.Footer>
        </Styles.Card>
      </ReactFlipCard>
    </div>
  );
}

export default PictureCard
