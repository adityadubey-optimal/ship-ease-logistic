

import StatusCard from "@/components/ui/StatusCard"
import { useTheme } from "../../context/ThemeContext"
import { useIsMobile } from "@/hooks/useMobile"

const defaultCards = [
    {
        value: 80,
        status: "success" as const,
        title: "Good To-go",
        subtitle: "",
        width: "300px",
    },
    {
        value: 20,
        status: "warning" as const,
        title: "Pending",
        subtitle: "",
        width: "300px",
    },
    {
        value: 20,
        status: "error" as const,
        title: "Urgent",
        subtitle: "",
        additionalInfo: "20 PO's at risk Need Action",
        widthError: "520px",
    },
]


// Define the configuration for an individual status card.
export interface StatusCardConfig {
    value: number;
    status: "success" | "warning" | "error";
    title: string;
    subtitle: string;
    width?: string;       // default width for non-error cards
    widthError?: string;  // width specifically for error cards (if needed)
    additionalInfo?: string;
}

// Interface for the StatusDashboard component.
export interface StatusDashboardProps {
    cards?: StatusCardConfig[];
}

export default function StatusDashboard({ cards = defaultCards }: StatusDashboardProps) {
    const { theme } = useTheme()
    const isMobile = useIsMobile()

    return (
        <div className="w-full max-w-7xl mx-auto p-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>


            {cards.map((card, index) => (
                <StatusCard
                    key={index}
                    value={card.value}
                    status={card.status}
                    title={card.title}
                    subtitle={card.subtitle}
                    width={card.status === "error" ? card.widthError : card.width}
                    widthError={card.widthError}
                    additionalInfo={card.additionalInfo}
                    isMobile={isMobile}
                />
            ))}
        </div>
    )
}

