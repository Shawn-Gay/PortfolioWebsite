import React from 'react'
import './Mstyles.css'

// Page imports 
import FrontPage from './FrontPage/'
import AboutPage from './AboutPage/'
import ProjectPage from './ProjectPage/'

export default function Main() {
    return (
        <div>
            <section className="page front-page">
                <FrontPage />
            </section>
            <section className="page">
                <ProjectPage />
            </section>
            <section className="page">
                <AboutPage />
            </section>
        </div>
    )
}
