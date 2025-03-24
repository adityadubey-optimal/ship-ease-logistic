import React, { useState, useEffect, useRef } from 'react';

// Utility function to detect a mobile device
function isMobileDevice(): boolean {
    return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    );
}

const CameraScanner: React.FC = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    // null -> not requested yet, true -> granted, false -> denied
    const [errorMessage, setErrorMessage] = useState<string>('');

    const videoRef = useRef<HTMLVideoElement>(null);

    // Check if the user is on a mobile device
    useEffect(() => {
        setIsMobile(isMobileDevice());
    }, []);

    // Request camera permission if on mobile
    useEffect(() => {
        if (!isMobile) return;

        navigator.mediaDevices
            .getUserMedia({ video: { facingMode: 'environment' } })
            .then((stream) => {
                setHasPermission(true);
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            })
            .catch((err: unknown) => {
                const error = err as Error;
                setHasPermission(false);
                if (error && error.message) {
                    setErrorMessage(error.message);
                } else {
                    setErrorMessage('Unable to access camera');
                }
            });
    }, [isMobile]);

    // Handle retry if permission was denied or any error occurred
    const handleRetry = () => {
        setHasPermission(null);
        setErrorMessage('');
        navigator.mediaDevices
            .getUserMedia({ video: { facingMode: 'environment' } })
            .then((stream) => {
                setHasPermission(true);
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            })
            .catch((err: unknown) => {
                const error = err as Error;
                setHasPermission(false);
                setErrorMessage(error?.message || 'Unable to access camera');
            });
    };

    // If not mobile, show a fallback
    if (!isMobile) {
        return (
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <h2>Camera Scanner is only available on mobile devices.</h2>
            </div>
        );
    }

    // If permission is explicitly denied
    if (hasPermission === false) {
        return (
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <h2>Camera Permission Denied</h2>
                <p>{errorMessage}</p>
                <p>
                    Please enable camera permission in your browser or phone settings, then try again.
                </p>
                <button onClick={handleRetry}>Try Again</button>
            </div>
        );
    }

    // If permission is granted or not yet requested (null while we wait), show the scanner UI
    return (
        <div style={{ position: 'relative', height: '100vh', width: '100%', overflow: 'hidden' }}>
            {/* Video element for the camera feed */}
            <video
                ref={videoRef}
                autoPlay
                playsInline
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: 'scaleX(-1)', // Mirroring if needed
                }}
            />

            {/* Overlay instructions */}
            <div
                style={{
                    position: 'absolute',
                    top: '10%',
                    left: 0,
                    right: 0,
                    textAlign: 'center',
                    color: '#000',
                    fontWeight: 'bold',
                    fontSize: '1.5rem',
                }}
            >
                Align the scanner with the label
            </div>

            {/* Scanner box overlay (example styling) */}
            <div
                style={{
                    position: 'absolute',
                    top: '30%',
                    left: '10%',
                    width: '80%',
                    height: '30%',
                    border: '3px solid black',
                }}
            />

            {/* Capture button / instructions */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    width: '100%',
                    textAlign: 'center',
                }}
            >
                <button style={{ padding: '1rem', borderRadius: '50%' }}>
                    Press this button once label is aligned
                </button>
            </div>
        </div>
    );
};

export default CameraScanner;