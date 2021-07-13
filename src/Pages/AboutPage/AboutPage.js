import React from 'react'

import Header from './components/Header'
import Pictures from './components/Pictures'
import Desc from './components/Desc'

import "./APstyles.css"

export default function AboutPage() {
    return (
        <div className="about-page-container">
            <Header />
        <section className="about-page-pic-desc-container">
            <div className="pic-container">
            <Pictures />
            </div>
            <div className="desc-container">
            <Desc />
            </div>
        </section>
        </div>
    )
}
