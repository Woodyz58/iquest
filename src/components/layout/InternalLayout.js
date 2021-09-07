import React from 'react'
import Header from './Header'
import Footer from './Footer'
import InternalHeader from '../InternalHeader'

const InternalLayout = ({ children, title, description }) => {
    return (
        <>
            <Header />
            <InternalHeader title={title} description={description} />
            {children}
            <Footer />
        </>
    )
}

export default InternalLayout