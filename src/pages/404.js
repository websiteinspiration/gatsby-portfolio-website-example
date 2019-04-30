import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import Layout from '../components/layout';

import styles from './404.module.scss';

export default function PageNotFound({ data }) {
  console.log(data); 
  return (
    <Layout>
      <main id={styles.content}>
        <h1>Page Not Found</h1>
        <div>Sorry, the page you are looking for was not found. Here is a cat picture.</div>
        <Img fixed={data.cat.childImageSharp.fixed} />
      </main>
    </Layout>
  );
}

export const pageQuery = graphql`
  {
    cat: file(relativePath: { eq: "cat.jpg" }) {
      childImageSharp {
        fixed(width: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;