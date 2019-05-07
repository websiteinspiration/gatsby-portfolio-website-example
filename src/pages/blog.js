import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql } from 'gatsby';
import React from 'react';

import BlogIndexEntry from '../components/blog/blogIndexEntry';
import Layout from '../components/layout';

import styles from './blog.module.scss';

export default function Blog({ data }) {
  return (
    <Layout title="Blog">
      <main id={styles.blog}>
        <h1><FontAwesomeIcon icon="rss" /> Blog</h1>
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
          date(formatString: "MMMM D, YYYY")
        }
        fields {
          slug
        }
      }
    }
  }
`;