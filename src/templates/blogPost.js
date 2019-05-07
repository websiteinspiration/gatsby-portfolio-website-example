import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DiscussionEmbed } from 'disqus-react';
import { Link, graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/layout';

import styles from './blogPost.module.scss';

export default function BlogPost({ data, pageContext }) {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;

  const disqusShortname = 'joeattardi-codes';
  const disqusConfig = {
    identifier: post.id,
    title: post.frontmatter.title
  };

  return (
    <Layout title={post.frontmatter.title}>
      <main id={styles.blogPost}>
        <section id={styles.title}>
          <h1>{post.frontmatter.title}</h1>
        </section>
        <section id={styles.metadataContainer}>
          <div id={styles.metadata}>
            Posted on <strong>{post.frontmatter.date}</strong>
          </div>
        </section>
        <article id={styles.postBody}>
          <div dangerouslySetInnerHTML={{__html: post.html }}></div>
        </article>
        <section id={styles.linksContainer}>
          <div id={styles.links}>
            {previous && (
              <Link to={previous.fields.slug} rel="previous">
                <FontAwesomeIcon icon="arrow-left" /> {previous.frontmatter.title}
              </Link>
            )}
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} <FontAwesomeIcon icon="arrow-right" />
              </Link>
            )}
          </div>
        </section>
        <section id={styles.comments}>
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </section>
      </main>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug }}) {
      html
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;