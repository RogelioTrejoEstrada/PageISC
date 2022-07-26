/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {

  /* Your site config here */
  plugins: [

    
      
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-plugin-react-helmet`,


    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `thumbLabs`,
        path: `${__dirname}/src/thumbLabs/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `thumbNosotros`,
        path: `${__dirname}/src/thumbNosotros/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `archivos`,
        path: `${__dirname}/src/archivos/`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `thumbCampus`,
        path: `${__dirname}/src/thumbCampus/`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `materias`,
        path: `${__dirname}/src/materias/`,
      },
    },

    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              
            },
          },
        ],
      },
    },





    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'ISC-UPA',
        short_name: 'ISC-UPA',
        start_url: '/',
        background_color: '#f7f0eb',
        display: 'standalone',
        icon: 'src/images/fav.png',
      },
    }

  ],
  siteMetadata: {
    title: 'Ingeniería en Sistemas Computacionales',
    titleTemplate: "%s . UPA",
    description: 'Sitio WEB del programa académico ISC de la Universidad Politécnica de Aguascalientes',
    url: "http://isc.upa.edu.mx/",
    copyright: 'Copyright 2021 ISC UPA',
    contact: 'isei@upa.edu.mx',
    image: '/images/UPA_Logo.png'
  },
}