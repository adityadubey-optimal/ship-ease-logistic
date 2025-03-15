import DashboardLayout from "@/components/mobile/layout"
import StatusDashboard from '@/components/mobile/statusDashboardMobile'
import PoBookingCard from '@/components/desktop/PoBookingCard'
import StatusCardContainer from '@/components/desktop/statusCardContainer'
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
        <DashboardLayout>
            {/* Today's Status Section Placeholder */}
            <section className="mb-1 p-4" style={{ paddingBottom: '0px' }}>
                <StatusDashboard showAddPoButton={false} />
            </section>

            {/* Metrics Section Placeholder */}
            <section className="mb-1 p-4" style={{ paddingBottom: '2rem' }}>
                <WorldMap vendors={vendors} height="400px" />

            </section>

            {/* Tasks Section Placeholder */}
            <section className="mb-2">

                <StatusCardContainer />
            </section>

            <section className="mb-2">
                <div className="w-full max-w-7xl mx-auto "  >
                    <div className=" p-4">
                        <DocumentHeader
                            Icon={<img src={Vector} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                            title="Ship-By-Date Urgent Booking"
                            subtitle="POs which should have cargo booked immediately"
                            showSeeMore={false}
                            onSeeMoreClick={() => console.log('See More clicked')}
                            headerTextStyle={{ color: theme.colors.redHeaderText }}
                            colorTheme={theme.colors.redHeaderText}
                        />
                    </div>
                    <div style={{ background: theme.colors.secondary, borderRadius: '25px', paddingTop: "1.5rem", marginTop: '1rem' }}>
                        <DataChart height="400px" actionFlag={"ship_by_date_booking"} showDownloadButton />

                    </div>

                </div>


            </section>


            <section className="mb-2">
                <div className="w-full max-w-7xl mx-auto "  >
                    <div className=" p-4">
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
                    </div>
                    <div style={{ background: theme.colors.secondary, borderRadius: '25px', paddingTop: "1.5rem", marginTop: '1rem' }}>
                        <DataChart height="400px" actionFlag={"ship_by_date_booking"} showDownloadButton />

                    </div>

                </div>


            </section>

            <section className="mb-2">
                <div className="w-full max-w-7xl mx-auto p-4"  >
                    <div style={{ marginBottom: '0.75rem' }}>
                        <DocumentHeader
                            Icon={<img src={Building} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                            title="Cargo Ready Overview 24 Mar 25"
                            subtitle="Cargo Ready Booking Overview for Ship-by-Date 24 Mar 25"
                            showSeeMore={false}
                            onSeeMoreClick={() => console.log('See More clicked')}
                        // headerTextStyle={{ color: theme.colors.yellowHeaderText }}
                        // colorTheme={theme.colors.yellowHeaderText}
                        />
                    </div>
                    <div style={{ borderRadius: '25px' }}>

                        <StatusDashboard showAddPoButton={false} />
                        <StatusCardContainer />
                        <DataChartMobile />

                    </div>

                </div>

            </section>

        </DashboardLayout>
    )
}

