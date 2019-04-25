import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import styles from './header.module.scss';

export default function Header() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }

      headshot: file(relativePath: { eq: "joe.jpeg" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <header className={styles.header}>
      <Img 
        fixed={data.headshot.childImageSharp.fixed} 
        style={{
          borderRadius: '50%',
          marginRight: '0.5em'
        }}/>
      <h1>{data.site.siteMetadata.title}</h1>
    </header>
  );
}