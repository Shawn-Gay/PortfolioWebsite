import React from 'react'
import './FPstyles.css'

import Text from "./components/Text"
import Divider from "./components/Divider"
import Links from "./components/Links"

// Fade out animation



export default function FrontPage() {

    return (
        <div className="front-page-container">
            <Links />
            <Text />
            <Divider />
        </div>
    )
}
