import { Link } from 'gatsby';
import React from 'react';

import styles from './nav.module.scss';

export default function Nav() {
  return (
    <nav id={styles.siteNavigation}>
      <Link to="/resume">Resume</Link>
    </nav>
  );
}