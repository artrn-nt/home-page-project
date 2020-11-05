import { useState, useEffect, useCallback } from 'react';

function useWindowInitialSize() {

    const isClient = typeof window === 'object';

    const getSize = useCallback(() => {
        return {
            width: isClient ? window.innerWidth : undefined,
            height: isClient ? window.innerHeight : undefined
        };
    }, [isClient])

    const [width, setWidth] = useState(getSize);

    useEffect(() => {

        if (!isClient) {
            return false;
        }

        setWidth(getSize());

    }, [isClient, getSize]);

    return width;

}

function useWindowResize() {

    const isClient = typeof window === 'object';

    const getSize = useCallback(() => {
        return {
            width: isClient ? window.innerWidth : undefined,
            height: isClient ? window.innerHeight : undefined
        };
    }, [isClient])

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
        if (!isClient) {
            return false;
        }

        function handleResize() {
            setWindowSize(getSize());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, [isClient, getSize]);

    return windowSize;
}

export { useWindowInitialSize, useWindowResize };