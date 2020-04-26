import { Link } from 'gatsby';
import React from 'react';

import styles from './blogIndexEntry.module.scss';

export default function BlogIndexEntry({ node }) {
  return (
    <section className={styles.blog}>
      <Link to={node.fields.slug} className={styles.bannerLink}>
        {node.frontmatter.image ? (
          <img src={node.frontmatter.image} />
        ) : (
          <div className={styles.placeholder}>{node.frontmatter.banner}</div>
        )}
      </Link>
      <div className={styles.entry}>
        <div className={styles.timestamp}>{node.frontmatter.date}</div>
        <h2>
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        </h2>
        <div>{node.excerpt}</div>
      </div>
    </section>
  );
}
