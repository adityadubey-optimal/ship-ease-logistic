

import React from "react"

interface CircleGaugeProps {
    /** The overall diameter of the gauge (px). */
    size?: number

    width?: number
    /** Thickness of the colored ring (px). */
    ringThickness?: number
    /** The pointer angle in degrees, where 0° = 3 o'clock, 90° = 6 o'clock, etc. */
    pointerAngle?: number

    /** Gradient for the outer ring. E.g. "linear-gradient(to right, green, orange)" */
    ringGradient?: string
    /** The background color for the inner circle (behind the pointer). */
    innerCircleColor?: string

    /** The pointer color. */
    pointerColor?: string
    /** Radius of the center circle that covers the pointer's origin. */
    pointerHubRadius?: number

    /** Labels for top, right, left, bottom. */
    labelTop?: string
    labelRight?: string
    labelLeft?: string
    labelBottom?: string

    /** The large text near the bottom (e.g. "21 Days Delayed"). */
    bottomText?: string
    bottomTextSize?: string
    bottomTextColor?: string
}

/**
 * A circular gauge with:
 * - Outer ring in a linear gradient (green → orange).
 * - Inner white circle, leaving a ring of `ringThickness`.
 * - A pointer (colored bar) with a small center circle/hub.
 * - Four labels (top, right, left, bottom).
 * - A larger text near the bottom (like "21 Days Delayed").
 *
 * 0° angle is at 3 o'clock, 90° at 6 o'clock, etc.
 */
const CircleGauge: React.FC<CircleGaugeProps> = ({
    size = 200,
    width = 300,
    ringThickness = 20,
    pointerAngle = 0, // 0° => 3 o'clock
    ringGradient = "linear-gradient(to right, #4caf50, #ff9800)",
    innerCircleColor = "#fff",

    pointerColor = "#00BFC2",
    pointerHubRadius = 14,

    labelTop = "Within 14 Days",
    labelRight = "More than 21 Days",
    labelLeft = "Within 7 Days",
    labelBottom = "",

    bottomText = "21 Days Delayed",
    bottomTextSize = "1.25rem",
    bottomTextColor = "#000",
}) => {
    // Wrapper
    const wrapperStyle: React.CSSProperties = {
        position: "relative",
        width: `${size}px`,
        height: `${size}px`,

        margin: "0 auto",
    }

    // Outer circle: gradient ring
    const outerCircleStyle: React.CSSProperties = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        background: ringGradient, // e.g. linear-gradient(to right, green, orange)
        zIndex: 1,
    }

    // Inner circle: placed inside to create the ring thickness
    const innerDiameter = size - ringThickness * 2
    const innerCircleStyle: React.CSSProperties = {
        position: "absolute",
        top: `${ringThickness}px`,
        left: `${ringThickness}px`,
        width: `${innerDiameter}px`,
        height: `${innerDiameter}px`,
        borderRadius: "50%",
        background: innerCircleColor,
        zIndex: 2,
    }

    // Pointer container: rotate around center
    // 0 deg => 3 o'clock, 90 deg => 6 o'clock, etc.
    const pointerContainerStyle: React.CSSProperties = {
        position: "absolute",
        top: "50%",
        left: "50%",
        width: 0,
        height: 0,
        transform: `translate(-50%, -50%) rotate(${pointerAngle}deg)`,
        transformOrigin: "center center",
        zIndex: 3,
    }

    // The pointer is a rectangle that extends from the center circle to the ring
    const pointerLength = (size / 2) - ringThickness - pointerHubRadius
    const pointerThickness = ringThickness * 0.6
    const pointerStyle: React.CSSProperties = {
        position: "absolute",
        top: `-${pointerThickness / 2}px`,
        left: `${pointerHubRadius}px`,
        width: `${pointerLength}px`,
        height: `${pointerThickness}px`,
        backgroundColor: pointerColor,
        borderRadius: `${pointerThickness / 2}px`,
    }

    // The pointer's hub: a small circle at the center
    const pointerHubStyle: React.CSSProperties = {
        position: "absolute",
        top: `-${pointerHubRadius}px`,
        left: `-${pointerHubRadius}px`,
        width: `${pointerHubRadius * 2}px`,
        height: `${pointerHubRadius * 2}px`,
        borderRadius: "50%",
        backgroundColor: pointerColor,
    }

    // Label styles
    const labelCommon: React.CSSProperties = {
        position: "absolute",
        color: "#333",
        textAlign: "center",
        fontSize: "0.8rem",
        width: "80px",
        zIndex: 5,
    }
    const labelTopStyle: React.CSSProperties = {
        ...labelCommon,
        top: "-3rem",
        left: "50%",
        transform: "translateX(-50%)",
    }
    const labelRightStyle: React.CSSProperties = {
        ...labelCommon,
        right: "-5rem",
        top: "50%",
        transform: "translateY(-50%)",
    }
    const labelLeftStyle: React.CSSProperties = {
        ...labelCommon,
        left: "-5rem",
        top: "50%",
        transform: "translateY(-50%)",
    }

    // If labelBottom is not empty, place it near bottom of the circle
    const labelBottomStyle: React.CSSProperties = {
        ...labelCommon,
        bottom: "-2rem",
        left: "50%",
        transform: "translateX(-50%)",
        width: "100px",
    }

    // The large text near the bottom (like "21 Days Delayed")
    const bottomTextStyle: React.CSSProperties = {
        position: "absolute",
        bottom: "-2rem",
        left: "50%",
        transform: "translateX(-50%)",
        fontSize: bottomTextSize,
        color: bottomTextColor,
        fontWeight: 600,
        textAlign: "center",
        zIndex: 5,
        width: "200px",
    }

    return (
        <div style={wrapperStyle}>
            {/* Outer gradient circle */}
            <div style={outerCircleStyle} />
            {/* Inner circle to create ring thickness */}
            <div style={innerCircleStyle} />

            {/* Pointer */}
            <div style={pointerContainerStyle}>
                <div style={pointerHubStyle} />
                <div style={pointerStyle} />
            </div>

            {/* Labels */}
            {labelTop && <div style={labelTopStyle}>{labelTop}</div>}
            {labelRight && <div style={labelRightStyle}>{labelRight}</div>}
            {labelLeft && <div style={labelLeftStyle}>{labelLeft}</div>}
            {labelBottom && <div style={labelBottomStyle}>{labelBottom}</div>}

            {/* Large text near bottom */}
            {bottomText && <div style={bottomTextStyle}>{bottomText}</div>}
        </div>
    )
}

export default CircleGauge