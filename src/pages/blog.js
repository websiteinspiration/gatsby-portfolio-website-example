import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql } from 'gatsby';
import React from 'react';

import BlogIndexEntry from '../components/blog/blogIndexEntry';
import Layout from '../components/layout';
import Title from '../components/title';

import styles from './blog.module.scss';

export default function Blog({ data }) {
  return (
    <Layout title="Blog">
      <Title title="Blog" />
      <main id={styles.blog}>
        {data.allMarkdownRemark.nodes.map(node => <BlogIndexEntry node={node} key={node.id} />)}
      </main>
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
        frontmatter {
          title
          summary
          image
          banner
          date(formatString: "MMMM D, YYYY")
        }
        excerpt
        fields {
          slug
        }
      }
    }
  }
`;