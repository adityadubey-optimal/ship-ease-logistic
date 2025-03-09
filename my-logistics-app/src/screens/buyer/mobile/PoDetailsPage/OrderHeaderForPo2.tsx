"use client"

import { useTheme } from "@/context/ThemeContext"

interface ShipModeCardProps {
    poShipMode?: string
    requester?: string
    requestedShipMode?: string
    poQuantity?: number
    airQuantity?: number
    styles?: {
        backgroundColor?: string
        textColor?: string
        headingColor?: string
        valueColor?: string
        badgeColor?: string
        fontSize?: {
            heading?: string
            label?: string
            value?: string
        }
        fontWeight?: {
            heading?: string
            label?: string
            value?: string
        }
    }
}

const defaultStyles = {
    backgroundColor: "#E2E2FC",
    textColor: "#1E1E1E",
    headingColor: "#4A4A4A",
    valueColor: "#1E1E1E",
    badgeColor: "#C7C7F9",
    fontSize: {
        heading: "1rem",
        label: "0.875rem",
        value: "1.5rem",
    },
    fontWeight: {
        heading: "600",
        label: "400",
        value: "600",
    },
}

export default function ShipModeCard({
    poShipMode = "Ocean",
    requester = "Vendor",
    requestedShipMode = "Air",
    poQuantity = 1593,
    airQuantity = 1593,
    styles = {},
}: ShipModeCardProps) {
    const { theme } = useTheme()

    // Merge default styles with user overrides
    const mergedStyles = {
        ...defaultStyles,
        ...styles,
        fontSize: { ...defaultStyles.fontSize, ...(styles.fontSize || {}) },
        fontWeight: { ...defaultStyles.fontWeight, ...(styles.fontWeight || {}) },
    }

    // Consolidate style variables here
    const styleVars = {
        container: {
            backgroundColor: mergedStyles.backgroundColor,
            color: mergedStyles.textColor,
            fontFamily: theme.fonts.family,
        },
        heading: {
            fontSize: '0.8rem',
            fontWeight: 700,
            color: mergedStyles.headingColor,
        },
        value: {
            fontSize: '0.6rem',
            fontWeight: 500,
            color: mergedStyles.valueColor,
            textAlign: 'center',
        },
        label: {
            fontSize: mergedStyles.fontSize.label,
            fontWeight: mergedStyles.fontWeight.label,
            color: mergedStyles.textColor,
        },
        badge: {
            backgroundColor: mergedStyles.badgeColor,
            fontSize: '0.8rem',
            fontWeight: 600,
            color: mergedStyles.textColor,
            borderRadius: "10px",
            padding: "0.55rem 1rem",
            display: "inline-block",




        },
        topItemContainer: {
            width: 'fit-content'
        },
    }

    return (
        <div className="p-6 rounded-xl" style={styleVars.container}>
            {/* Top Row: 3 items (PO Ship Mode, Requester, Requested Ship Mode) */}
            <div className="flex flex-wrap justify-between gap-4 w-full">
                {/* PO Ship Mode */}
                <div style={styleVars.topItemContainer}>
                    <h3 style={styleVars.heading}>PO Ship Mode</h3>
                    <p style={styleVars.value}>{poShipMode}</p>
                </div>

                {/* Requester */}
                <div style={styleVars.topItemContainer}>
                    <h3 style={styleVars.heading}>Requester</h3>
                    <p style={styleVars.value}>{requester}</p>
                </div>

                {/* Requested Ship Mode */}
                <div style={styleVars.topItemContainer}>
                    <h3 style={{ ...styleVars.heading }}>Requested Ship Mode</h3>
                    <p style={{ ...styleVars.value, fontSize: '0.9rem' }}>{requestedShipMode}</p>
                </div>
            </div>

            {/* Bottom Row: PO & Air Quantity on left, Full PO badge on right */}
            <div className="flex flex-wrap justify-between items-center mt-4 gap-4 w-full">
                {/* Left: PO & Air Quantity */}
                <div className="flex flex-col">
                    <p style={styleVars.label}>
                        PO Quantity:{" "}
                        <span style={{ ...styleVars.value, fontSize: '0.9rem', fontWeight: '600' }}>
                            {poQuantity.toLocaleString()}
                        </span>
                    </p>
                    <p style={styleVars.label}>
                        Air Quantity:{" "}
                        <span style={{ ...styleVars.value, fontSize: '0.9rem', fontWeight: '600' }}>
                            {airQuantity.toLocaleString()}
                        </span>
                    </p>
                </div>

                {/* Right: Full PO badge */}
                <span style={styleVars.badge}>
                    Full PO
                </span>
            </div>
        </div>
    )
}