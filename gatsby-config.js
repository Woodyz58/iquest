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
  //   {
  //   resolve: `gatsby-source-contentful`,
  //   options: {
  //     spaceId: `l607gfccuesq`,
  //     // Learn about environment variables: https://gatsby.dev/env-vars
  //     accessToken: process.env.ZHnwWLDCMZ3n3A4E-_wylnbkZGkS354Z7qp50JWGSdQ,
  //   },
  // },
    // {
    //   resolve: 'gatsby-source-graphcms',
    //   options: {
    //     endpoint: process.env.ckpgtjoub5aai01z5g51dfihu,
    //     token: process.env.eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MjMxMTEwMzMsImF1ZCI6WyJodHRwczovL2FwaS1hcC1ub3J0aGVhc3QtMS5ncmFwaGNtcy5jb20vdjIvY2twZ3Rqb3ViNWFhaTAxejVnNTFkZmlodS9tYXN0ZXIiLCJodHRwczovL21hbmFnZW1lbnQtbmV4dC5ncmFwaGNtcy5jb20iXSwiaXNzIjoiaHR0cHM6Ly9tYW5hZ2VtZW50LmdyYXBoY21zLmNvbS8iLCJzdWIiOiJjMDZiMDcyYS03ZTM4LTRhNzctYTI4NC01MzEwZTNlOWZlZDEiLCJqdGkiOiJja3BuYWVoNXBnemc5MDF4c2YxOXRhdmptIn0.ufSdx74Nai8IbkwDAf4fjtEbKQpR_YmdZ0vP_CqD2L6yvyoAoKAmh414A1btedshGu7m48FMda9kKEypumm8KEboYBe6pwJqoY4uIDkyrj_8UVouE9icq1aN7ahWehLJKRB0sr92ez9uqv2_Z7HowgPU87LwbxEcyv0Kq6D_vVIlAAgqE743QaRR67aNW9Bufnh1V8hhzFrG_kVvduHFFjpM2QdyAM8hDO0xPxhaod-YIUjCJpqcLogpa0XS-SAeJILODfdWD2wpBAet-04lt8TTunJTQx25X44MIbOc6xb-Q8P5RnQ8mvxSHmpGWJpTOzPWT1E0U4pXhZjDWSw1EYsqbAWXYdvJjyZ2EmTYoCk0vXC4tGezL1pMTFkYkQmMOieAebscUwlDoEAyOauKozpTcJP30GsynHzmqctjXqjurLV71PPrlKrTV5XY0QRlwC4bEFnVcyDCf_Xr7_UooBOh7IiiOeBzX4KYJcSMAtwgXcVaellizjmSiTaN1rAoK1OW_hifuA_ctUMg0eH1farkCAi87ppe3ghc-ScAz4AkrMbYqAgs-SxxJsLEmp6Q--m90pBt1PYVLt_xMFYkZz2OsZrjEt7kDemuLKLIiuJ5Rxnqekkk7-IEyk_nxKBGRhNQjxVIrAh33XczoEXwahmtyYEZygJpZ2n5xhBLyPg,
    //   },
    // },
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
