import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import Layout from '../components/layout';

import styles from './index.module.scss';

export default function Index({ data }) {
  return (
    <Layout>
      <div className={styles.hero}>
        <Img 
          sizes={data.heroImage.childImageSharp.sizes} 
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%'
          }}/>
        <div className={styles.overlay}></div>
        <div className={styles.center}>
          <div className={styles.title}>
            <h1>Joe Attardi</h1>
            <h2>Software Engineer</h2>
          </div>
          <div className={styles.links}>
            <div className={styles.link}>
              <a href="mailto:jattardi@gmail.com">
                <FontAwesomeIcon icon="envelope" />
              </a>
            </div>
            <div className={styles.link}>
              <a href="https://twitter.com/joeattardi">
                <FontAwesomeIcon icon={['fab', 'twitter']} />
              </a>
            </div>
            <div className={styles.link}>
              <a href="https://github.com/joeattardi">
                <FontAwesomeIcon icon={['fab', 'github']} />
              </a>
            </div>
            <div className={styles.link}>
              <a href="https://linkedin.com/in/joeattardi">
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  {
    heroImage: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1200) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;