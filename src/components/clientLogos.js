import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

export default function clientLogos() {
  return (
    <div className="max-w-6xl mx-auto">
        <div class="flex items-center space-x-5">
        <div class="flex-1"><img className="client_logo" src="https://dev.iquest.com.au/wp-content/uploads/2021/06/Singtel-Logo.png" width="150" /></div>
        <div class="flex-1"><img className="client_logo" src="https://dev.iquest.com.au/wp-content/uploads/2021/06/Gorgi-Logo.png" width="150" /></div>
        <div class="flex-1"><img className="client_logo" src="https://dev.iquest.com.au/wp-content/uploads/2021/06/Fremantle-Dockers-Logo.png" width="150" /></div>
        <div class="flex-1"><img className="client_logo" src="https://dev.iquest.com.au/wp-content/uploads/2021/06/Goldfields-Logo.png" width="150" /></div>
        <div class="flex-1"><img className="client_logo" src="https://dev.iquest.com.au/wp-content/uploads/2021/06/Gumala-Logo.png" width="150" /></div>
        </div>
    </div>
  )
}
