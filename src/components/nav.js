import { Link } from 'gatsby';
import React from 'react';

import styles from './nav.module.scss';

export default function Nav() {
  return (
    <nav id={styles.siteNavigation}>
      <Link to="/">Home</Link>
      |
      <Link to="/projects">Projects</Link>
      |
      <Link to="/resume">Resume</Link>
    </nav>
  );
}