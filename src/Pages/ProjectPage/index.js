import React from 'react'
import Header from './components/Header'
import Divider from './components/Divider'
import Projects from "./components/Projects"

import "./PPstyles.css"

export default function ProjectPage() {
    return (
        <div className="project-page-container">
            <Header />
            <Projects />
            <Divider />
        </div>
    )
}
