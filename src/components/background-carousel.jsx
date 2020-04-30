import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BackgroundImageContainer } from '../styles';
import styled from 'styled-components';
import { MIN_WIDTH } from '../styles/variables';

const Styles = {
  InnerContainer: styled.div`
    position: relative;
    z-index: 100;
    padding: 4em 0;
  `,
  BackgroundImageContainer: styled(BackgroundImageContainer)`
    position: relative;
    background-size: auto 100%;
    animation: animatedBackground 10s linear infinite alternate;

    @media ${MIN_WIDTH.sm} {
      background-size: 120vw;
    }
  `,
  Overlay: styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    animation: animatedOverlay 10s linear infinite;
  `,
};

export default class BackgroundCarousel extends Component
{
  state = {
    currentPicture: -1,
  }

  componentDidMount = () => {
    this.nextPicture();
  }

  nextPicture = () => {
    setTimeout(this.nextPicture, 10000);

    const { pictures } = this.props;
    const { currentPicture } = this.state;

    const newPicture = (currentPicture + 1) % pictures.length;

    this.setState({ currentPicture: newPicture });
  }

  render = () => {
    const { children, pictures } = this.props;
    const { currentPicture } = this.state;

    return (
      <Styles.BackgroundImageContainer
        imageUrl={pictures[currentPicture]}
      >
        <Styles.Overlay />
        <Styles.InnerContainer>
          {children}
        </Styles.InnerContainer>
      </Styles.BackgroundImageContainer>
    )
  }
}

BackgroundCarousel.propTypes = {
  pictures: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired,
}
