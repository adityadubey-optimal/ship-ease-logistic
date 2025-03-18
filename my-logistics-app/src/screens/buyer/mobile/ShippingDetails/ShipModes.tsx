"use client"

import { useTheme } from "@/context/ThemeContext"

interface ShippingDatesDisplayProps {
    poShipDate?: string
    cargoReadyDate?: string
    styles?: {
        backgroundColor?: string
        textColor?: string
        headingColor?: string
        dateColor?: string
        fontSize?: {
            heading?: string
            date?: string
        }
        fontWeight?: {
            heading?: string
            date?: string
        }
        padding?: string
        borderRadius?: string
        containerWidth?: string
    }
}

const defaultStyles = {
    backgroundColor: "white",
    textColor: "#1E1E1E",
    headingColor: "#1E1E1E",
    dateColor: "#1E1E1E",
    fontSize: {
        heading: "1rem",
        date: "0.85rem",
    },
    fontWeight: {
        heading: "600",
        date: "500",
    },
    padding: "1.5rem",
    borderRadius: "0.75rem",
    containerWidth: "100%",
}

export default function ShippingDatesDisplayMode({
    poShipDate = "14.03.2025",
    cargoReadyDate = "04.03.2025",
    styles = {},
}: ShippingDatesDisplayProps) {
    const { theme } = useTheme()

    const mergedStyles = {
        ...defaultStyles,
        ...styles,
        fontSize: { ...defaultStyles.fontSize, ...styles.fontSize },
        fontWeight: { ...defaultStyles.fontWeight, ...styles.fontWeight },
    }

    const DateColumn = ({ title, date }: { title: string; date: string }) => (
        <div className="flex flex-col gap-2">
            <h3
                style={{
                    fontSize: mergedStyles.fontSize.heading,
                    fontWeight: mergedStyles.fontWeight.heading,
                    color: mergedStyles.headingColor,
                }}
            >
                {title}
            </h3>
            <p
                style={{
                    fontSize: mergedStyles.fontSize.date,
                    fontWeight: mergedStyles.fontWeight.date,
                    color: mergedStyles.dateColor,
                }}
            >
                {date}
            </p>
        </div>
    )

    return (
        <div
            style={{
                width: mergedStyles.containerWidth,
                backgroundColor: mergedStyles.backgroundColor,
                padding: mergedStyles.padding,
                borderRadius: mergedStyles.borderRadius,
                color: mergedStyles.textColor,
                fontFamily: theme.fonts.family,
                boxShadow: '0px 10px 15px 5px rgba(0, 0, 0, 0.15)'
            }}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ display: 'flex', justifyContent: ' space-between' }}>
                <DateColumn title="PO Ship Date" date={poShipDate} />
                <DateColumn title="Cargo Ready Date" date={cargoReadyDate} />
            </div>
        </div>
    )
}

