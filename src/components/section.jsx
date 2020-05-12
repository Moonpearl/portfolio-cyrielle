import React from 'react';
import PropTypes from 'prop-types';
import { MarkdownTextContainer } from '.';
import { BackgroundImageContainer } from '../styles';
import { Container, Button } from 'react-bootstrap';
import styled, { css } from 'styled-components';
import { MIN_WIDTH } from '../styles/variables';
import { makeColor } from '../utils';
import ScrollAnimation from 'react-animate-on-scroll';
import { LocalizedContent, LocalizedLink } from './localization';
import { FaAngleDoubleRight } from 'react-icons/fa';

const Styles = {
  TextContainer: styled.div`
    color: ${ ({ textColor }) => textColor };
    padding: 2rem 0;

    @media ${MIN_WIDTH.sm} {
      width: 40%;
    }
  `,
  TextAlignContainer: styled.div`
    display: flex;
    flex-direction: ${ ({ inverted }) => inverted ? 'row' : 'row-reverse' };
  `,
  BackgroundImageContainer: styled(BackgroundImageContainer)`
    background-image:
      ${ ({ color }) => css`
        linear-gradient(
          to right,
          ${makeColor(color, 0.75)},
          ${makeColor(color, 0.75)}
        ),
      `}
      url(${ ({ imageUrl }) => imageUrl})
    ;

    @media ${MIN_WIDTH.sm} {
      background-image:
        ${ ({ color, inverted }) => css`
          linear-gradient(
            ${inverted ? 'to right' : 'to left'},
            ${makeColor(color, .9)} 45%,
            ${makeColor(color, 0)} 65%
          ),
        `}
        url(${ ({ imageUrl }) => imageUrl})
      ;
    }
  `,
  ButtonContainer: styled.div`
    display: flex;
    justify-content: center;
  `,
};

const Section = ({
  backgroundImage,
  backgroundColor,
  textColor,
  title,
  descriptionNode,
  tag,
  inverted,
}) =>
  <Styles.BackgroundImageContainer
    imageUrl={backgroundImage.url}
    color={backgroundColor}
    inverted={inverted}
    attachmentFixed
  >
    <Container>
      <ScrollAnimation
        animateIn={`fadeIn`}
        animateOnce={true}
      >
        <Styles.TextAlignContainer inverted={inverted}>
          <Styles.TextContainer textColor={makeColor(textColor)}>
            <h3>{title}</h3>
            <MarkdownTextContainer textNode={descriptionNode} />
            {tag &&
              <Styles.ButtonContainer>
                <LocalizedLink to={`/tags/${tag.slug}`}>
                  <Button variant="light" center>
                    <LocalizedContent>
                      <span locale="en">Find out more </span>
                      <span locale="fr">Découvrir </span>
                      <FaAngleDoubleRight />
                    </LocalizedContent>
                  </Button>
                </LocalizedLink>
              </Styles.ButtonContainer>
            }
          </Styles.TextContainer>
        </Styles.TextAlignContainer>
      </ScrollAnimation>
    </Container>
  </Styles.BackgroundImageContainer>
;

Section.propTypes = {
  backgroundImage: PropTypes.object.isRequired,
  backgroundColor: PropTypes.object.isRequired,
  textColor: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  descriptionNode: PropTypes.object.isRequired,
  inverted: PropTypes.bool,
}

export default Section;
