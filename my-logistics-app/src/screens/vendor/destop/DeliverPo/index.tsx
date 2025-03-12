import DashboardLayout from "@/components/desktop/Layout"
import StatusDashboard from '@/components/desktop/StatusDashboard'
import PoBookingCard from '@/components/desktop/PoBookingCard'
import StatusCardContainer from '@/components/desktop/statusCardContainer'
import DocumentHeader from "@/components/desktop/sectionHeader"
import UrgentTask from "@assets/urgentTask.svg";
import Document from "@assets/document.svg";
import { useTheme } from "@/context/ThemeContext"
import NotificationCard from "@/components/desktop/NotificationCardDesktop"
import Slider from "@/components/ui/slider"
import { DocumentList } from "@/components/ui/documentList"
import ProgressChart from "@/components/ui/progressChart"
import DataChart from "@/components/desktop/dataChart"
import { useNavigate } from "react-router-dom"
import DocumentListPro from '@/components/ui/documentListNew'
import VendorOptions from '@/components/desktop/vendorOptions'

export default function Home() {
    const { theme } = useTheme()
    const navigate = useNavigate()

    return (
        <DashboardLayout headerName={'Bookings Good To-Go'} >
            {/* Today's Status Section Placeholder */}
            < section className="mb-2" >
                <StatusDashboard />
            </section>

            {/* Metrics Section Placeholder */}
            <section className="mb-12" >
                <div className="w-full max-w-7xl mx-auto p-4" >
                    <VendorOptions defaultSelectedIndex={2} />
                </div>
            </section>

            {/* Tasks Section Placeholder */}
            <section className="mb-2" >

                <StatusCardContainer />
            </section>

        </DashboardLayout>
    )
}

