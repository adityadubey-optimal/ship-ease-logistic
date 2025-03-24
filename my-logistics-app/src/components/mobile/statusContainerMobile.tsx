


"use client"

import React from "react"
import StatusCard from "@/components/ui/StatusCard"
import { useTheme } from "@/context/ThemeContext"
import { useIsMobile } from "@/hooks/useMobile"


// Interface for an individual StatusCard
export interface StatusCardConfig {
    value: number;
    status: "success" | "warning" | "error";
    title: string;
    subtitle: string;
    width?: string;       // default width for non-error cards
    widthError?: string;  // width for error cards
    additionalInfo?: string;
    isMobile?: boolean;
}

// Props for StatusDashboard that can optionally accept an array of StatusCardConfig
export interface StatusDashboardProps {
    cards?: StatusCardConfig[];
}

const defaultCards: StatusCardConfig[] = [
    {
        value: 80,
        status: "success",
        title: "Good To-go",
        subtitle: "",
        width: "170px",
    },
    {
        value: 20,
        status: "warning",
        title: "Pending",
        subtitle: "",
        width: "170px",
    },
    {
        value: 20,
        status: "error",
        title: "Urgent",
        subtitle: "",
        additionalInfo: "20 PO's at risk Need Action",
        widthError: "362px",
    },
]

export default function StatusDashboard({ cards = defaultCards }: StatusDashboardProps) {
    const { theme } = useTheme()
    const isMobile = useIsMobile()
    const wrapperClass = isMobile ? "w-full max-w-7xl mx-auto" : "w-full max-w-7xl mx-auto p-4"

    return (
        <div className={wrapperClass}>
            <div className="flex gap-4" style={{ marginBottom: '10px' }}>
                {/* Render first two cards (Success and Warning) in a row */}
                {cards.slice(0, 2).map((card, index) => (
                    <div key={index} className="md:col-span-3">
                        <StatusCard
                            value={card.value}
                            status={card.status}
                            isMobile={isMobile}
                            title={card.title}
                            subtitle={card.subtitle}
                            width={card.status === "error" ? card.widthError : card.width}
                            additionalInfo={card.additionalInfo}
                        />
                    </div>
                ))}
            </div>
            {/* Render the error card in a new row */}
            <div className="flex" style={{ flexDirection: "row" }}>
                <StatusCard
                    value={cards[2].value}
                    status={cards[2].status}
                    title={cards[2].title}
                    subtitle={cards[2].subtitle}
                    additionalInfo={cards[2].additionalInfo}
                    widthError={cards[2].widthError}
                    isMobile={isMobile}
                />
            </div>
        </div>
    )
}

