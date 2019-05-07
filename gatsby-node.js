const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = function({ node, getNode, actions }) {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'posts' });
    createNodeField({
      node,
      name: 'slug',
      value: slug
    });
  }
};

exports.createPages = async function({ graphql, actions }) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `);

  const posts = result.data.allMarkdownRemark.nodes;
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1];
    const next = index === 0 ? null : posts[index - 1];

    createPage({
      path: post.fields.slug,
      component: path.resolve(__dirname, 'src', 'templates', 'blogPost.js'),
      context: {
        slug: post.fields.slug,
        previous,
        next
      }
    });
  });
};
