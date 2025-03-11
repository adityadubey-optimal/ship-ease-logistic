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



                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <h2 style={{ fontSize: "20px", fontWeight: "600" }}>{productName}</h2>
                    <Select value={selectedColor} onValueChange={setSelectedColor}>
                        <SelectTrigger
                            style={{
                                width: "100%",
                                backgroundColor: "#C4CDFF",
                                color: textColor,
                                padding: "1rem 16px",
                                borderRadius: "9999px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                cursor: "pointer",
                                fontSize: '1.15rem',
                                fontWeight: '600',
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
                    gap: "22px",
                    alignItems: "flex-start",
                    width: '40%',

                }}
            >



                <DetailRow label="Buyer" value={`${orderDetails.totalPoQuantity} Pcs`} />
                <DetailRow label="Brand" value={`${orderDetails.netWeight} Pcs`} />


            </div >
        </div >
    )
}

function DetailRow({ label, value }: { label: string; value: string }) {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
            <span style={{ color: "#4B5563" }}>{label}:</span>
            <span style={{ fontWeight: "500" }}>{value}</span>
        </div>
    )
}

