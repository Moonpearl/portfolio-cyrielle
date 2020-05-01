import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactFlipCard from 'react-card-flip';
import { Card, Button } from 'react-bootstrap';
import styled, { css } from 'styled-components';
import { makeColor } from '../utils';
import { FaRegEye } from 'react-icons/fa';
import ScrollAnimation from 'react-animate-on-scroll';
import MarkdownTextContainer from './markdown-text-container';

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
  descriptionNode,
  image,
  backgroundColor,
  setCurrentPicture,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const picture = {
    name,
    descriptionNode,
    image,
    backgroundColor,
  };

  return (
    <div
      onClick={() => setIsFlipped(true)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <ScrollAnimation
        animateIn={`fadeIn`}
        animateOnce={true}
      >
        <ReactFlipCard isFlipped={isFlipped}>
          {/* Card front */}
          <Styles.Card backgroundImage={image.fluid.src} />
          {/* Card back */}
          <Styles.Card
            text="white"
            className="text-center"
            backgroundColor={backgroundColor}
          >
            <Card.Body>
              <Card.Title as="h3">{name}</Card.Title>
              <Card.Text>
                <small>
                  <MarkdownTextContainer textNode={descriptionNode} truncate />
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
      </ScrollAnimation>
    </div>
  );
}

PictureCard.propTypes = {
  name: PropTypes.string.isRequired,
  descriptionNode: PropTypes.object.isRequired,
  image: PropTypes.object.isRequired,
  backgroundColor: PropTypes.object.isRequired,
  setCurrentPicture: PropTypes.func.isRequired,
}

export default PictureCard;
