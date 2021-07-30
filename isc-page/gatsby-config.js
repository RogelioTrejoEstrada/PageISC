/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notes`,
        path: `${__dirname}/src/notes/`,
      },
    }
  ],
  siteMetadata: {
    title: 'ISC UPA',
    description: 'Página de Ingeniería en Sistemas Computacionales',
    copyright: 'Este sitio es Copyright 2021 ISC UPA'
  }
}
