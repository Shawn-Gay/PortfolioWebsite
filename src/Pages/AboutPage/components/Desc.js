import React from 'react'

export default function Desc({toContactPage}) {
    return (
        <div className="about-page-desc-content">
            <h3>Hello!</h3>
            <p>My name's Shawn Gay, I love <b>coding</b> and <b>building</b> applications!</p>
            <p>I never get tired of <b>learning</b> and researching to solve a problem. 
                Throw a gnarly coding problem at me, and you will see me <b>loving every moment</b> to figure it out!</p>
            <p>If you are looking for a teammate who never gives up on toughest coding problems or finishing a challenging project, I am your guy.  
                 <button className="desc-reach-out" onClick={() => toContactPage()}> Reach out</button> to me and let me know how I could help!
            </p>
        </div>
    )
}
