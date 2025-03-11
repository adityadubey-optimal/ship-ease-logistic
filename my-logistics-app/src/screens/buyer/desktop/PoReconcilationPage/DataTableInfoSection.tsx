"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import useResponsiveSize from "@/hooks/useResponsiveSize"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import inProgress from '@/assets/In Progress.svg'
import { useTheme } from "@/context/ThemeContext"
interface OrderHeaderProps {
    poNumber: string
    buyer?: string
    brand?: string
    productName: string
    color: string
    colors?: string[]
    orderDetails: {
        totalPoQuantity: number
        totalPackedQuantity: number
        netWeight: number
        grossWeight: number
        cartonQuantity: number
        cartonMeasurement: number
    }
    onAction?: () => void
    styles?: {
        backgroundColor?: string
        textColor?: string
        fontSize?: string
        fontWeight?: string
        actionButtonColor?: string
        actionButtonTextColor?: string
    },
    ActionButtonText?: string
}

export default function OrderHeader({
    poNumber,
    buyer,
    brand,
    productName,
    color,
    colors = [],
    orderDetails,
    onAction,
    styles = {},
    ActionButtonText,
}: OrderHeaderProps) {
    const { theme } = useTheme()
    const [selectedColor, setSelectedColor] = useState(color)
    const fontSize = useResponsiveSize(14, 16)

    const {
        backgroundColor = "#E8EEFF",
        textColor = "#1E1E1E",
        fontSize: customFontSize = `${fontSize}px`,
        fontWeight = "400",
        actionButtonColor = "#FFE5E5",
        actionButtonTextColor = "#1E1E1E",
    } = styles

    return (
        <div
            style={{
                // backgroundColor,
                color: textColor,
                fontSize: customFontSize,
                fontWeight,
                padding: "24px",
                borderRadius: "8px",
                position: "relative",
                display: 'flex',
                justifyContent: 'space-between'
            }}
        >
            {/* Left Section */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "50%", flexWrap: 'wrap', justifyContent: 'space-between' }}>
                <h1 style={{ fontSize: "24px", fontWeight: "700", color: theme.colors.authPageheadingColor }}>Select POs to be imported in to the portal</h1>




            </div>


        </div >
    )
}


