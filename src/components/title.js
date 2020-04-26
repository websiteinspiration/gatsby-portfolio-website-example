import React from 'react';

import styles from './title.module.scss';

export default function Title({ title }) {
  return (
    <div className={styles.title}>
      <div className={styles.inner}>
        <h1>{title}</h1>
      </div>
    </div>
  );
}
