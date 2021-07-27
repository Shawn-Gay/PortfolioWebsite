import React, {useEffect, useState} from 'react'

export default function Text() {
    const [show, setShow] = useState(true)
    

    useEffect(() => {

        const fadeHeight = window.innerHeight

        const controlText = () => {
            if (window.scrollY > (fadeHeight*.55)-100) {
                setShow(false)
            } else {
                setShow(true)
            }
        }

        window.addEventListener('scroll', 
        controlText)
        return () => {
            window.removeEventListener('scroll',
            controlText)
        }
    }, [])

    const name = "Shawn Gay"

    const description = "Full Stack Software Engineer"

    return (
        <div className={`home-text-container ${!show ? 'animate-home-text' : ''}`}>
            <div className={`glitch fp-header-text`} data-text={name}>{name}</div>
            <div className={`main-description`}>{description}</div>
        </div>
    )
}
