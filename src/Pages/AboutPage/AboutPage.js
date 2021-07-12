import React from 'react'

import Header from './components/Header'
import Pictures from './components/Pictures'

import "./APstyles.css"

export default function AboutPage() {
    return (
        <div className="about-page-container">
            <Header />
            <Pictures />
        </div>
    )
}
