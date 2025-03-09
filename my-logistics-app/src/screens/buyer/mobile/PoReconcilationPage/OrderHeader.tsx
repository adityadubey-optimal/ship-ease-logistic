"use client"

import { useTheme } from "@/context/ThemeContext"

interface PackingListSummaryProps {
    totalQuantity?: number
    cartonQuantity?: number
    netWeight?: string
    grossWeight?: string
    cartonMeasurement?: string
    styles?: {
        backgroundColor?: string
        textColor?: string
        headingColor?: string
        subheadingColor?: string
        labelColor?: string
        valueColor?: string
        fontSize?: {
            heading?: string
            subheading?: string
            label?: string
            value?: string
        }
        fontWeight?: {
            heading?: string
            subheading?: string
            label?: string
            value?: string
        }
        padding?: string
        borderRadius?: string
    }
}

const defaultStyles = {
    backgroundColor: "#E2E2FC",
    textColor: "#1E1E1E",
    headingColor: "#1E1E1E",
    subheadingColor: "#4A4A4A",
    labelColor: "#4A4A4A",
    valueColor: "#1E1E1E",
    fontSize: {
        heading: "1.5rem",
        subheading: "1rem",
        label: "1rem",
        value: "1rem",
    },
    fontWeight: {
        heading: "600",
        subheading: "400",
        label: "500",
        value: "400",
    },
    padding: "1.5rem",
    borderRadius: "1rem",
}

export default function PackingListSummary({
    totalQuantity = 1545,
    cartonQuantity = 20,
    netWeight = "Kgs",
    grossWeight = "kgs",
    cartonMeasurement = "",
    styles = {},
}: PackingListSummaryProps) {
    const { theme } = useTheme()

    const mergedStyles = {
        ...defaultStyles,
        ...styles,
        fontSize: { ...defaultStyles.fontSize, ...styles.fontSize },
        fontWeight: { ...defaultStyles.fontWeight, ...styles.fontWeight },
    }



    return (
        <div
            style={{
                backgroundColor: theme.colors.secondary,
                padding: mergedStyles.padding,
                borderRadius: mergedStyles.borderRadius,
                color: theme.colors.authPageheadingColor,
                fontFamily: theme.fonts.family,
                fontSize: '1rem',
                fontWeight: '700'
            }}
        >
            Select PO's to be imported into the portal
        </div>
    )
}

