import * as React from "react"
import { Helmet } from "react-helmet"
import PageTransition from 'gatsby-plugin-page-transitions';
import Header from "../components/Global/header"
import Footer from "../components/Global/footer"
import "../styles/internal.css";

// IMAGES
import mockup from "/src/images/About-iQuest-Image.jpg"
import FreoLogo from "/src/images/logos/Fremantle-Dockers-Logo.png"
import GoldfieldsLogo from "/src/images/logos/Goldfields-Logo.png"
import GiorgiLogo from "/src/images/logos/Gorgi-Logo.png"
import GumalaLogo from "/src/images/logos/Gumala-Logo.png"
import SingtelLogo from "/src/images/logos/Singtel-Logo.png"


const pages = [
  { name: 'About iQuest', href: '/', current: false },
]

export default function About(props) {
  return (
    <>
    <PageTransition>
    <Helmet>
      <meta charSet="utf-8" />
      <title>About iQuest | IT Support Perth | Corporate IT Services Perth | Managed IT Perth</title>
    </Helmet>
    <Header/>
    <div className="relative transparent overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="relative z-10 pb-8 flex flex-wrap items-end sm:pb-16 md:pb-20 lg:max-w-full lg:w-full lg:pb-28 xl:pb-20">
          <main className="mt-10 max-w-2xl px-4 float-left sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-24">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl md:leading-none font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block lightBlue xl:inline">About iQuest</span>
              </h1>
              <p className="mt-3 text-lg leading-relaxed text-white sm:max-w-xl sm:mx-auto lg:mx-0">We're Perth's leading IT consulting company, ready to deploy experts anytime & anywhere.</p>
            </div>
          </main>
        </div>
      </div>
    </div>
    <div className="wave-divider"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path></svg></div>
    {/* <div class="wavey_divider2"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path></svg></div> */}
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="relative z-10 pt-16 pb-28 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl md:max-w-4xl mb-3 font-extrabold leading-normal tracking-normal text-gray-900">iQuest are a dynamic and progressive company founded with a clear objective</h2>
          <h4 className="mt-2 mb-6 text-xl text-gray-900">Local IT Services helping you access your content anywhere!</h4>
          <p className="mt-5 text-normal leading-relaxed text-gray-600">
            Our goal is to provide our West Australian clients with the most effective technology support and solutions for their business. We strive to be innovative and cost-effective across all areas of our work, from network installations and software deployment through to helpdesk support and cloud technology, iQuest are the leaders in Perth IT support and technology systems.
          </p>
          <p className="mt-5 text-normal leading-relaxed text-gray-600">
            iQuest may be a technology company, but at the very core we provide exceptional good old-fashioned service. In a highly competitive market, we are able to distinguish ourselves by offering a personal, tailored service that delivers the very best IT solutions for each and every one of our clients. iQuest was created not only to provide professional IT services to Perth and West Australian businesses but to educate our clients on how technology can run and support businesses. Our success is measured by a high customer satisfaction rate and determined by the commitment and competence of our team of IT Engineers.
          </p>
          <img className="w-full mt-20 rounded-xl shadow-xl lg:w-auto" src={mockup} width="1224" height="470" alt="iQuest About Us Banner"/>
        </div>
      </div>
    </div>
    <div className="max-w-6xl mx-auto px-4 py-24 sm:px-6">
        <div class="flex items-center space-x-5">
        <div class="flex-1"><img className="client_logo md:px-0 px-2 mx-auto" src={SingtelLogo} width="150" height="81" alt="Singtel Logo" /></div>
        <div class="flex-1"><img className="client_logo md:px-0 px-2 mx-auto" src={GiorgiLogo} width="150" height="81" alt="Gorgi Logo" /></div>
        <div class="flex-1"><img className="client_logo md:px-0 px-2 mx-auto" src={FreoLogo} width="150" height="81" alt="Fremantle Dockers Logo" /></div>
        <div class="flex-1"><img className="client_logo md:px-0 px-2 mx-auto" src={GoldfieldsLogo} width="150" height="81" alt="Goldfields Logo" /></div>
        <div class="flex-1"><img className="client_logo md:px-0 px-2 mx-auto" src={GumalaLogo} width="150" height="81" alt="Gumala Logo" /></div>
        </div>
    </div>
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="relative z-10 py-28 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl md:max-w-4xl mb-3 font-extrabold leading-normal tracking-normal text-gray-900">The iQuest Team</h2>
          <h4 className="mt-2 mb-6 text-xl text-gray-900">A message from the directors</h4>
          <p className="mt-5 text-normal leading-relaxed text-gray-600">
          In this fast paced world where everything beeps, blinks and connects, Information Technology (IT) is one of those industries which every single business relies so heavily upon yet, most people don’t understand it. It is the way we connect, operate, and build systems. The ‘ignorance is bliss’ approach can be tempting until systems break down and you are at risk of losing everything. Is this something you have experienced in the past? We come across so many who have.
          </p>
          <p className="mt-5 text-normal leading-relaxed text-gray-600">
          We give you the right solutions because your business needs them, not because it’s a ‘one size fits all’ template. And we look at each individual business to create solutions that are right for you. I can say, along with the other Directors, that we are so proud of the business iQuest has become in this day. Likewise we are also proud of the fantastic team of experienced and passionate IT professionals who work hard with us at providing exceptional service. We hope you will give us the opportunity to work with you too.
          <p className="mt-5 font-bold">Anderson Chong, Managing Director</p>
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </PageTransition>
    </>
  )
}