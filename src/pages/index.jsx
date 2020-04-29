import React from 'react';
import { Layout, SEO, MarkdownTextContainer } from '../components';
import { Jumbotron, Container } from 'react-bootstrap';

const IndexPage = ({ data }) => {
  const { datoCmsAboutPage: about } = data;

  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Jumbotron>
          <MarkdownTextContainer textNode={about.bioNode} />
        </Jumbotron>
      </Container>
    </Layout>
  );
}

export default IndexPage;

export const query = graphql`
  query HomeQuery {
    datoCmsAboutPage {
      bioNode {
        childMarkdownRemark {
          html
        }
      }
      sections {
        title
        slug
        backgroundColor {
          rgb
        }
        backgroundImage {
          url
        }
        textColor {
          rgb
        }
        descriptionNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;
