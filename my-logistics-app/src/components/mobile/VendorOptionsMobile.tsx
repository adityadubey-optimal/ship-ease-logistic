"use client"

import React, { useState } from "react"
import { ClipboardCheck, Package, CheckSquare } from "lucide-react"
import useResponsiveSize from "@/hooks/useResponsiveSize"
import { useTheme } from "@/context/ThemeContext"
import { useNavigate } from "react-router-dom"

interface StepItem {
    icon: React.ElementType
    title: string
    subTitle: string
    styleType?: "filled" | "outline"
    route?: string // optional route for navigation if needed
    fontSize?: string
}

interface StepFlowProps {
    defaultSelectedIndex?: number
    onSelect?: (selectedStep: StepItem, index: number) => void
}

export default function StepFlow({
    defaultSelectedIndex = 0,
    onSelect,
}: StepFlowProps) {
    const navigate = useNavigate()
    const { theme } = useTheme()

    const steps: StepItem[] = [
        {
            icon: ClipboardCheck,
            title: "Accept PO for Ship-by-Date",
            subTitle: "Accept/decline POs",
            styleType: "outline",
            route: "/shipper/home",
            fontSize: '11px'
        },
        {
            icon: Package,
            title: "Book Cargo",
            subTitle: "Book cargo deliver, upload docs etc",
            styleType: "outline",
            route: "/shipper/cargo_ready_date",
        },
        {
            icon: CheckSquare,
            title: "Review & Deliver PO",
            subTitle: "Confirm ok to deliver to CFS",
            styleType: "outline",
            route: "/shipper/booking_good_to_go",
        },
    ]

    // Responsive sizes
    const iconSize = useResponsiveSize(15, 32)    // Icon: 20–32px
    const titleFontSize = useResponsiveSize(14, 18)
    const boxWidth = useResponsiveSize(120, 180)   // Fixed width (px)
    const boxHeight = useResponsiveSize(50, 120)   // Fixed height (px)

    // Manage selected step, default from parent
    const [selectedIndex, setSelectedIndex] = useState<number>(defaultSelectedIndex)

    const handleStepClick = (step: StepItem, index: number) => {
        setSelectedIndex(index)
        if (step.route) navigate(step.route)
        onSelect?.(step, index)
        // Use this callback to trigger navigation, if needed.
        // For example: if (step.route) navigate(step.route)
    }

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",  // centers the connecting line with the boxes
                overflow: "visible",
                justifyContent: "space-between",
            }}
        >
            {steps.map((step, idx) => {
                const isSelected = idx === selectedIndex

                // Base styling depending on styleType
                const baseBoxStyles: React.CSSProperties =

                {
                    backgroundColor: "transparent",
                    color: theme.colors.primary,
                    border: `2px solid ${theme.colors.primary}`,
                }

                // When selected, change border color and background; no shadow is applied.
                const selectedStyles: React.CSSProperties = isSelected
                    ? {

                        borderColor: theme.colors.secondary,
                        cursor: "pointer",

                        backgroundColor: theme.colors.primary,
                        color: "#FFF",
                        border: "2px solid transparent",

                    }
                    : { cursor: "pointer" }

                return (
                    <React.Fragment key={step.title}>
                        <div
                            style={{
                                position: "relative",
                                width: boxWidth,
                                height: boxHeight,
                            }}
                            onClick={() => handleStepClick(step, idx)}
                        >
                            <div
                                style={{
                                    ...baseBoxStyles,
                                    ...selectedStyles,
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "0.5rem",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: 'center',
                                }}
                            >
                                <step.icon
                                    style={{
                                        width: iconSize,
                                        height: iconSize,
                                    }}
                                />
                                <span
                                    style={{
                                        // fontSize: titleFontSize,
                                        fontWeight: 600,
                                        marginTop: 4,
                                        width: '80%',
                                        fontSize: step.fontSize ? step.fontSize : titleFontSize
                                    }}
                                >
                                    {step.title}
                                </span>
                            </div>

                            {/* Absolutely position the subTitle below the box */}
                            <span
                                style={{
                                    position: "absolute",
                                    top: "100%",
                                    left: 0,
                                    width: "100%",
                                    marginTop: "6px",
                                    textAlign: "center",
                                    fontSize: `${useResponsiveSize(0.65, 0.85)}rem`,
                                    color: "#444",
                                    fontWeight: 450

                                }}
                            >
                                {step.subTitle}
                            </span>
                        </div>

                        {/* Connecting line: it expands to fill available space */}
                        {idx < steps.length - 1 && (
                            <div
                                style={{
                                    flexGrow: 1,
                                    height: 2,
                                    backgroundColor: "#999",
                                    margin: "0 8px",

                                }}
                            />
                        )}
                    </React.Fragment>
                )
            })}
        </div>
    )
}