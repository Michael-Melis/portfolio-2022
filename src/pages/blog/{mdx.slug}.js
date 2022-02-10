import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <div className="resume-container font-mono text-white ">
      <title>{data.mdx.frontmatter.title}</title>
      <p>Posted: {data.mdx.frontmatter.date}</p>
      <GatsbyImage
        className="mb-8"
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
      />
      <div className="mx-4 lg:mx-16 work-example-p  ">
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>
    </div>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default BlogPost;
