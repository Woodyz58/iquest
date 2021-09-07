import * as React from "react"
import { Helmet } from "react-helmet"
import PageTransition from 'gatsby-plugin-page-transitions';
import Header from "../../components/Global/header"
import Footer from "../../components/Global/footer"

export default function Testimonials(props) {
  return (
    <>
      <PageTransition>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Our Testimonials | IT Support Perth | Corporate IT Services Perth | Managed IT Perth</title>
        </Helmet>
        <Header />
        <div className="relative transparent overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="relative z-10 pb-8 flex flex-wrap items-end sm:pb-16 md:pb-20 lg:max-w-full lg:w-full lg:pb-28 xl:pb-20">
              <main className="mt-10 max-w-3xl px-4 float-left sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-24">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl md:leading-none font-extrabold text-white sm:text-5xl md:text-6xl">
                    <span className="block text-blue-lighter xl:inline">Our Testimonials</span>
                  </h1>
                </div>
              </main>
            </div>
          </div>
        </div>
        <div className="wave-divider"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path></svg></div>
        <section className="bg-white">
          <div className="max-w-6xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
            <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 lg:pr-16">
              <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
                <div className="relative text-lg font-medium text-gray-600 md:flex-grow">
                  <svg
                    className="absolute -top-4 -left-6 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-600"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                    molestiae. Numquam corrupti in laborum sed rerum et corporis.
                  </p>
                </div>
                <footer className="mt-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 inline-flex rounded-full">
                      <img
                        className="h-12 w-12 rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-base font-medium text-gray-600">Judith Black</div>
                      <div className="text-base font-medium text-gray-400">CEO, Tuple</div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
            <div className="py-12 px-4 sm:px-6 md:py-16 md:pr-0 md:pl-10 lg:pl-16">
              <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
                <div className="relative text-lg font-medium text-gray-600 md:flex-grow">
                  <svg
                    className="absolute -top-4 -left-6 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-600"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                    molestiae. Numquam corrupti in laborum sed rerum et corporis. Nemo expedita voluptas culpa sapiente
                    alias molestiae.
                  </p>
                </div>
                <footer className="mt-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 inline-flex rounded-full">
                      <img
                        className="h-12 w-12 rounded-full"
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-base font-medium text-gray-600">Joseph Rodriguez</div>
                      <div className="text-base font-medium text-gray-400">CEO, Workcation</div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>
        <Footer />
      </PageTransition>
    </>
  )
}