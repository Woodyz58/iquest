module.exports = {
  siteMetadata: {
    title: `iQuest | IT Services Perth`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `l607gfccuesq`,
      accessToken: 'ZHnwWLDCMZ3n3A4E-_wylnbkZGkS354Z7qp50JWGSdQ',
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `l607gfccuesq`,
        accessToken: `klEXLfNSIBeh5jdMablHxEL7mn95-Aajp4WO9DXAqeo`,
        host: `preview.contentful.com`,
      },
    },
    // {
    //   resolve: "gatsby-plugin-web-font-loader",
    //   options: {
    //     typekit: {
    //       id: process.env.zgu5zvw,
    //     },
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/iQuest-Favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
