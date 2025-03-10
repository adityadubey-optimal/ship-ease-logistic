import DashboardLayout from "@/components/mobile/layout"
import StatusDashboard from '@/components/mobile/statusDashboardMobile'
import PoBookingCard from './PoBookingCard'
import StatusCardContainer from '@/components/mobile/statusContainerMobile'
import DocumentHeader from "@/components/mobile/sectionHeaderMobile"
import UrgentTask from "@assets/urgentTask.svg";
import Document from "@assets/document.svg";
import { useTheme } from "@/context/ThemeContext"
import NotificationCard from "@/components/mobile/NotificationCardMobile"
import Slider from "@/components/ui/slider"
import { DocumentList } from "@/components/ui/documentList"
import ProgressChart from "@/components/ui/progressChart"
import DataChart from "@/components/desktop/dataChart"
import { Button } from "@/components/ui/button"
import IconButton from "@/components/ui/IconButton"
import { QuantityTable } from "@/components/mobile/quantityTableMobile"
import ShipDateGauge from "@/components/mobile/shipDaysGauage"
import VendorHeader from "@/components/mobile/VendorDetails"
import { useParams } from "react-router-dom"
import { DataTableForPo } from "./DataTable"

export default function Home() {
    const { theme } = useTheme()
    const { id } = useParams()


    return (
        <DashboardLayout subtitle={`PO#${id} Overview`}>
            {/* Today's Status Section Placeholder */}
            <section className="mb-1 p-4" style={{ paddingBottom: '0px' }}>
                <StatusDashboard />
            </section>
            <section className="mb-1 p-4">
                <PoBookingCard />

            </section>

            <section className="mb-1">
                <DataTableForPo />

            </section>


        </DashboardLayout>
    )
}

