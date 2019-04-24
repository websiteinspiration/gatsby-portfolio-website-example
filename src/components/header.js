import { graphql, useStaticQuery } from 'gatsby';
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
    }
  `);

  return (
    <header className={styles.header}>
      <h1>{data.site.siteMetadata.title}</h1>
    </header>
  );
}