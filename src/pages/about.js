import * as React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Header from "../components/header"
import Footer from "../components/footer"

import { ChevronRightIcon, HomeIcon } from '@heroicons/react/solid'

const pages = [
  { name: 'About iQuest', href: '/', current: false },
]

export default function About(props) {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>About iQuest | IT Support Perth | Corporate IT Services Perth | Managed IT Perth</title>
    </Helmet>
    <Header/>
    <div className="relative rounded-xl max-w-6xl mx-auto py-8">
      <div className="absolute inset-0">
        {/* <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
          alt=""
        /> */}
        {/* <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" aria-hidden="true" /> */}
      </div>
      <div className="relative max-w-6xl mx-auto py-20 px-4 sm:py-22">
          <nav className="flex mb-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-4">
            <li>
              <div>
                <a href="#" className="text-white hover:text-gray-400">
                  <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">Home</span>
                </a>
              </div>
            </li>
            {pages.map((page) => (
              <li key={page.name}>
                <div className="flex items-center">
                  <ChevronRightIcon className="flex-shrink-0 h-5 w-5 text-white" aria-hidden="true" />
                  <a
                    href={page.href}
                    className="ml-4 text-sm font-medium text-white hover:text-gray-400"
                    aria-current={page.current ? 'page' : undefined}
                  >
                    {page.name}
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">About iQuest</h1>
        <p className="mt-6 text-xl text-white max-w-xl">
          Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque lacus nisi urna, arcu sociis eu. Orci vel
          lectus nisl eget eget ut consectetur.
        </p>
      </div>
    </div>
    <Footer/>
    </>
  )
}