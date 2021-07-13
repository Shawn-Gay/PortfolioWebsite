import React from 'react'

import Header from './components/Header'
import Contact from './components/Contact'

import "./CPstyles.css"

export default function ContactPage() {
    return (
        <div className="contact-page-container">
            <Header />
            <Contact />
        </div>
    )
}
