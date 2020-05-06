import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';

import { Layout, SEO, HeaderBanner, MarkdownTextContainer, PictureCard, PictureModal } from '../components';
import { MIN_WIDTH } from '../styles/variables';

const Styles = {
  PictureContainer: styled.div`
    @media ${MIN_WIDTH.sm} {
      margin: 0 auto;
      max-width: 22rem;
    }
  `,
};

const ArticlePage = ({ data }) => {
  const { datoCmsArticle: article, datoCmsPage: page } = data;

  const [currentPicture, setCurrentPicture] = useState(null);

  console.log(data);

  return (
    <Layout>
      <SEO title={article.title} />
      <HeaderBanner
        imageUrl={article.artwork ? article.artwork.image.fluid.src : page.articleDefaultBanner.url}
        title={article.title}
      />
      <Container>
        { article.artwork &&
          <Styles.PictureContainer>
            <PictureCard
              {...article.artwork}
              setCurrentPicture={setCurrentPicture}
            />
          </Styles.PictureContainer>
        }
        <hr />
        <MarkdownTextContainer textNode={article.contentNode} />
        <small className="text-muted">
          Published on {new Date(article.meta.firstPublishedAt).toLocaleString('en-EN')} 
        </small>
        <hr />
        {article.gallery.length > 0 &&
          <ImageGallery
            items={article.gallery.map(
              item => ({
                original: item.fluid.src,
                thumbnail: item.fluid.src,
              })
            )}
          />
        }
      </Container>
      { currentPicture !== null &&
        <PictureModal
          picture={currentPicture}
          onHide={() => setCurrentPicture(null)}
        />
      }
    </Layout>
  );
}

export default ArticlePage;

export const query = graphql`
  query ArticleQuery($slug: String!) {
    datoCmsPage {
      articleDefaultBanner {
        url
      }
    }
    datoCmsArticle(slug: { eq: $slug }) {
      title
      contentNode {
        childMarkdownRemark {
          html
        }
      }
      artwork {
        name
        descriptionNode {
          childMarkdownRemark {
            html
          }
        }
        image {
          fluid {
            src
          }
        }
        backgroundColor {
          red
          green
          blue
        }
      }
      gallery {
        fluid {
          src
        }
      }
      meta {
        firstPublishedAt
      }
    }
  }
`
