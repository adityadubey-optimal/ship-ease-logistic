import DashboardLayout from "@/components/mobile/layout"
import StatusDashboard from '@/components/mobile/statusDashboardMobile'
import PoBookingCard from '@/components/mobile/PoBookingCardNew'
import StatusCardContainer from '@/components/mobile/statusContainerMobile'
import UrgentTask from "@assets/urgentTask.svg";
import Document from "@assets/document.svg";
import { useTheme } from "@/context/ThemeContext"
import NotificationCard from "@/components/desktop/NotificationCardDesktop"
import Slider from "@/components/ui/slider"
import { DocumentList } from "@/components/ui/documentList"
import ProgressChart from "@/components/ui/progressChart"
import DataChartMobile from "@/components/mobile/DataChartMobile"

import DataChart from "@/components/desktop/dataChart"
import { useNavigate } from "react-router-dom"
import DocumentListPro from '@/components/ui/documentListNew'
import WorldMap from "@/components/ui/MapComponent"
import Vector from "@/assets/Vector.svg"
import Hazard from "@/assets/fluent_approvals-app-24-filled.svg"
import checkbox from "@/assets/ic_twotone-pending-actions.svg"
import DocumentHeader from "@/components/mobile/sectionHeaderMobile"
import Building from "@assets/boxes_with_labels.svg"
import VendorHeader from '../../../../components/mobile/VendorDetails'
import ExampleScrollableTable from '@/components/desktop/DataChartForShipper'



export default function Home() {
    const { theme } = useTheme()
    const navigate = useNavigate()

    const vendors = [
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
        <DashboardLayout subtitle="Documnet Overview">
            {/* Today's Status Section Placeholder */}
            <section className="mb-1 p-4" style={{ paddingBottom: '0px' }}>
                <StatusDashboard showAddPoButton={false} />
            </section>

            {/* Metrics Section Placeholder */}
            <section className="mb-1 p-4" style={{ paddingBottom: '0.5rem' }}>
                <VendorHeader
                    vendor="Vendor Name"
                    brand="Rubi"
                    shipByDate="4 Mar 25"
                    cargoReadyDate="26 Feb 25"
                    portOfLoading="CN-SHA"
                    destination="AU-MEL"
                    customPadding
                />

            </section>

            <section className="mb-1 p-4" style={{ paddingBottom: '1rem' }}>
                <PoBookingCard />

            </section>

            {/* Tasks Section Placeholder */}
            <section className="mb-2">

                <StatusCardContainer />
            </section>

            <section className="mb-2">
                <div className="w-full max-w-7xl mx-auto"  >
                    <div className="p-4">
                        <DocumentHeader
                            Icon={<img src={Document} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                            title="PO Change Requests Pending Documents"
                            date="24 Feb 2025"
                            subtitle="Select PO to submit documents and action POs"
                            showSeeMore={false}
                            onSeeMoreClick={() => console.log('See More clicked')}
                        // headerTextStyle={{ color: theme.colors.yellowHeaderText }}
                        // colorTheme={theme.colors.yellowHeaderText}
                        />
                    </div>
                    <div style={{ background: theme.colors.secondary, borderRadius: '25px' }}>
                        <ExampleScrollableTable showDocumentsSubcolumns={true} showDocuments={true} actionFlag={"ship_by_date_booking"}

                        />


                    </div>

                </div>

            </section>

            <section className="mb-2">
                <div className="w-full max-w-7xl mx-auto"  >
                    <div className="p-4">
                        <DocumentHeader
                            Icon={<img src={Document} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                            title="PO booked for cargo ready date:"
                            date="26 Feb 2025"
                            subtitle="Select PO to submit documents and action POs"
                            showSeeMore={false}
                            onSeeMoreClick={() => console.log('See More clicked')}
                        // headerTextStyle={{ color: theme.colors.yellowHeaderText }}
                        // colorTheme={theme.colors.yellowHeaderText}
                        />
                    </div>
                    <div style={{ background: theme.colors.secondary, borderRadius: '25px' }}>
                        <ExampleScrollableTable showDocumentsSubcolumns={true} showDocuments={true} actionFlag={"ship_by_date_booking"}

                        />


                    </div>

                </div>

            </section>

        </DashboardLayout>
    )
}

