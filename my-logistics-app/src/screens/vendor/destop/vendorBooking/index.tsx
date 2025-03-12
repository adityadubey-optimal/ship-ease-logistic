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
import { DataTableForPo } from './CargoReadyDateBooking'
export default function Home() {
    const { theme } = useTheme()
    const navigate = useNavigate()

    return (
        <DashboardLayout headerName={'Cargo Ready Date Booking'}>
            {/* Today's Status Section Placeholder */}
            <section className="mb-2">
                <StatusDashboard />
            </section>

            {/* Metrics Section Placeholder */}
            <section className="mb-12">
                <div className="w-full max-w-7xl mx-auto p-4"  >
                    <VendorOptions defaultSelectedIndex={1} />
                </div>
            </section>

            {/* Metrics Section Placeholder */}
            <section className="mb-2">
                <PoBookingCard />

            </section>

            {/* Tasks Section Placeholder */}
            <section className="mb-2">

                <StatusCardContainer />
            </section>




            <section className="mb-2">
                <div className="w-full max-w-7xl mx-auto p-4"  >
                    <DocumentHeader
                        Icon={<img src={UrgentTask} alt="Ship illustration" style={{ height: '6rem', width: '6rem' }} className="w-10 h-10 object-contain" />}
                        title="Cargo ready Date Booking"
                        subtitle="Book delivery to CFS site"
                        showSeeMore={false}
                        onSeeMoreClick={() => console.log('See More clicked')}
                        headerTextStyle={{ color: theme.colors.yellowHeaderText }}
                        subTitleTextStyle={{}}
                        containerStyle={{ borderRadius: '25px' }}
                    />

                    <div style={{ background: theme.colors.secondary, borderRadius: '35px' }}>
                        <DataTableForPo />

                    </div>

                </div>

            </section>
        </DashboardLayout>
    )
}

