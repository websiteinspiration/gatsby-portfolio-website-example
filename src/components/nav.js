import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import React, { useState } from 'react';

import styles from './nav.module.scss';

export default function Nav() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav id={styles.siteNavigation}>
      <div className={styles.hamburger} onClick={() => setOpen(!isOpen)}>
        <FontAwesomeIcon fixedWidth={true} icon={isOpen ? 'times' : 'bars'} />
      </div>
      <div className={`${styles.links} ${isOpen ? styles.open : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
      </div>
    </nav>
  );
}