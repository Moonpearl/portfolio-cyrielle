import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const Styles = {
  Header: styled.header`
    color: white;
    background-color: rebeccapurple;
    padding: 1.5rem;

    & a {
      color: inherit;
      text-decoration: none;
    }
  `,
};

const Header = ({ siteTitle }) =>
  <Styles.Header>
    <Container>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </Container>
  </Styles.Header>
;

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
