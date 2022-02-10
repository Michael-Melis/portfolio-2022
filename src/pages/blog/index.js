import React from "react";
import { Link, graphql } from "gatsby";
import Return from "./../../components/Return";

const BlogIndex = ({ data }) => {
  console.log(data);
  return (
    <div className="text-white font-mono m-14 ">
      <Return />
      <title>Blog</title>
      <h1 className="resume-h1 text-center">Blog list:</h1>
      {data.allMdx.nodes.map((node) => (
        <article className="  bg-gray-900 p-4 rounded-lg" key={node.id}>
          <h2 className="resume-h2">
            <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
          </h2>
          <p className="work-example-p">Posted: {node.frontmatter.date}</p>
        </article>
      ))}
    </div>
  );
};
export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
        id
        slug
      }
    }
  }
`;

export default BlogIndex;
