import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';

import Nav from './nav';

import title from '../images/title.png';

import styles from './header.module.scss';

export default function Header({ transparent }) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const classes = transparent ? `${styles.header} ${styles.transparent}` : styles.header;

  return (
    <header className={classes} >      
      <Link to="/"><img src={title} /></Link>
      <Nav />
    </header>
  );
}