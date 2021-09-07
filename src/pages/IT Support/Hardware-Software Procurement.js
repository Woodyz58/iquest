import * as React from "react"
import { Helmet } from "react-helmet"
import PageTransition from 'gatsby-plugin-page-transitions';

import Header from "../../components/layout/Header"
import Footer from "../../components/layout/Footer"

function HardwareSoftware(props) {
  return (
    <>
      <PageTransition>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Hardware & Software Procurement - iQuest</title>
        </Helmet>
        <Header />
        <Footer />
      </PageTransition>
    </>
  )
}

export default HardwareSoftware