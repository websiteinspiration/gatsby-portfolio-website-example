const { join } = require('path');

module.exports = {
  siteMetadata: {
    title: 'Joe Attardi'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: join(__dirname, 'src', 'images')
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
  ]
};
