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

    const DetailRow = ({ label, value }: { label: string; value: string | number }) => (
        <div className="flex items-center">
            <span
                style={{
                    fontSize: mergedStyles.fontSize.label,
                    fontWeight: mergedStyles.fontWeight.label,
                    color: mergedStyles.labelColor,
                }}
            >
                {label}:
            </span>
            <span
                style={{
                    fontSize: mergedStyles.fontSize.value,
                    fontWeight: mergedStyles.fontWeight.value,
                    color: mergedStyles.valueColor,
                }}
            >
                {value}
            </span>
        </div>
    )

    return (
        <div
            style={{
                // backgroundColor: mergedStyles.backgroundColor,
                padding: mergedStyles.padding,
                borderRadius: mergedStyles.borderRadius,
                color: mergedStyles.textColor,
                fontFamily: theme.fonts.family,
            }}
        >
            {/* Header */}
            <div className="space-y-2 mb-6">
                <h2
                    style={{
                        fontSize: mergedStyles.fontSize.heading,
                        fontWeight: mergedStyles.fontWeight.heading,
                        color: mergedStyles.headingColor,
                    }}
                >
                    Detailed Packing List
                </h2>
                <p
                    style={{
                        fontSize: mergedStyles.fontSize.subheading,
                        fontWeight: mergedStyles.fontWeight.subheading,
                        color: mergedStyles.subheadingColor,
                    }}
                >
                    Packing list as uploaded by the vendor
                </p>
            </div>

            {/* Details */}
            <div className="space-y-1">
                <DetailRow label="Total Quantity" value={totalQuantity.toLocaleString()} />
                <DetailRow label="Carton Quantity" value={cartonQuantity.toLocaleString()} />
                <DetailRow label="Net wt" value={netWeight} />
                <DetailRow label="Gross wt" value={grossWeight} />
                <DetailRow label="Carton Measurement" value={cartonMeasurement || "-"} />
            </div>
        </div>
    )
}

