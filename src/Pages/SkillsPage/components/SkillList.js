import React, {useState} from 'react'
import Modal from './Modal'

export default function SkillList() {
    const [showModal, setShowModal] = useState(false)

    return (
        <div>
        <button data-glitch="Skill List" className="btn-skill-list" onClick={() => {setShowModal(!showModal)}}>
            Skill List
        </button>
            <Modal showModal={showModal} setShowModal={setShowModal} />
        </div>
    )
}
