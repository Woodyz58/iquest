import * as React from "react"

export default function featuredContent() {
  return (
    <div className="md:max-w-6xl mx-auto py-28 px-4 sm:px-6">
        <div class="md:flex space-x-2 lg:space-x-10">
        <div class="md:flex-1 md:ml-0 ml-2">
            <h2 className="text-white text-2xl font-bold mb-4">Why iQuest?</h2>
            <p className="text-white">iQuest provides simple, effective IT support and consulting services that allow you to focus on your business.</p>
        </div>
        <div class="md:flex-1 md:py-0 py-10">
            <h2 className="text-white text-2xl font-bold mb-4">Our Clients</h2>
            <p className="text-white">From the Fremantle Dockers through to Surf Life Saving Australia we support  WA’s biggest companies.</p>
        </div>
        <div class="md:flex-1">
            <h2 className="text-white text-2xl font-bold mb-4">Managed IT Perth</h2>
            <p className="text-white">Our managed IT service is like having your own IT helpdesk onsite. When things break down, we step up.</p>
        </div>
        </div>
    </div>
  )
}
