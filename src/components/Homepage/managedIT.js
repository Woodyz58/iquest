import * as React from "react"
import mockup from "/src/images/iQuest-IT-Mockup.jpg"
import googleReviews from "/src/images/Google-Reviews.png"

/* This example requires Tailwind CSS v2.0+ */
import { InboxIcon, InformationCircleIcon } from '@heroicons/react/outline'

export default function ManagedIT() {
  return (
    <div className="relative pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-6xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-6xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
                  <InformationCircleIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-white">
                  Fully managed IT services
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-white">
                From consulting and fully managed IT support services to business IT cloud solutions and long term IT strategies,  iQuest is the trusted IT company and technology partner behind some of Perth’s biggest companies, with a 96% client retention rate since 2004.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-white">
                    &ldquo;I cannot thank iQuest enough. Professional, responsive and willing to assist on such short notice.&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="text-base font-medium text-gray-400">Elvira Mustafa</div>
                    <div className="flex-shrink-0">
                      <img className="h-4" src={googleReviews} alt="Google Reviews" />
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="px-4 sm:pl-6 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={mockup}
                alt="iQuest Computer Mockup"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
