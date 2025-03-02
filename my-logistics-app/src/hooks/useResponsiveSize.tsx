import { useState, useEffect } from 'react';

// Helper function to compute responsive size between minSize and maxSize based on viewport width.
function getResponsiveSize(minSize: number, maxSize: number) {
    const minViewport = 800;
    const maxViewport = 1700;
    const vw = typeof window !== 'undefined' ? window.innerWidth : maxViewport;
    if (vw <= minViewport) return minSize;
    if (vw >= maxViewport) return maxSize;
    const ratio = (vw - minViewport) / (maxViewport - minViewport);
    return minSize + ratio * (maxSize - minSize);
}

// Custom hook to update the responsive size on window resize.
export default function useResponsiveSize(minSize: number, maxSize: number) {
    const [size, setSize] = useState(getResponsiveSize(minSize, maxSize));

    useEffect(() => {
        const handleResize = () => {
            setSize(getResponsiveSize(minSize, maxSize));
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [minSize, maxSize]);

    return size;
}