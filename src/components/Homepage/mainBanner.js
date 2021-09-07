import * as React from "react"

export default function MainBanner() {
  return (
    <div className="relative transparent overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="relative z-10 pb-8 flex flex-wrap items-end sm:pb-16 md:pb-20 lg:max-w-full lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 max-w-3xl px-4 float-left sm:mt-12 sm:px-6 md:mt-16 lg:mt-18 lg:px-8 xl:mt-18">
            <div className="sm:text-center lg:text-left">
              <h4 className="text-md md:text-lg text-white tracking-wide mb-4">Perth's leading IT solutions team since 2004</h4>
              <h1 className="text-4xl leading-tight font-bold sm:text-5xl md:leading-tight md:text-7xl text-blue-lighter">iQuest provide exceptional IT support</h1>
              <p className="mt-3 text-md leading-relaxed text-white sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
                iQuest provide a complete suite of IT support services that allow you to focus on what's important - your business. Talk to us today about how we can improve business performance and productivity.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">Our services</a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">Helpdesk</a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

