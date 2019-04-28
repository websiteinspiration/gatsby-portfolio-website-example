import React from 'react';
import Img from 'gatsby-image';

import styles from './workExperience.module.scss';

export default function WorkExperience({ children, logo, name, location, title, years }) {
  return (
    <section className={styles.gridSection}>
      <div>
        <Img fixed={logo.childImageSharp.fixed} />
      </div>
      <div>
        <h2>{name}</h2>
        <div className={styles.title}>{title}</div>
        <div>{location}</div>
        <div>{years}</div>
      </div>
      <div>
        {children}
      </div>
    </section>
  );
}