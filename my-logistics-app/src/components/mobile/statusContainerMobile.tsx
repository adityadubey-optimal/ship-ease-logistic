import StatusCard from "@/components/ui/StatusCard"
import { useTheme } from "../../context/ThemeContext"
import { useIsMobile } from "@/hooks/useMobile"

export default function StatusDashboard() {
    const { theme } = useTheme()
    const isMobile = useIsMobile()
    return (
        <div className="w-full max-w-7xl mx-auto p-4">
            <div className="flex gap-4" style={{
                marginBottom: '10px'
            }}>
                {/* Success Card - 3 columns */}
                <div className="md:col-span-3">
                    <StatusCard value={80} status="success"
                        isMobile={isMobile} title="Good To-go" subtitle="Shipments" width={"170px"} />
                </div>

                {/* Warning Card - 3 columns */}
                <div className="md:col-span-3">
                    <StatusCard value={20} status="warning"
                        isMobile={isMobile} title="Pending" subtitle="Shipments" width={"170px"} />
                </div>
            </div>
            {/* Error Card - 6 columns for wider appearance */}
            <div className="flex" style={{
                flexDirection: "row"
            }}>
                <StatusCard
                    value={20}
                    status="error"
                    title="Urgent"
                    isMobile={isMobile}
                    subtitle="Shipments"
                    additionalInfo="20 PO's at risk Need Action"
                    widthError={"362px"}
                />
            </div>

        </div>
    )
}

