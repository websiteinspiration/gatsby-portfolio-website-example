import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import Header from './header';
import '../icons';

import './layout.scss';

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
