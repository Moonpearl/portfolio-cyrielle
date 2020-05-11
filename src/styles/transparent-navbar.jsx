import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Navbar } from 'react-bootstrap';
import styled, { css } from 'styled-components';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

const StyledNavbar = styled(Navbar)`
  ${({ transparent }) => transparent ?
    css`
      background-color: transparent;
    `
    :
    css`
      -moz-box-shadow: 0 4px 4px rgba(0, 0, 0, .5);
      -webkit-box-shadow: 0 4px 4px rgba(0, 0, 0, .5);
      box-shadow: 0 4px 4px rgba(0, 0, 0, .5);
    `}
  transition: background-color .3s ease;
`;

const TransparentNavbar = (props) => {
  const [transparent, setTransparent] = useState(true);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      setTransparent(currPos.y === 0);
    },
    [transparent]
  )

  return <StyledNavbar {...props} bg={transparent ? '' : props.bg} fixed="top" transparent={transparent} />
}

export default TransparentNavbar;
