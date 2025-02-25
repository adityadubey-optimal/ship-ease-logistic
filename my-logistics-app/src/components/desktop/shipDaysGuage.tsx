"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "@/context/ThemeContext"

interface ShipDateGaugeProps {
    poShipDate?: string
    requestedShipDate?: string
    requester?: string
    animate?: boolean
    className?: string
    style?: React.CSSProperties
}

export default function ShipDateGauge({
    poShipDate = "4 Mar 25",
    requestedShipDate = "25 Mar 25",
    requester = "Vendor",
    animate = true,
    className,
    style,
}: ShipDateGaugeProps) {
    const { theme } = useTheme()
    const [rotation, setRotation] = useState(0)

    useEffect(() => {
        if (animate) {
            setRotation(90) // Rotate to 90 degrees for the example position
        }
    }, [animate])

    return (
        <div className={`w-full rounded-2xl overflow-hidden bg-[#E2E2FC] ${className}`} style={style}>
            {/* Header Section */}
            <div className="flex justify-between p-4">
                <div>
                    <h3 className="text-[#1E1E1E] text-sm font-semibold">PO Ship-by-Date</h3>
                    <p className="text-[#1E1E1E] text-xl font-bold mt-1">{poShipDate}</p>
                </div>
                <div>
                    <h3 className="text-[#1E1E1E] text-sm font-semibold">Requester</h3>
                    <p className="text-[#1E1E1E] text-xl mt-1">{requester}</p>
                </div>
                <div className="bg-[#002B5C] text-white p-3 rounded-lg">
                    <h3 className="text-sm font-semibold">Requested Ship-by-Date</h3>
                    <p className="text-xl font-bold mt-1">{requestedShipDate}</p>
                </div>
            </div>

            {/* Gauge Section */}
            <div className="p-4 bg-white">
                <div className="text-center mb-8">
                    <p className="text-[#1E1E1E] text-lg">Within 14 Days</p>
                </div>

                <div className="relative h-[200px]">
                    {/* SVG Gauge */}
                    <svg viewBox="0 0 200 100" className="w-full">
                        {/* Background Arc */}
                        <path
                            d="M20 100 A80 80 0 0 1 180 100"
                            fill="none"
                            stroke="#E5E7EB"
                            strokeWidth="12"
                            strokeLinecap="round"
                        />

                        {/* Green Section (Within 7 Days) */}
                        <path d="M20 100 A80 80 0 0 1 100 20" fill="none" stroke="#00901F" strokeWidth="12" strokeLinecap="round" />

                        {/* Orange Section (More than 21 Days) */}
                        <path
                            d="M100 20 A80 80 0 0 1 180 100"
                            fill="none"
                            stroke="#FF992C"
                            strokeWidth="12"
                            strokeLinecap="round"
                        />

                        {/* Pointer */}
                        <motion.g
                            initial={{ rotate: 0 }}
                            animate={{ rotate: rotation }}
                            transition={{
                                type: "spring",
                                stiffness: 60,
                                damping: 15,
                            }}
                            style={{ originX: 100, originY: 100 }}
                        >
                            <line x1="100" y1="100" x2="100" y2="30" stroke="#00A7B1" strokeWidth="6" />
                            <circle cx="100" cy="100" r="8" fill="#00A7B1" />
                        </motion.g>
                    </svg>

                    {/* Labels */}
                    <div className="absolute left-4 bottom-0 text-sm">Within 7 Days</div>
                    <div className="absolute right-4 bottom-0 text-sm">More than 21 Days</div>

                    {/* Center Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                        <span className="text-3xl font-bold">21 Days</span>
                        <span className="text-xl">Delayed</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

