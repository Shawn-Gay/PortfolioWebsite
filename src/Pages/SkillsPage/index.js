import React from 'react'
import "./SPstyles.css"

import SkillTable from "./components/SkillTable"
import Header from './components/Header'
import SkillList from './components/SkillList'
export default function SkillsPage() {
    return (
        <div className="skills-page-container">
                <Header />
            <div className="skillset-container">
                <SkillTable />
                <SkillList />
            </div>
        </div>
    )
}
