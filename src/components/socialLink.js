import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './socialLink.module.scss';

export default function SocialLink({ href, icon, onMouseOver, onMouseOut }) {
  return (
    <div className={styles.link} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      <a href={href}>
        <FontAwesomeIcon icon={icon} />
      </a>
    </div>
  );
}
