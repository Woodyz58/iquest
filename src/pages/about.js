import * as React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from "../components/header"

function About(props) {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>About iQuest | IT Support Perth | Corporate IT Services Perth | Managed IT Perth</title>
    </Helmet>
    <Header/>
    </>
  )
}

export default About