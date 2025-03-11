"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import useResponsiveSize from "@/hooks/useResponsiveSize"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import inProgress from '@/assets/In Progress.svg'
interface OrderHeaderProps {

    onAction?: () => void
    styles?: {
        backgroundColor?: string
        textColor?: string
        fontSize?: string
        fontWeight?: string
        actionButtonColor?: string
        actionButtonTextColor?: string
    }
}

export default function GuageComponentHeader({

    onAction,
    styles = {},
}: OrderHeaderProps) {
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
                justifyContent: 'flex-end'
            }}
        >
            {/* Left Section */}

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
                    Action Required: Approve Quantity Variation
                </Button>


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

