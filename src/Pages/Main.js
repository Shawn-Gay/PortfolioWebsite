import React, {useRef} from 'react'
import './Mstyles.css'

//components
import Pixels from './components/Pixels'
// Page imports 
import FrontPage from './FrontPage/'
import AboutPage from './AboutPage/'
import ProjectPage from './ProjectPage/'
import SkillsPage from './SkillsPage/'
import ContactPage from './ContactPage/'

export default function Main() {

    const contactRef = useRef(null)

    const toContactPage = () => contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

    return (
        <div className="Main">
            <Pixels />
            <section className="page front-page">
                <FrontPage toContactPage={toContactPage} />
            </section>
            <section className="page">
                <AboutPage toContactPage={toContactPage}/>
            </section>
            <section className="page">
                <SkillsPage />
            </section>
            <section className="page">
                <ProjectPage />
            </section>
            <section ref={contactRef} className="page">
                <ContactPage />
            </section>
        </div>
    )
}
