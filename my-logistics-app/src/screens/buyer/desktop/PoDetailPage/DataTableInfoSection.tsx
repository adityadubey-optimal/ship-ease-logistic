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
                backgroundColor,
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
                <h1 style={{ fontSize: "24px", fontWeight: "700" }}>PO: {poNumber}</h1>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <p>Buyer: {buyer}</p>
                    <p>Brand: {brand}</p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <h2 style={{ fontSize: "20px", fontWeight: "600" }}>{productName}</h2>
                    <Select value={selectedColor} onValueChange={setSelectedColor}>
                        <SelectTrigger
                            style={{
                                width: "100%",
                                backgroundColor: theme.colors.guageheaderColor,
                                color: textColor,
                                padding: "1rem 16px",
                                borderRadius: "9999px",

                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                fontSize: '1.15rem',
                                fontWeight: '600',
                                cursor: "pointer",
                                height: '50px'

                            }}
                        >
                            <SelectValue placeholder="Select color" />

                        </SelectTrigger>
                        <SelectContent>
                            {colors.map((c) => (
                                <SelectItem key={c} value={c}>
                                    {c}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Right Section */}
            <div
                style={{

                    display: "flex",
                    flexDirection: "column",
                    gap: "32px",
                    alignItems: "flex-end",
                }}
            >
                {/* Action Button */}
                <Button
                    variant="primary"
                    size="desktop"
                    style={{
                        backgroundColor: actionButtonColor,
                        color: actionButtonTextColor,
                        borderRadius: "9999px",
                        boxShadow: "0px 28.557px 42.836px 14.279px rgba(0, 0, 0, 0.15)",
                        padding: "0px 12px",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        fontSize: "1.45rem",
                        fontWeight: "600",
                        width: '100%'
                    }}

                    onClick={onAction}
                >
                    {/* Icon placeholder - replace with your SVG */}
                    <div style={{ width: `${useResponsiveSize(40, 70)}px`, height: `${useResponsiveSize(40, 70)}px`, position: "relative" }}><img src={inProgress} style={{ height: '100%', width: '100%' }} /></div>
                    {ActionButtonText ? ActionButtonText : `Action Required: Approve Quantity Variation`}
                </Button>

                {/* Order Details Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        columnGap: "64px",
                        rowGap: "16px",
                    }}
                >
                    <DetailRow label="Total PO Quantity" value={`${orderDetails.totalPoQuantity} Pcs`} />
                    <DetailRow label="Net Weight" value={`${orderDetails.netWeight} Pcs`} />
                    <DetailRow label="Total Packed Quantity" value={`${orderDetails.totalPackedQuantity} Pcs`} />
                    <DetailRow label="Gross Weight" value={`${orderDetails.grossWeight} Pcs`} />
                    <DetailRow label="Carton Quantity" value={orderDetails.cartonQuantity.toString()} />
                    <DetailRow label="Carton Measurement" value={orderDetails.cartonMeasurement.toString()} />
                </div>
            </div >
        </div >
    )
}

function DetailRow({ label, value }: { label: string; value: string }) {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: "#4B5563" }}>{label}:</span>
            <span style={{ fontWeight: "500" }}>{value}</span>
        </div>
    )
}

