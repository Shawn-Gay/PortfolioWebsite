import React from 'react'
import ModalSkills from './ModalSkills'

export default function Modal({showModal, setShowModal}) {

    return (
        <>
    {showModal ? 
    <div className="skill-list-modal-background">
        <div className="skill-list-modal-container">
            <div className="skill-list-modal-header">
            <div className="skill-list-header-title"><div className={`glitch`} data-text='Skills'>Skills</div></div>
            <button onClick={() => {setShowModal(!showModal)}} className="skill-list-close-btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg></button>
            </div>
            <div className="skill-list-modal-scroll-list">
            <ModalSkills />
            </div>
        </div>
    </div>
    : null}
        </>
    )
}
