import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import styles from './skill.module.scss';

export default function Skill({ name, icon }) {
  return (
    <li className={styles.skill}>
      {icon ? <FontAwesomeIcon icon={['fab', icon]} /> : null}
      &nbsp;
      {name}
    </li>
  );
}