import { Link } from 'gatsby';
import React from 'react';

import styles from './blogIndexEntry.module.scss';

export default function BlogIndexEntry({ node }) {
  return (
    <section className={styles.entry}>
      <div className={styles.timestamp}>{node.frontmatter.date}</div>
      <h2><Link to={node.fields.slug}>{node.frontmatter.title}</Link></h2>
      <div>{node.frontmatter.summary}</div>
    </section>
  );
}
