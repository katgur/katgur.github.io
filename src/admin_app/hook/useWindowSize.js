import { useState, useEffect } from "react"

function useWindowSize() {
    console.log('kek');
    const [windowSize, setWindowSize] = useState()

    useEffect(() => {
        const updateSize = () => {
            const size = {width: window.innerWidth, height: window.innerHeight}
            if (!windowSize || windowSize.width !== size.width || windowSize.height !== size.height) {
                setWindowSize(size)
            }
        }

        if (!windowSize) {
            updateSize();
        }

        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, [windowSize])

    return windowSize;
}

export default useWindowSize;