import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import Layout from '../components/layout';

import styles from './404.module.scss';

export default function PageNotFound({ data }) {
  return (
    <Layout>
      <div id={styles.content}>
        <Img 
          sizes={data.cat.childImageSharp.sizes} 
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%'
          }}/>
          <div className={styles.overlay}></div>
          <div className={styles.center}>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <h3>Not all who wander are lost, but you may be.</h3>
          </div>
        </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  {
    cat: file(relativePath: { eq: "cat.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1200) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;