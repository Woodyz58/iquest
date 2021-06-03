import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Header from "../components/header"
import Mainbanner from "../components/mainBanner"
import Clientlogos from "../components/clientLogos"

function IndexPage(props) {
  return (
    <>
    <Header/>
    <Mainbanner/>
    <Clientlogos/>
    </>
  )
}

export default IndexPage
