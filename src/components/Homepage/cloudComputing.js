import * as React from "react"

import mockup from "/src/images/iQuest-Cloud-Computing-Services.jpg"

export default function CloudComputing() {
  return (
    <div className="relative bg-white pt-20 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-6xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="px-4 sm:pl-6 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-full object-cover"
                src={mockup}
                width="540"
                height="675"
                alt="iQuest Computer Mockup"
              />
            </div>
          </div>
          <div className="px-4 max-w-6xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
                  Cloud Computing
                </h2>
                <h4 className="max-w-lg mt-2 text-xl text-gray-500">Local IT Services helping you access your content anywhere!</h4>
                <p className="mt-5 text-normal leading-relaxed text-gray-500">The concept of cloud computing may seem like a relatively new thing but it has been in use for over 10 years. Cloud Computing is a secure server that can be accessed via the internet.</p>
                <p className="mt-5 text-normal leading-relaxed text-gray-500">This allows users to access business applications and store data online without the need for onsite hardware and software. As internet security improves at an exponential rate and NBN gets rolled out across Australia, the Cloud becomes an even more attractive solution.</p>
                <div className="mt-6">
                  <a href="#" className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">Discover more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
