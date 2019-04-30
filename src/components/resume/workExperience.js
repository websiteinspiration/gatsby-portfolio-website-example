import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <div className={styles.title}><FontAwesomeIcon icon="user-tie" /> {title}</div>
        <div><FontAwesomeIcon icon="map-marker" /> {location}</div>
        <div><FontAwesomeIcon icon="calendar-alt" /> {years}</div>
      </div>
      <div>
        {children}
      </div>
    </section>
  );
}