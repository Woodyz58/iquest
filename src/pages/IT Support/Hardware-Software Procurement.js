import * as React from "react"
import { Helmet } from "react-helmet"
import PageTransition from 'gatsby-plugin-page-transitions';

import Header from "../../components/Global/header"
import Footer from "../../components/Global/footer"

function HardwareSoftware(props) {
  return (
    <>
    <PageTransition>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Hardware & Software Procurement - iQuest</title>
    </Helmet>
    <Header/>
    <Footer/>
    </PageTransition>
    </>
  )
}

export default HardwareSoftware