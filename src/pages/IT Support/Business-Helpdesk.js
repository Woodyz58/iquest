import * as React from "react"
import { Helmet } from "react-helmet"
import PageTransition from 'gatsby-plugin-page-transitions';

import Header from "../../components/Global/header"
import Footer from "../../components/Global/footer"

function BusinessHelpdesk(props) {
  return (
    <>
    <PageTransition>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Business Helpdesk Support - iQuest</title>
    </Helmet>
    <Header/>
    <Footer/>
    </PageTransition>
    </>
  )
}

export default BusinessHelpdesk