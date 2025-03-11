"use client"

import { useTheme } from "@/context/ThemeContext"
import useResponsiveSize from "@/hooks/useResponsiveSize"

interface ShippingDatesProps {
    poShipDate: string
    cargoReadyDate: string
    styles?: {
        backgroundColor?: string
        textColor?: string
        labelColor?: string
        dateColor?: string
        fontSize?: {
            label?: string
            date?: string
        }
        fontWeight?: {
            label?: string
            date?: string
        }
        borderRadius?: string
        boxShadow?: string
    }
}

export default function ShippingDates({ poShipDate, cargoReadyDate, styles = {} }: ShippingDatesProps) {
    const { theme } = useTheme()

    // Compute responsive sizes for the labels and dates
    const responsiveLabelSize = useResponsiveSize(14, 18)
    const responsiveDateSize = useResponsiveSize(18, 24)

    // Use passed styles if provided, otherwise use the responsive sizes as defaults.
    const {
        backgroundColor = "white",
        textColor = "#1E1E1E",
        labelColor = "#4B5563",
        dateColor = "#1E1E1E",
        fontSize = {
            label: `${responsiveLabelSize}px`,
            date: `${responsiveDateSize}px`,
        },
        fontWeight = {
            label: "700",
            date: "300",
        },
        borderRadius = "15px",
        boxShadow = "0px 17.989px 26.983px 8.994px rgba(0, 0, 0, 0.15)",
    } = styles

    // Date formatting function (for example, to convert YYYY-MM-DD to DD.MM.YYYY)
    const formatDate = (dateString: string) => {
        try {
            const date = new Date(dateString)
            return date
                .toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                })
                .replace(/\//g, ".")
        } catch (error) {
            return dateString
        }
    }

    return (
        <div className="grid grid-cols-2 gap-8 p-6 rounded-lg" style={{ backgroundColor, color: textColor, borderRadius, boxShadow }}>
            {/* PO Ship Date */}
            <div className="flex flex-col gap-2">
                <h3
                    style={{
                        color: labelColor,
                        fontSize: fontSize.label,
                        fontWeight: fontWeight.label,
                    }}
                >
                    PO Ship Date
                </h3>
                <p
                    style={{
                        color: dateColor,
                        fontSize: fontSize.date,
                        fontWeight: fontWeight.date,
                    }}
                >
                    {formatDate(poShipDate)}
                </p>
            </div>

            {/* Cargo Ready Date */}
            <div className="flex flex-col gap-2">
                <h3
                    style={{
                        color: labelColor,
                        fontSize: fontSize.label,
                        fontWeight: fontWeight.label,
                    }}
                >
                    Cargo Ready Date
                </h3>
                <p
                    style={{
                        color: dateColor,
                        fontSize: fontSize.date,
                        fontWeight: fontWeight.date,
                    }}
                >
                    {formatDate(cargoReadyDate)}
                </p>
            </div>
        </div>
    )
}