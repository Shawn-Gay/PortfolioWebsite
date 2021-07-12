import React from 'react'

export default function SinglePixel({width, height}) {
    const colors = ['#0ff','#7f7','#f0f']
    
    const randomNum = (max) => {
        const random = Math.random() * max
        return random.toFixed(2)
    }
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomWidth = randomNum(100)
    const randomHeight = randomNum(100)

    const styles = {
        backgroundColor: randomColor,
        width: '2px',
        height: '2px',
        position: 'absolute',
        left: `${randomWidth}%`,
        top: `${randomHeight}%`,
        zIndex: 11,
        opacity: 1,
        boxShadow: `0 0 8px ${randomColor}`
    }

    return (
        <span style={styles} />
    )
}
