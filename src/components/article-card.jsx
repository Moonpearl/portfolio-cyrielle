import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';
import ReactCardFlip from 'react-card-flip';
import { Card, Button, Badge } from 'react-bootstrap';
import MarkdownTextContainer from './markdown-text-container';
import styled, { css } from 'styled-components';
import { makeColor } from '../utils';
import { LocalizedLink } from './localization';

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

const ArticlePreview = ({
  title,
  slug,
  contentNode,
  meta,
}) =>
  <Styles.Card>
    <Card.Body>
      <Card.Title as="h3">
        {title}
      </Card.Title>
      <small className="text-muted">
        Published on {new Date(meta.firstPublishedAt).toLocaleString('en-EN')} 
      </small>
      <MarkdownTextContainer textNode={contentNode} truncate />
    </Card.Body>
    <Card.Footer>
      <LocalizedLink to={`/news/${slug}`}>
        <Button>
          Read more
        </Button>
      </LocalizedLink>
    </Card.Footer>
  </Styles.Card>
;

const ArticleCard = ({
  title,
  slug,
  contentNode,
  artwork,
  meta,
}) => {
  const props = {
    title,
    slug,
    contentNode,
    meta,
  }

  const [isFlipped, setIsFlipped] = useState(false);

  if (artwork === null) {
    return (
      <ScrollAnimation
        animateIn={`fadeIn`}
        animateOne={true}
      >
        <ArticlePreview {...props} />
      </ScrollAnimation>
    );
  }

  return (
    <div
      onClick={() => setIsFlipped(true)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <ScrollAnimation
        animateIn={`fadeIn`}
        animateOne={true}
      >
        {}
        <ReactCardFlip isFlipped={isFlipped}>
          {/* Card front */}
          <Styles.Card backgroundImage={artwork.image.fluid.src}>
            <Card.Body>
              <Card.Title as="h3">
                <Badge variant="light">
                  {title}
                </Badge>
              </Card.Title>
            </Card.Body>
          </Styles.Card>
          {/* Card back */}
          <ArticlePreview {...props} />
        </ReactCardFlip>
      </ScrollAnimation>
    </div>
  );
}

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  contentNode: PropTypes.object.isRequired,
  artwork: PropTypes.object.isRequired,
  metea: PropTypes.object.isRequired,
}

export default ArticleCard;
