import React from 'react'

export default function SinglePixel({width, height}) {
    const colors = ['#ff0000','#64ce00','#00f7ff']
    
    const randomNum = (max) => {
        const random = Math.random() * max
        return random.toFixed(2)
    }
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomWidth = randomNum(100)
    const randomHeight = randomNum(100)

    const styles = {
        backgroundColor: randomColor,
        width: '1px',
        height: '1px',
        position: 'absolute',
        left: `${randomWidth}%`,
        top: `${randomHeight}%`,
        zIndex: 11,
        opacity: 1,
    }

    return (
        <span style={styles} />
    )
}
