import * as React from "react"
import PageTransition from 'gatsby-plugin-page-transitions';
import InternalLayout from "../components/layout/InternalLayout"
import { StaticImage } from "gatsby-plugin-image"

function CaseStudies() {

  return (
    <>
      <PageTransition>
        <InternalLayout title="Case Studies">
          <h2>Since its establishment in 2004, iQuest has delivered the expertise, hands on knowledge and experience to clients in the successful identification and management of their IT requirements.</h2>
          <p>We listen to your needs and provide customised solutions. If you’re looking for a qualified business to assist in your IT requirements, iQuest is a sound investment for your IT spend. iQuest provides professional IT solutions to a diverse range of business sectors such as leading WA sporting entities, construction companies and  Not For Profit organisations, ensuring their businesses have the very best in IT services and solutions.  We pride ourselves on our mission where “We strive to create exceptional trust with whomever we encounter.” Below, we share a few of our many victories...</p>
        </InternalLayout>
      </PageTransition>
    </>
  )
}

export default CaseStudies