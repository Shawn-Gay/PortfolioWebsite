import { useState, useEffect } from 'react'

export default function useDimensions() {
    const [screenDimensions, setScreenDimensions] = useState();
    
    useEffect(() => {
            const height = (document.getElementsByClassName('Main')[0].clientHeight)
            const width = window.innerWidth
            setScreenDimensions({
                width,
                height
            })
    }, []);
    return {screenDimensions}
}
