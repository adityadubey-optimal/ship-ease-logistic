

import StatusCard from "@/components/ui/StatusCard"
import { useTheme } from "../../context/ThemeContext"
import { useIsMobile } from "@/hooks/useMobile"

const defaultCards = [
    {
        value: 80,
        status: "success" as const,
        title: "Good To-go",
        subtitle: "Shipments",
        width: "300px",
    },
    {
        value: 20,
        status: "warning" as const,
        title: "Pending",
        subtitle: "Shipments",
        width: "300px",
    },
    {
        value: 20,
        status: "error" as const,
        title: "Urgent",
        subtitle: "Shipments",
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
            {/* Success Card - 25% width on md and above, full width on mobile */}
            {/* <StatusCard
                value={80}
                status="success"
                title="Good To-go"
                subtitle="Shipments"
                width={"300px"}
                isMobile={isMobile}
            /> */}

            {/* Warning Card - 25% width on md and above, full width on mobile */}
            {/* <StatusCard
                value={20}
                status="warning"
                title="Pending"
                subtitle="Shipments"
                width={"300px"}
                isMobile={isMobile}
            /> */}

            {/* Error Card - 50% width on md and above, full width on mobile */}
            {/* <StatusCard
                value={20}
                status="error"
                title="Urgent"
                subtitle="Shipments"
                additionalInfo="20 PO's at risk Need Action"
                widthError={"520px"}
                isMobile={isMobile}
            /> */}

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

