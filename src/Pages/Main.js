import React from 'react'
import './Mstyles.css'

//components
import Pixels from './components/Pixels'
// Page imports 
import FrontPage from './FrontPage/'
import AboutPage from './AboutPage/'
import ProjectPage from './ProjectPage/'
import SkillsPage from './SkillsPage/'

export default function Main() {
    return (
        <div className="Main">
            <Pixels />
            <section className="page front-page">
                <FrontPage />
            </section>
            <section className="page">
                <ProjectPage />
            </section>
            <section className="page">
                <SkillsPage />
            </section>
            <section className="page">
                <AboutPage />
            </section>
        </div>
    )
}
