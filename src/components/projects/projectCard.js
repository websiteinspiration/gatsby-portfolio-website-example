import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import styles from './projectCard.module.scss';

export default function ProjectCard({ children, href, image, name }) {
  return (
    <div className={styles.projectCard}>
      {image ? <ProjectScreenshot href={href} image={image} /> : null}
      <div className={styles.projectCardContent}>
        <h2><a href={href} target="_blank" rel="noopener noreferrer">{name}</a></h2>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}

function ProjectScreenshot({ href, image }) {
  return (
    <div className={styles.screenshotWrapper}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div className={styles.linkIcon}>
          <FontAwesomeIcon icon="external-link-alt" />
        </div>
        <div className={styles.screenshot} style={{ backgroundImage: `url(${image})` }}></div>
      </a>
    </div>
  );
}