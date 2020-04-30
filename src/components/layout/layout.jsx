/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import { Header, Footer } from './components';

import '../../styles/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { GlobalStyle } from '../../styles/global';

const Styles = {
  PageContainer: styled.div`
    min-height: 100vh;
  `,
};

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Styles.PageContainer className="bg-dark">
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="bg-light">{children}</main>
      <Footer />
    </Styles.PageContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
