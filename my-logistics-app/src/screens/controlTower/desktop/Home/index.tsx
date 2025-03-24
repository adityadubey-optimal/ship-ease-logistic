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
import DataChartDesktop from "@/components/mobile/DataChartMobile"
import { useNavigate } from "react-router-dom"
import DocumentListPro from '@/components/ui/documentListNew'
import WorldMap from "@/components/ui/MapComponent"
import Vector from "@/assets/Vector.svg"
import PurchaseOrderTableExample from './ChangeRequestPendingApproval'
import Hazard from "@/assets/fluent_approvals-app-24-filled.svg"
import checkbox from "@/assets/ic_twotone-pending-actions.svg"
import Building from "@assets/boxes_with_labels.svg"


export default function Home() {
    const { theme } = useTheme()
    const navigate = useNavigate()

    interface Vendor {
        id?: string
        country?: string
        vendor?: string
        lat?: number
        lng?: number
        category?: "red" | "yellow" | "orange"
    }

    const vendors: Vendor[] = [
        {
            id: "1",
            country: "China",
            vendor: "Wuxi",
            lat: 31.57,
            lng: 120.3,
            category: "red",
        },
        {
            id: "2",
            country: "India",
            vendor: "Mumbai",
            lat: 19.07,
            lng: 72.87,
            category: "yellow",
        },
        {
            id: "3",
            country: "USA",
            vendor: "New York",
            lat: 40.71,
            lng: -74.01,
            category: "orange",
        },
    ]

    return (
        <DashboardLayout headerName={'Vendors Ship-By-Date Overview'}>


            {/* Today's Status Section Placeholder */}
            <section className="mb-2">
                <StatusDashboard showAddPoButton={false} />
            </section>

            <section className="mb-12 w-full max-w-7xl mx-auto p-4">

                <WorldMap vendors={vendors} />
            </section>

            <section className="mb-2">
                <div className="w-full max-w-7xl mx-auto p-4"  >
                    <DocumentHeader
                        Icon={<img src={Vector} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                        title="Ship-By-Date Urgent Booking"
                        subtitle="POs which should have cargo booked immediately"
                        showSeeMore={false}
                        onSeeMoreClick={() => console.log('See More clicked')}
                        headerTextStyle={{ color: theme.colors.redHeaderText }}
                        colorTheme={theme.colors.redHeaderText}
                    />
                    <div style={{ background: theme.colors.secondary, borderRadius: '25px' }}>
                        <DataChart height="400px" actionFlag={"send_reminder_with_shipping_information"} showDownloadButton />

                    </div>

                </div>


            </section>

            <section className="mb-2">
                <div className="w-full max-w-7xl mx-auto p-4"  >
                    <DocumentHeader
                        Icon={<img src={checkbox} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                        title="Ship-By-Date Pending Booking"
                        subtitle="POs to book cargo"
                        showSeeMore={false}
                        onSeeMoreClick={() => console.log('See More clicked')}
                        headerTextStyle={{ color: theme.colors.yellowHeaderText }}
                        subTitleTextStyle={{}}
                        colorTheme={theme.colors.yellowHeaderText}
                    />
                    <div style={{ background: theme.colors.secondary, borderRadius: '25px' }}>
                        <DataChart height="400px" actionFlag={"send_reminder_with_shipping_information"} showDownloadButton />

                    </div>

                </div>


            </section>

            <section className="mb-2">
                <div className="w-full max-w-7xl mx-auto p-4"  >
                    <DocumentHeader
                        Icon={<img src={Hazard} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                        title="PO Change Requests Pending Approval"
                        subtitle="Send reminders to the stakeholders for pending actions"
                        showSeeMore={false}
                        onSeeMoreClick={() => console.log('See More clicked')}
                        headerTextStyle={{ color: theme.colors.yellowHeaderText }}
                        colorTheme={theme.colors.yellowHeaderText}
                    />
                    <div style={{ background: theme.colors.secondary, borderRadius: '25px' }}>
                        <PurchaseOrderTableExample />


                    </div>

                </div>

            </section>


            <section className="mb-2">
                <div className="w-full max-w-7xl mx-auto p-4"  >
                    <DocumentHeader
                        Icon={<img src={Building} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                        title="Cargo Ready Overview 24 Mar 25"
                        subtitle="Cargo Ready Booking Overview for Ship-by-Date 24 Mar 25"
                        showSeeMore={false}
                        onSeeMoreClick={() => console.log('See More clicked')}
                    // headerTextStyle={{ color: theme.colors.yellowHeaderText }}
                    // colorTheme={theme.colors.yellowHeaderText}
                    />
                    <div style={{ borderRadius: '25px' }}>

                        <StatusDashboard showAddPoButton={false} />
                        <StatusCardContainer />
                        <DataChartDesktop />

                    </div>

                </div>

            </section>





        </DashboardLayout>
    )
}

