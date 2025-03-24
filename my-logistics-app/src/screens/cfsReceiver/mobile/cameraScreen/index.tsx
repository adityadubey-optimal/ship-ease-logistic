"use client"

import React, { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { CameraCaptureButton } from "./cameraCaptureButton"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog"
import { ShippingForm } from "./ShippingForm"

// Utility function to detect a mobile device
function isMobileDevice(): boolean {
    return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    )
}

const CameraScanner: React.FC = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false)
    const [hasPermission, setHasPermission] = useState<boolean | null>(null)
    const [errorMessage, setErrorMessage] = useState<string>("")
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [capturedImage, setCapturedImage] = useState<string | null>(null)

    const videoRef = useRef<HTMLVideoElement>(null)
    const streamRef = useRef<MediaStream | null>(null)

    // Utility function to start the camera stream
    const startCamera = () => {
        navigator.mediaDevices
            .getUserMedia({ video: { facingMode: "environment" } })
            .then((stream) => {
                setHasPermission(true)
                streamRef.current = stream
                if (videoRef.current) {
                    videoRef.current.srcObject = stream
                }
            })
            .catch((err: unknown) => {
                const error = err as Error
                setHasPermission(false)
                setErrorMessage(error?.message || "Unable to access camera")
            })
    }

    // Check if the user is on a mobile device
    useEffect(() => {
        setIsMobile(isMobileDevice())
    }, [])

    // On initial mount (if on mobile), start the camera stream
    useEffect(() => {
        if (isMobile) {
            startCamera()
        }
    }, [isMobile])

    // When modal closes, clear captured image and restart camera if needed
    useEffect(() => {
        if (!isModalOpen && isMobile) {
            setCapturedImage(null)
            if (!streamRef.current) {
                startCamera()
            }
        }
    }, [isModalOpen, isMobile])

    // Cleanup: ensure the camera stream is stopped when component unmounts
    useEffect(() => {
        return () => {
            if (streamRef.current) {
                streamRef.current.getTracks().forEach((track) => track.stop())
                streamRef.current = null
            }
        }
    }, [])

    // Additional effect: whenever modal is open, ensure the camera stream is stopped
    useEffect(() => {
        if (isModalOpen && streamRef.current) {
            streamRef.current.getTracks().forEach((track) => track.stop())
            streamRef.current = null
        }
    }, [isModalOpen])

    // Retry handler if permission was denied or any error occurs
    const handleRetry = () => {
        setHasPermission(null)
        setErrorMessage("")
        startCamera()
    }

    // When capture is clicked: take a snapshot, stop the stream, and open the modal
    const handleCapture = () => {
        if (videoRef.current) {
            // Create a canvas to capture the current video frame
            const canvas = document.createElement("canvas")
            canvas.width = videoRef.current.videoWidth || 400
            canvas.height = videoRef.current.videoHeight || 300
            const ctx = canvas.getContext("2d")
            if (ctx) {
                ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height)
                const imageDataUrl = canvas.toDataURL("image/png")
                setCapturedImage(imageDataUrl)
            }
        }
        // Stop the camera stream
        if (streamRef.current) {
            streamRef.current.getTracks().forEach((track) => track.stop())
            streamRef.current = null
        }
        setIsModalOpen(true)
    }

    // ------------------
    // Styles
    // ------------------
    const notMobileContainerStyle: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        textAlign: "center",
    }

    const notMobileCardStyle: React.CSSProperties = {
        maxWidth: "400px",
        padding: "24px",
        backgroundColor: "white",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    }

    const errorHeadingStyle: React.CSSProperties = {
        fontSize: "20px",
        fontWeight: "600",
        marginBottom: "16px",
    }

    const errorMessageStyle: React.CSSProperties = {
        color: "#ef4444",
        marginBottom: "16px",
    }

    const errorDescriptionStyle: React.CSSProperties = {
        marginBottom: "24px",
        color: "#6b7280",
    }

    const cameraContainerStyle: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        height: "90vh",
    }

    const cameraViewStyle: React.CSSProperties = {
        position: "relative",
        width: "100%",
        maxWidth: "400px",
        aspectRatio: "3/4",
        // backgroundColor: "#111827",
        borderRadius: "16px",
        overflow: "hidden",
        height: '90%'
        // boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    }

    const videoStyle: React.CSSProperties = {
        position: "absolute",
        inset: "0",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transform: "scaleX(-1)",
    }

    const instructionsContainerStyle: React.CSSProperties = {
        position: "absolute",
        top: "24px",
        left: "0",
        right: "0",
        textAlign: "center",
    }

    const instructionsPillStyle: React.CSSProperties = {
        display: "inline-block",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: "8px 16px",
        borderRadius: "9999px",
    }

    const instructionsTextStyle: React.CSSProperties = {
        color: "white",
        fontWeight: "500",
        fontSize: "14px",
    }

    const scannerBoxStyle: React.CSSProperties = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "90%",
        height: "80%",
    }

    const scannerBoxInnerStyle: React.CSSProperties = {
        position: "relative",
        width: "100%",
        height: "100%",
    }

    const cornerStyle: React.CSSProperties = {
        position: "absolute",
        width: "32px",
        height: "32px",
    }

    const topLeftCornerStyle: React.CSSProperties = {
        ...cornerStyle,
        top: "0",
        left: "0",
        borderTop: "2px solid white",
        borderLeft: "2px solid white",
    }

    const topRightCornerStyle: React.CSSProperties = {
        ...cornerStyle,
        top: "0",
        right: "0",
        borderTop: "2px solid white",
        borderRight: "2px solid white",
    }

    const bottomLeftCornerStyle: React.CSSProperties = {
        ...cornerStyle,
        bottom: "0",
        left: "0",
        borderBottom: "2px solid white",
        borderLeft: "2px solid white",
    }

    const bottomRightCornerStyle: React.CSSProperties = {
        ...cornerStyle,
        bottom: "0",
        right: "0",
        borderBottom: "2px solid white",
        borderRight: "2px solid white",
    }

    const scanLineStyle: React.CSSProperties = {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "2px",
        backgroundColor: "#3b82f6",
        opacity: "0.7",
        animation: "scan 2s linear infinite",
    }

    const captureButtonContainerStyle: React.CSSProperties = {
        position: "absolute",
        bottom: "0px",
        left: "0",
        right: "0",
        display: "flex",
        justifyContent: "center",
    }

    const instructionsBelowStyle: React.CSSProperties = {
        marginTop: "24px",
        textAlign: "center",
        maxWidth: "400px",
    }

    const instructionsBelowTextStyle: React.CSSProperties = {
        color: "#6b7280",
        fontSize: "14px",
    }

    // Define the keyframes for the scan animation
    useEffect(() => {
        const styleSheet = document.styleSheets[0]
        const keyframes = `
      @keyframes scan {
        0% { top: 0; }
        50% { top: 100%; }
        100% { top: 0; }
      }
    `
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length)
    }, [])

    // ------------------
    // Render
    // ------------------

    // Render fallback if not mobile
    if (!isMobile) {
        return (
            <div style={notMobileContainerStyle}>
                <div style={notMobileCardStyle}>
                    <h2 style={errorHeadingStyle}>
                        Camera Scanner is only available on mobile devices.
                    </h2>
                    <p style={{ color: "#6b7280" }}>
                        Please access this page from a mobile device to use the scanner.
                    </p>
                </div>
            </div>
        )
    }

    // Render error state if camera permission is denied
    if (hasPermission === false) {
        return (
            <div style={notMobileContainerStyle}>
                <div style={notMobileCardStyle}>
                    <h2 style={errorHeadingStyle}>Camera Permission Denied</h2>
                    <p style={errorMessageStyle}>{errorMessage}</p>
                    <p style={errorDescriptionStyle}>
                        Please enable camera permission in your browser or phone settings,
                        then try again.
                    </p>
                    <Button onClick={handleRetry}>Try Again</Button>
                </div>
            </div>
        )
    }

    return (
        <>
            {/* Camera Container (only rendered when modal is closed) */}
            {!isModalOpen && (
                <div style={cameraContainerStyle}>
                    <div style={cameraViewStyle}>

                        {/* Overlay instructions */}
                        <div style={instructionsContainerStyle}>
                            <div style={instructionsPillStyle}>
                                <p style={instructionsTextStyle}>
                                    Align the scanner with the label
                                </p>
                            </div>
                        </div>
                        {/* Scanner box overlay */}
                        <div style={scannerBoxStyle}>
                            <video ref={videoRef} autoPlay playsInline style={videoStyle} />

                            <div style={scannerBoxInnerStyle}>
                                <div style={topLeftCornerStyle} />
                                <div style={topRightCornerStyle} />
                                <div style={bottomLeftCornerStyle} />
                                <div style={bottomRightCornerStyle} />
                                <div style={scanLineStyle} />
                            </div>
                        </div>
                        {/* Capture button */}
                        <div style={captureButtonContainerStyle}>
                            <CameraCaptureButton
                                size={70}
                                onClick={handleCapture}
                                primaryColor="#1a56db"
                                glowColor="#60a5fa"
                            />
                        </div>
                    </div>
                    {/* Instructions below camera */}
                    <div style={instructionsBelowStyle}>
                        <p style={instructionsBelowTextStyle}>
                            Position the label within the frame and tap the button to capture
                        </p>
                    </div>
                </div>
            )}

            {/* Modal Dialog showing the captured image and form */}
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="sm:max-w-[425px]" style={{ zIndex: 9999999999999 }}>
                    <DialogHeader>
                        <DialogTitle>Form Title</DialogTitle>
                        <DialogDescription>
                            Please fill out the form below.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="max-h-[60vh] overflow-y-auto pr-1">
                        <ShippingForm
                            poNumber="284689456"
                            onSubmit={() => { }}
                            onCancel={() => { }}
                            isInModal={true}
                        />
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default CameraScanner
