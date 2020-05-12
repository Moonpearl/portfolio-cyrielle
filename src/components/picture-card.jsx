import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactFlipCard from 'react-card-flip';
import { Card, Button, ButtonGroup, Badge } from 'react-bootstrap';
import styled, { css } from 'styled-components';
import { makeColor } from '../utils';
import { FaRegEye } from 'react-icons/fa';
import { MdLibraryBooks } from 'react-icons/md';
import ScrollAnimation from 'react-animate-on-scroll';
import MarkdownTextContainer from './markdown-text-container';
import { LocalizedLink, LocalizedContent } from './localization';

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
  article,
  setCurrentPicture,
  tags,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const picture = {
    name,
    descriptionNode,
    image,
    backgroundColor,
    tags,
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
            <Card.Header>
              <Card.Title as="h3">{name}</Card.Title>
              <Card.Text as="ul">
                {tags.map(
                  (tag, index) =>
                    <li key={index} className="d-inline ml-1 mr-1">
                      <LocalizedLink to={`/tags/${tag.slug}`}>
                        <Badge variant="light">
                          {tag.name}
                        </Badge>
                      </LocalizedLink>
                    </li>
                )}
              </Card.Text>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <small>
                  <MarkdownTextContainer textNode={descriptionNode} truncate />
                </small>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <ButtonGroup>
                <Button variant="outline-light" onClick={() => setCurrentPicture(picture)}>
                  <FaRegEye />
                </Button>
                {article &&
                  <LocalizedLink to={`/news/${article.slug}`}>
                    <Button variant="outline-light">
                      <MdLibraryBooks />{` `}
                      <LocalizedContent as="span">
                        <span locale="en">Article</span>
                        <span locale="fr">Article</span>
                      </LocalizedContent>
                    </Button>
                  </LocalizedLink>
                }
              </ButtonGroup>
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
  article: PropTypes.object,
  setCurrentPicture: PropTypes.func.isRequired,
  tag: PropTypes.array.isRequired,
}

export default PictureCard;
