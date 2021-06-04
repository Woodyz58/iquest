import * as React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from "../components/header"

function CaseStudies(props) {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Case Studies | IT Support Services Perth</title>
    </Helmet>
    <Header/>
    </>
  )
}

export default CaseStudies