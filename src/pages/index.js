import React, { useState } from 'react';

import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SocialLink from '../components/socialLink';

import title from '../images/title.png';

import styles from './index.module.scss';

export default function Index({ data }) {
  const [currentLink, setCurrentLink] = useState();

  const currentLinkClass = currentLink ? `${styles.linkName} ${styles.show}` : `${styles.linkName} ${styles.hide}`;

  return (
    <Layout transparentHeader={true}>
      <div className={styles.hero}>
        <Img
          sizes={data.heroImage.childImageSharp.sizes}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%'
          }}
        />
        <div className={styles.overlay} />
        <div className={styles.center}>
          <div className={styles.title}>
            <img src={title} />
          </div>
          <div className={styles.links}>
            <SocialLink
              href="mailto:jattardi@gmail.com"
              icon="envelope"
              onMouseOver={() => setCurrentLink('Email')}
              onMouseOut={() => setCurrentLink('')}
            />
            <SocialLink
              href="https://twitter.com/joeattardi"
              icon={['fab', 'twitter']}
              onMouseOver={() => setCurrentLink('Twitter')}
              onMouseOut={() => setCurrentLink('')}
            />
            <SocialLink
              href="https://github.com/joeattardi"
              icon={['fab', 'github']}
              onMouseOver={() => setCurrentLink('GitHub')}
              onMouseOut={() => setCurrentLink('')}
            />
            <SocialLink
              href="https://linkedin.com/in/joeattardi"
              icon={['fab', 'linkedin']}
              onMouseOver={() => setCurrentLink('LinkedIn')}
              onMouseOut={() => setCurrentLink('')}
            />
            <SocialLink
              href="https://dev.to/joeattardi"
              icon={['fab', 'dev']}
              onMouseOver={() => setCurrentLink('DEV Community')}
              onMouseOut={() => setCurrentLink('')}
            />
          </div>
          <div className={currentLinkClass}>{currentLink || <span>&nbsp;</span>}</div>
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
