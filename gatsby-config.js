/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "Audit thing Page",
    titleTemplate: "Audit Thing",
    description: "A simple one-page site for new businesses that uses GatsbyJS",
    siteUrl: "https://thestartup.netlify.com",
    author: "Team1",
    authorSite: "https://github.com/safwan234567/Linux-Auditing-Major-Project",
    image: "",
    twitterUsername: "@twitter",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
  ],
}
