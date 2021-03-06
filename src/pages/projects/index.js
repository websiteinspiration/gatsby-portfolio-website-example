import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import Layout from '../../components/layout';
import ProjectCard from '../../components/projects/projectCard';

import emojiButton from '../../images/projects/emoji-button.png';
import emojiPicker from '../../images/projects/emoji-picker.png';
import githubPrDashboard from '../../images/projects/github-pr-dashboard.png';
import scrumDeck from '../../images/projects/scrum-deck.png';
import snackbar from '../../images/projects/react-snackbar-alert.png';
import tailstreamer from '../../images/projects/tailstreamer.png';

import styles from './index.module.scss';

export default function Projects() {
  return (
    <Layout title="Projects">
      <main id={styles.projects}>
        <h1><FontAwesomeIcon icon="laptop" /> Projects</h1>
        <div id={styles.projectCards}>

          <ProjectCard
            name="Emoji Button"
            image={emojiButton}
            href="https://emoji-button.js.org">
            Vanilla JavaScript emoji picker.
            <p>
              <a href="https://badge.fury.io/js/%40joeattardi%2Femoji-button"><img src="https://badge.fury.io/js/%40joeattardi%2Femoji-button.svg" alt="npm version" height="18" /></a>
            </p>
            </ProjectCard>

          <ProjectCard
            name="Emoji Picker"
            image={emojiPicker}
            href="https://emojipicker.app">
            Browse and search emojis, and copy them to your clipboard for easy use.
          </ProjectCard>

          <ProjectCard
            name="React Snackbar Alert"
            image={snackbar}
            href="https://npmjs.com/package/react-snackbar-alert">
            Simple snackbar style notifications for React.
            <p>
              <a href="https://badge.fury.io/js/react-snackbar-alert"><img src="https://badge.fury.io/js/react-snackbar-alert.svg" alt="npm version" height="18" /></a>
            </p>
          </ProjectCard>

          <ProjectCard
            name="ScrumDeck"
            image={scrumDeck} 
            href="https://github.com/joeattardi/scrum-deck">
            Online planning poker for distributed scrum teams.
          </ProjectCard>

          <ProjectCard
            name="GitHub PR Dashboard"
            image={githubPrDashboard} 
            href="https://github.com/joeattardi/github-pr-dashboard">
            See a dashboard of GitHub pull requests across multiple repos. Works with public GitHub or GitHub Enterprise.
          </ProjectCard>

          <ProjectCard
            name="TailStreamer"
            image={tailstreamer} 
            href="https://github.com/joeattardi/tailstreamer">
            Java application that lets you watch a log file in real-time with your web browser.
          </ProjectCard>

          <ProjectCard
            name="json-colorizer"
            href="https://www.npmjs.com/package/json-colorizer">
            npm package to apply syntax highlighting to JSON strings.
            <p>
            <a href="https://badge.fury.io/js/json-colorizer" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/json-colorizer.svg" alt="npm version" height="18" /></a>
            </p>
          </ProjectCard>

          <ProjectCard
            name="promise-poller"
            href="https://www.npmjs.com/package/promise-poller">
            npm package that uses promises to repeatedly try an asynchronous task.
            <p>
              <a href="https://badge.fury.io/js/promise-poller" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/promise-poller.svg" alt="npm version" height="18" /></a>
            </p>
          </ProjectCard>

        </div>
      </main>
    </Layout>
  );
}