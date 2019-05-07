import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import Header from './header';
import '../icons';

import './layout.scss';

export default function Layout({ children, title }) {
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
        <title>{(title ? `${title} | ` : '') + data.site.siteMetadata.title}</title>
        <link rel="alternative" type="application/rss+xml" title="Joe Attardi's Blog" href="/rss.xml" />
      </Helmet>
      <Header />
      <div id="page-container">
        {children}
      </div>
    </div>
  );
}
