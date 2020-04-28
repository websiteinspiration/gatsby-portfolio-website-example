import React, { useState } from 'react';

import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SocialLink from '../components/socialLink';

import title from '../images/title.png';

import styles from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Index({ data }) {
  const [currentLink, setCurrentLink] = useState();

  const currentLinkClass = currentLink
    ? `${styles.linkName} ${styles.show}`
    : `${styles.linkName} ${styles.hide}`;

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
          <div className={currentLinkClass}>
            {currentLink || <span>&nbsp;</span>}
          </div>
          <div className={styles.scrollIndicator}>
            <FontAwesomeIcon icon="angle-double-down" />
          </div>
        </div>
      </div>
      <div className={styles.book}>
        <img src="/book.png" />
        <div className={styles.content}>
          <h1>Using Gatsby and Netlify CMS</h1>
          <p>My first book is now available via Leanpub.</p>
          <p>
            Building maintainable web sites is hard. It's easy (and free!) with
            Netlify CMS. Combined with the ease and power of Gatsby, this book
            will walk you through creating a fast, easily maintainable web site.
          </p>
          
          <p>
            <a href="https://leanpub.com/using-gatsby-and-netlify-cms">Get the book</a>
          </p>

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
