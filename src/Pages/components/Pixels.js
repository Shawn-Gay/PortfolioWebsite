import React from 'react'

import useDimensions from './useDimensions'
import SinglePixel from './SinglePixel'

export default function Pixels() {
    const {screenDimensions} = useDimensions()

    console.log(screenDimensions)
    if(screenDimensions && screenDimensions.width && screenDimensions.height){
        return(
            <div className="pixel-container">
            {[...Array(screenDimensions.width)].map(i => {
            console.log(i)
            return (<SinglePixel width={screenDimensions.width} height={screenDimensions.height}/>)
            })}
        </div>
    )
    }
    return (
<></>
    )
    }
