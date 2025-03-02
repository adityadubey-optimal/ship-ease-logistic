import DashboardLayout from "@/components/desktop/Layout"
import StatusDashboard from '@/components/desktop/StatusDashboard'
import PoBookingCard from './BookingCard'
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
import { DataTableForPo } from "./DataTable"

export default function Home() {
    const { theme } = useTheme()


    return (
        <DashboardLayout headerName="Vendors Ship-By-Date Overview">
            {/* Today's Status Section Placeholder */}
            <section className="mb-8">
                <StatusDashboard ImportPoButton />
            </section>
            <section className="mb-8">
                <PoBookingCard />

            </section>



            {/* Task Card Section Placeholder */}
            <section className="mb-8" >
                <div className="w-full max-w-7xl mx-auto p-4" style={{ background: theme.colors.thertiary, borderRadius: '15px' }}>

                    <DataTableForPo showTotal={false} showActions={false} />
                </div>

            </section>



        </DashboardLayout>
    )
}

