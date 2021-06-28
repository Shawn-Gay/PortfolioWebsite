import React from 'react'

import { SocialIcon } from 'react-social-icons';

export default function Projects() {
    return (
        <section className="project-list-container">
            <div className="single-project sketchi">
                <div className="image">
                <div className="project-links">
                    <a className="link-tag github" target="_blank" href="https://github.com/Shawn-Gay">
                    <SocialIcon style={{'width': '30px', 'height': '30px'}} bgColor='black' network="github" />
                    Github 
                    </a>
                    <a className="link-tag website" target="_blank" href="https://sketchi-draw.herokuapp.com/">
                    Website
                    <img src="sketchipng.png" />
                    </a>
                </div>
                </div>
            </div>
            <div className="single-project">Project Two</div>
            <div className="single-project">Project Three</div>
            
        </section>
    )
}
