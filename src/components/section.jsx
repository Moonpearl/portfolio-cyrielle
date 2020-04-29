import React from 'react';
import PropTypes from 'prop-types';
import { MarkdownTextContainer } from '.';
import { BackgroundImageContainer, BackgroundGradientContainer } from '../styles';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const makeColor = (color, alpha = 1) =>
  `rgba(${color.red}, ${color.green}, ${color.blue}, ${alpha})`
;

const Styles = {
  TextContainer: styled.div`
    color: ${ ({ textColor }) => textColor };
    padding: 2rem 0;
    width: 40%;
    right: 0;
  `,
  TextAlignContainer: styled.div`
    display: flex;
    flex-direction: ${ ({ inverted }) => inverted ? 'row' : 'row-reverse' };
  `,
};

const Section = ({
  backgroundImage,
  backgroundColor,
  textColor,
  title,
  descriptionNode,
  inverted
}) => {
  let startColor;
  let endColor;
  
  const colors = [
    makeColor(backgroundColor),
    makeColor(backgroundColor, 0),
  ];

  if (inverted) {
    [startColor, endColor] = colors;
  } else {
    [endColor, startColor] = colors;
  }

  return (
    <BackgroundImageContainer imageUrl={backgroundImage.url} attachmentFixed>
      <BackgroundGradientContainer
        startColor={startColor}
        endColor={endColor}
        vague={30}
        offset={10 * (inverted ? 1 : -1)}
      >
        <Container>
          <Styles.TextAlignContainer inverted={inverted}>
            <Styles.TextContainer textColor={makeColor(textColor)}>
              <h3>{title}</h3>
              <MarkdownTextContainer textNode={descriptionNode} />
            </Styles.TextContainer>
          </Styles.TextAlignContainer>
        </Container>
      </BackgroundGradientContainer>
    </BackgroundImageContainer>
  );
}

Section.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  backgroundColor: PropTypes.object.isRequired,
  textColor: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  descriptionNode: PropTypes.object.isRequired,
  inverted: PropTypes.bool,
}

export default Section;
