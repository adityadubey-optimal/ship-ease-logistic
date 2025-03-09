"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import useResponsiveSize from "@/hooks/useResponsiveSize"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import inProgress from '@/assets/In Progress.svg'
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
                                width: "160px",
                                backgroundColor: "rgba(203, 213, 225, 0.2)",
                                color: textColor,
                                padding: "8px 16px",
                                borderRadius: "4px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                cursor: "pointer",
                            }}
                        >
                            <SelectValue placeholder="Select color" />
                            <ChevronDown size={16} />
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
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                        padding: "12px 24px",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        fontSize: "18px",
                        fontWeight: "600",
                    }}

                    onClick={onAction}
                >
                    {/* Icon placeholder - replace with your SVG */}
                    <div style={{ width: `${useResponsiveSize(25, 40)}px`, height: `${useResponsiveSize(25, 40)}px`, position: "relative" }}><img src={inProgress} style={{ height: '100%', width: '100%' }} /></div>
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

