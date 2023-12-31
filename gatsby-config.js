/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
const path = require('path');

module.exports = {

 pathPrefix: "/GatsbyjsWeb.github.io",

 siteMetadata: {
  title: "My Gatsby Site",
},

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, 
    
  
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `components`,
         path: path.join(__dirname, `src`,`components`), 
      },
     }, 
   
     {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
         path: path.join(__dirname, `src`, `pages`), 
      },
     }, 


    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // The option defaults to true
        checkSupportedExtensions: false,
      },
    },
   
  ],
}
