"use client"

import type React from "react"

interface CameraCaptureButtonProps {
    size?: number
    onClick?: () => void
    disabled?: boolean
    primaryColor?: string
    glowColor?: string
    className?: string
}

export const CameraCaptureButton: React.FC<CameraCaptureButtonProps> = ({
    size = 80,
    onClick,
    disabled = false,
    primaryColor = "#1a56db",
    glowColor = "#60a5fa",
    className = "",
}) => {
    const containerStyle: React.CSSProperties = {
        position: "relative",
        width: `${size}px`,
        height: `${size}px`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        transition: "transform 0.2s ease, opacity 0.2s ease",
    }

    const handleClick = () => {
        if (!disabled && onClick) {
            onClick()
        }
    }

    const handleMouseDown = () => {
        if (!disabled) {
            const container = document.getElementById("capture-button-container")
            if (container) {
                container.style.transform = "scale(0.95)"
            }
        }
    }

    const handleMouseUp = () => {
        if (!disabled) {
            const container = document.getElementById("capture-button-container")
            if (container) {
                container.style.transform = "scale(1)"
            }
        }
    }

    // Create an array of 6 segments with their rotation angles
    const segments = Array.from({ length: 6 }).map((_, index) => {
        const angle = index * 60
        return angle
    })

    return (
        <div
            id="capture-button-container"
            className={className}
            style={containerStyle}
            onClick={handleClick}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            role="button"
            tabIndex={0}
            aria-label="Capture photo"
        >
            <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feFlood floodColor={glowColor} result="color" />
                        <feComposite in="color" in2="blur" operator="in" result="glow" />
                        <feComposite in="SourceGraphic" in2="glow" operator="over" />
                    </filter>
                </defs>

                <g filter="url(#glow)">
                    {segments.map((angle, index) => (
                        <path
                            key={index}
                            d="M50,20 L65,40 L35,40 Z"
                            fill={primaryColor}
                            stroke={glowColor}
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                            transform={`rotate(${angle}, 50, 50)`}
                        />
                    ))}
                </g>
            </svg>
        </div>
    )
}

