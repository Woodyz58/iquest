import * as React from "react"
import casestudy1 from "/src/images/iQuest-Client-Singtel.jpg"
import casestudy2 from "/src/images/iQuest-Client-SLSC.jpg"
import casestudy3 from "/src/images/iQuest-Client-Kwik-Logistics.jpg"

export default function CaseStudies() {
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:pt-12 sm:pb-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold text-indigo-600 tracking-wide uppercase"></p>
            <h2 className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">iQuest Case Studies</h2>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Start building for free, then add a site plan to go live. Account plans unlock additional features.
            </p>
            <div className="mt-6"><a href="#" className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">View all case studies</a></div>
          </div>
            <div className="flex flex-wrap mt-12">
                <div className=" md:w-1/3 w-full mb-10">
                    <img className="mx-auto" src={casestudy1} width="350" height="347" alt="Singtel Casestudy" />
                    <div className="mt-6 text-center"><a href="#" className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">View case study</a></div>
                </div>
                <div className="md:w-1/3 w-full mb-10">
                    <img className="mx-auto" src={casestudy2} width="350" height="347" alt="Singtel Casestudy" />
                    <div className="mt-6 text-center"><a href="#" className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">View case study</a></div>
                </div>
                <div className="md:w-1/3 w-full mb-10">
                    <img className="mx-auto" src={casestudy3} width="350" height="347" alt="Singtel Casestudy" />
                    <div className="mt-6 text-center"><a href="#" className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">View case study</a></div>
                </div>
            </div>
        </div>
      </div>
    )
  }
  