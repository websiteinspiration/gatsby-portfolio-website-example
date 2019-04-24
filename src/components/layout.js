import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import { library } from '@fortawesome/fontawesome-svg-core';

import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons';

import Header from './header';

import './layout.scss';

library.add(faEnvelope, faGithub, faLinkedin, faMapMarker, faTwitter);

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
      </Helmet>
      <Header />
      {children}
    </div>
  );
}
