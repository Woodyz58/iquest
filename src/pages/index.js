import * as React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Header from "../components/header"
import Mainbanner from "../components/Homepage/mainBanner"
import Clientlogos from "../components/Homepage/clientLogos"
import Featuredcontent from "../components/Homepage/featuredContent"

function IndexPage(props) {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>iQuest | IT Support Perth | Corporate IT Services Perth | Managed IT Perth</title>
    </Helmet>
    <Header/>
    <Mainbanner/>
    <Clientlogos/>
    <Featuredcontent/>
    </>
  )
}

export default IndexPage