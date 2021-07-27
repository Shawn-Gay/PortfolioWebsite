import React from 'react'

import { SocialIcon } from 'react-social-icons';

export default function Links({toContactPage}) {
    
    var EMAIL_ICON = {
        icon: 'M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z',
        mask: 'M41.1,25H22.9l9.1,7.1L41.1,25z M44,26.6l-12,9.3l-12-9.3V39h24V26.6z M0,0v64h64V0H0z M47,42H17V22h30V42z',
        color: '#7f7f7f'
      };

    return (
        <div className="front-link-container">
            <div className="fp-link-btn">
            <SocialIcon bgColor='black' url="https://www.linkedin.com/in/shawn-gay/" />
            </div>
            <div className="fp-link-btn">
            <SocialIcon bgColor='black' url="https://github.com/Shawn-Gay" />
            </div>
            <button className="fp-link-btn"
            onClick={(e) => {e.preventDefault(); toContactPage()}}
            ><SocialIcon bgColor='black' defaultSVG={EMAIL_ICON} url="" /></button>
        </div>
    )
}
