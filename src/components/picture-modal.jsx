import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Image } from 'react-bootstrap';
import styled, { css } from 'styled-components';
import { makeColor } from '../utils';
import MarkdownTextContainer from './markdown-text-container';

const Styles = {
  Modal: styled(Modal)`
    & .modal-content {
      ${ ({ backgroundColor }) => backgroundColor && css`
        color: white;
        background-color: ${makeColor(backgroundColor)};
      `}
    }
  `,
}

const PictureModal = ({ picture, onHide }) =>
  <Styles.Modal
    show={picture !== null}
    onHide={onHide}
    dialogClassName="modal-90w"
    aria-labelledby="picture-modal-title"
    size="xl"
    backgroundColor={picture.backgroundColor}
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="picture-modal-title">
        {picture.name}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body className="text-center">
      <a href={picture.image.fluid.src} target="_blank">
        <Image fluid src={picture.image.fluid.src} rounded />
      </a>
      <hr />
      <MarkdownTextContainer textNode={picture.descriptionNode} />
    </Modal.Body>
  </Styles.Modal> 
;

PictureModal.propTypes = {
  picture: PropTypes.object.isRequired,
  onHide: PropTypes.func,
}

export default PictureModal;
