import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import Layout from '../components/layout';

import styles from './index.module.scss';

export default function Index() {
  return (
    <Layout>
      <div className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={styles.center}>
          <div className={styles.title}>
            <h1>Joe Attardi</h1>
            <h2>Software Engineer</h2>
          </div>
          <div className={styles.links}>
            <div className={styles.link}>
              <a href="mailto:jattardi@gmail.com">
                <FontAwesomeIcon icon="envelope" />
              </a>
            </div>
            <div className={styles.link}>
              <a href="https://twitter.com/joeattardi">
                <FontAwesomeIcon icon={['fab', 'twitter']} />
              </a>
            </div>
            <div className={styles.link}>
              <a href="https://github.com/joeattardi">
                <FontAwesomeIcon icon={['fab', 'github']} />
              </a>
            </div>
            <div className={styles.link}>
              <a href="https://linkedin.com/in/joeattardi">
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}