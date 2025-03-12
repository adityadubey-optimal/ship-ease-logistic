"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import useResponsiveSize from "@/hooks/useResponsiveSize"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import inProgress from '@/assets/In Progress.svg'
import StatusDashboard from "@/components/desktop/statusCardContainer"
import { Calendar } from "@/components/ui/calendar"
import { useTheme } from "@/context/ThemeContext"
import AcceptRejectButton from "@/components/ui/AcceptRejectButton"

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
    const [singleDate, setSingleDate] = useState<Date | undefined>()
    const availableDates = [
        new Date(2025, 1, 10),
        new Date(2025, 1, 11),
        new Date(2025, 1, 12),
        new Date(2025, 1, 15),
        new Date(2025, 1, 16),
        new Date(2025, 1, 17),
        new Date(2025, 1, 18),
        new Date(2025, 1, 21),
        new Date(2025, 1, 22),
        new Date(2025, 1, 24),
        new Date(2025, 1, 25),
        new Date(2025, 1, 26),
    ]

    const blockedDates = [
        new Date(2025, 1, 13),
        new Date(2025, 1, 14),
        new Date(2025, 1, 19),
        new Date(2025, 1, 20),
        new Date(2025, 1, 23),
        new Date(2025, 1, 27),
        new Date(2025, 1, 28),
    ]
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
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
            }}
        >
            {/* Left Section */}
            <div style={{ width: '40%', display: 'flex', justifyContent: 'center' }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", minWidth: '200px', width: '70%', flexWrap: 'wrap', justifyContent: 'center ' }}>
                    <div className="flex items-center gap-2" style={{ justifyContent: 'center' }}>
                        <div className="w-4 h-4 bg-green-300 rounded" style={{ background: theme.colors.calendarAvailable }} />
                        <span className="text-sm" style={{ fontSize: `${useResponsiveSize(0.85, 1.15)}rem`, fontWeight: 500, color: theme.colors.calendarText }}>Days Available to Book</span>
                    </div>



                    <div className="p-0" style={{}}>

                        <Calendar
                            mode="single"
                            selected={singleDate}
                            onSelect={(val: any) => {
                                if (val instanceof Date) {
                                    setSingleDate(val)
                                }
                            }}
                            blockedDates={blockedDates}
                            // Mark a couple of days in the next 1-2 weeks as "available"
                            availableDates={availableDates}
                        />



                    </div>

                    {/* Show the selected date (or range) below the calendar */}
                    <div className="mt-1 text-center">

                        <>
                            <p className="text-lg text-green-800 font-bold mb-1" style={{ fontSize: `${useResponsiveSize(0.75, 1.05)}rem`, fontWeight: 600 }}>
                                {singleDate?.toLocaleDateString()}
                            </p>
                            <p className="text-sm" style={{ fontSize: `${useResponsiveSize(0.75, 1.15)}rem`, fontWeight: 600 }}>Your Selected Cargo Ready Date</p>
                        </>


                    </div>
                    <div className="flex justify-center" style={{ width: '100%' }}>
                        <AcceptRejectButton />
                    </div>

                </div>
            </div>

            {/* Right Section */}
            <div
                style={{

                    display: "flex",
                    flexDirection: "column",
                    gap: "22px",
                    alignItems: "flex-start",
                    width: '60%',

                }}
            >
                <StatusDashboard />
            </div >
        </div >
    )
}




