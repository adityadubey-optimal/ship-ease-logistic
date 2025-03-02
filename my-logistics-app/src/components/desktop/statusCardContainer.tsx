// import StatusCard from "@/components/ui/StatusCard"
// import { useTheme } from "../../context/ThemeContext"
// import { useIsMobile } from "@/hooks/useMobile"

// export default function StatusDashboard() {
//     const { theme } = useTheme()
//     const isMobile = useIsMobile()
//     return (
//         <div className="w-full max-w-7xl mx-auto p-4">
//             <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
//                 {/* Success Card - 3 columns */}
//                 <div className="md:col-span-3">
//                     <StatusCard value={80} status="success" title="Good To-go" subtitle="Shipments" width={"300px"} isMobile={isMobile} />
//                 </div>

//                 {/* Warning Card - 3 columns */}
//                 <div className="md:col-span-3">
//                     <StatusCard value={20} status="warning" title="Pending" subtitle="Shipments" width={"300px"} isMobile={isMobile} />
//                 </div>

//                 {/* Error Card - 6 columns for wider appearance */}
//                 <div className="md:col-span-6">
//                     <StatusCard
//                         value={20}
//                         status="error"
//                         title="Urgent"
//                         subtitle="Shipments"
//                         additionalInfo="20 PO's at risk Need Action"
//                         widthError={"520px"}
//                         isMobile={isMobile}
//                     />
//                 </div>
//             </div>
//         </div>
//     )
// }

import StatusCard from "@/components/ui/StatusCard"
import { useTheme } from "../../context/ThemeContext"
import { useIsMobile } from "@/hooks/useMobile"

export default function StatusDashboard() {
    const { theme } = useTheme()
    const isMobile = useIsMobile()

    return (
        <div className="w-full max-w-7xl mx-auto p-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {/* Success Card - 25% width on md and above, full width on mobile */}
            <StatusCard
                value={80}
                status="success"
                title="Good To-go"
                subtitle="Shipments"
                width={"300px"}
                isMobile={isMobile}
            />

            {/* Warning Card - 25% width on md and above, full width on mobile */}
            <StatusCard
                value={20}
                status="warning"
                title="Pending"
                subtitle="Shipments"
                width={"300px"}
                isMobile={isMobile}
            />

            {/* Error Card - 50% width on md and above, full width on mobile */}
            <StatusCard
                value={20}
                status="error"
                title="Urgent"
                subtitle="Shipments"
                additionalInfo="20 PO's at risk Need Action"
                widthError={"520px"}
                isMobile={isMobile}
            />
        </div>
    )
}

