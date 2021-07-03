import React from 'react'

export default function Header() {
    const name = "Work"
    return (
        <div className="project-header">
            <div className={`glitch`} data-text={name}>{name}</div>
        </div>
    )
}
