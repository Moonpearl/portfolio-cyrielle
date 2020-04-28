import React from 'react';
import { Link } from 'gatsby';
import { Button } from 'react-bootstrap';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import { Layout, SEO } from '../components';

const Page = ({ pageContext }) =>
  <Layout>
    <SEO title={`Page ${pageContext.pageNumber}`} />
    <h1>Page {pageContext.pageNumber}</h1>
    <p>Welcome to page {pageContext.pageNumber}</p>
    <Link to="/">
      <Button variant="secondary">
        <FaAngleLeft /> Back
      </Button>
    </Link>
    <Link to={pageContext.nextPage ? pageContext.nextPage : '/'}>
      <Button>
        Next page <FaAngleRight />
      </Button>
    </Link>
  </Layout>
;

export default Page;
