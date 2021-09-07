import * as React from "react"
import PageTransition from 'gatsby-plugin-page-transitions';
import InternalLayout from "../../components/layout/InternalLayout"

import { CheckIcon } from '@heroicons/react/outline'

function ITSupportServicesPerth() {
  const items = [
    'Support by a team of 20+ ICT Specialists (ICT = information and communications technology)',
    'A dedicated Technical Account Manager',
    'Unlimited IT support during business hours – 6:30am to 6.30pm (Monday-Friday) Western Standard Time',
    'After hours call out available',
    'Fully Managed IT Support Services',
    '24/7 monitoring on critical devices such as servers',
    'Onsite service technicians',
    'Proactive resolution of any issues that may arise',
    'General consultation included in your contract',
    'Fixed monthly contracts for your convenience'
  ]

  return (
    <>
      <PageTransition>
        <InternalLayout title="IT Support Services" description="Providing fully managed IT support services in Perth & Melbourne.">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div>
              <h2 className="text-indigo-600">Technology shouldn't distract you from running your business</h2>
              <p className="mt-4 text-lg text-gray-500">
                iQuest IT Support Perth ‘ provide fully managed IT Support Services and we take pride in being the offsite IT department for some of Perth’s most recognised businesses. Our mission is to remove issues before they occur, ensuring that our clients maximize their productivity. Our approach to IT support is customer focused and unique to Western Australia. By focusing on each of our clients needs we’re able to align technology with the overall goals of the business, in turn, improving productivity and reducing risk.
              </p>
            </div>
            <div className="mt-12 lg:mt-0">
              <dl className="space-y-4">
                {items.map((item) => (
                  <div key={item} className="relative">
                    <dt>
                      <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                      <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{item}</p>
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </InternalLayout>
      </PageTransition>
    </>
  )
}

export default ITSupportServicesPerth