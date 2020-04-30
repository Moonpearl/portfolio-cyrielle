import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Container, Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
import { TransparentNavbar } from '../../../styles';
import { Link } from 'gatsby';

const Styles = {
  Header: styled.header`
  `,
};

const NavLink = ({ href, children }) => <Link to={href} className="nav-link">{children}</Link>;

const Header = ({ siteTitle }) =>
  <Styles.Header>
    <TransparentNavbar bg="dark" variant="dark" expand="md">
      <Link to="/">
        <Navbar.Brand>
          {siteTitle}
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink href="/news">News</NavLink>
          <NavLink href="/gallery">Gallery</NavLink>
        </Nav>
      </Navbar.Collapse>
    </TransparentNavbar>
  </Styles.Header>
;

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
