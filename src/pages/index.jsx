import React from 'react';
import { Link } from 'gatsby';
import { Layout, SEO, Image } from '../components';
import { Button } from 'react-bootstrap';
import { FaAngleRight } from 'react-icons/fa';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Home page</h1>
    <div>
      <Image picture={data.bannerImage} />
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur reiciendis possimus cum inventore porro mollitia quo, natus odio tempora ducimus voluptates vitae impedit consequatur rem perspiciatis! Nemo dolorum a repellat neque illum voluptatibus incidunt alias nisi beatae! Magnam in pariatur ducimus odio non, quam sequi alias, repudiandae ad optio facilis exercitationem provident aspernatur nostrum! Aperiam corrupti voluptas expedita error quas velit aliquam consequatur, repellendus voluptatibus labore molestiae, perferendis, debitis officiis cumque inventore beatae. Quis facere laudantium minima repudiandae sint deserunt esse est nobis nisi, recusandae autem tenetur? Soluta esse sint, perferendis atque saepe voluptatem magnam? Voluptas inventore ducimus soluta sequi.</p>
    <Link to="/pages/2">
      <Button>
        Go to page 2 <FaAngleRight />
      </Button>
    </Link>
  </Layout>
)

export default IndexPage;

export const query = graphql`
  query {
    bannerImage: file(relativePath: { eq: "banner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
