import * as React from "react"
import mockup from "/src/images/iQuest-IT-Mockup.jpg"

export default function managedIT() {
  return (
    <div className="relative max-w-6xl mx-auto pt-0 pb-40 px-4 sm:px-6">
        <div class="w-5/6 containerBG pt-20 pb-20 pl-12 pr-80 rounded z-50">
          <p class="text-white text-2xl leading-loose">From consulting and fully managed IT support services to business IT cloud solutions and long term IT strategies,  iQuest is the trusted IT company and technology partner behind some of Perth’s biggest companies, with a 96% client retention rate since 2004.</p>
        </div>
        <div class="absolute -top-20 -right-10 z-0">
          <img class="rounded" src={mockup} width="580" height="725" alt="IT Mockup Image" />
        </div>
    </div>
  )
}
