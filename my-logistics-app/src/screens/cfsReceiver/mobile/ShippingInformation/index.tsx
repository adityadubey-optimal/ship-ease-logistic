import DashboardLayout from "@/components/mobile/layout"

import StatusDashboard from '@/components/mobile/statusDashboardMobile'
import DocumentHeader from "@/components/mobile/sectionHeaderMobile"
import StatusCardContainer from '@/components/mobile/statusContainerMobile'
import PoBookingCard from '@/components/mobile/PoBookingCardNew'
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
import checkbox from "@/assets/ic_twotone-pending-actions.svg"
import Vector from "@/assets/Vector.svg"
import Hazard from "@/assets/fluent_approvals-app-24-filled.svg"
import ExampleScrollableTable from '@/components/desktop/DataChartForShipper'
import DOcumentHeaderMobile from '@/components/mobile/sectionHeaderMobile'
import { DataTableForPoMobile } from "@/components/mobile/DataTableForSkuMobile"
import Box from "@/assets/box.svg"
import DeliveryOnline from "@/assets/Delivery and online parcel tracking.svg"
import ShippingDatesDisplayMode from "./ShipModes"
import ShippingDatesDisplay from "./ShipDates"
import NotificationTable from "./NotificationTable"
import ShipDate from "@/assets/ship_dates.svg"
import Building from '@/assets/NotificationIcon2.svg'





export default function Home() {
    const { theme } = useTheme()
    const navigate = useNavigate()

    return (
        <DashboardLayout subtitle="Shipping information PO#3289462364">
            <section className="mb-1 p-4" style={{ paddingBottom: '0px' }}>
                <StatusDashboard showAddPoButton={false} />
            </section>

            {/* Metrics Section Placeholder */}
            <section className="mb-1 p-4" style={{ paddingBottom: '1rem' }}>
                <PoBookingCard />

            </section>

            {/* Tasks Section Placeholder */}
            <section className="mb-2">

                <StatusCardContainer />
            </section>

            {/*Documetn overview section */}

            <section className="mb-2" style={{ paddingBottom: '1.5rem' }}>

                <div style={{ padding: '1rem' }}>
                    <DOcumentHeaderMobile
                        Icon={<img src={Box} alt="Ship illustration" className="w-10 h-10 object-contain" style={{ height: '3.5rem', width: '3.5rem   ' }} />}
                        title="SKU Packing List"
                        subtitle="Packing list as uploaded by the vendor"
                        showSeeMore={false}
                        onSeeMoreClick={() => console.log('See More clicked')}
                        containerStyle={{ borderRadius: '35px' }}
                    />
                </div>
                <DataTableForPoMobile />

            </section>

            <section className="mb-1 p-4">
                <DocumentHeader
                    Icon={<img src={ShipDate} alt="Ship illustration" className="w-20 h-20 object-contain" />}
                    title="Ship Dates"
                    subtitle="Shipping ad cargo results"
                    showSeeMore={false}
                    onSeeMoreClick={() => console.log('See More clicked')}
                />
                <ShippingDatesDisplay />
            </section>

            <section className="mb-1 p-4">
                <DocumentHeader
                    Icon={<img src={DeliveryOnline} alt="Ship illustration" className="w-20 h-20 object-contain" />}
                    title="Ship Modes"
                    subtitle="Ship mode as approved"
                    showSeeMore={false}
                    onSeeMoreClick={() => console.log('See More clicked')}
                />
                <ShippingDatesDisplayMode />
            </section>

            <section className="mb-1 p-4" style={{ borderRadius: '30px', position: 'relative', background: theme.colors.dataTableBackground }} >
                <DocumentHeader
                    Icon={<img
                        src={Building}
                        alt="Ship illustration"
                        className="w-20 h-20 object-contain" />}
                    title="Updates"
                    // subtitle="Ship mode as approved"
                    showSeeMore={false}
                    onSeeMoreClick={() => console.log('See More clicked')}
                />

                <NotificationTable
                    data={[
                        { date: "13.02.2025", notification: "PO Updated to AIR", user: "Buyer" },
                        { date: "13.02.2025", notification: "Quantity Updated", user: "Buyer" },
                        { date: "13.02.2025", notification: "Quantity Updated", user: "Buyer" },
                        { date: "13.02.2025", notification: "Quantity Updated", user: "Buyer" },
                        { date: "13.02.2025", notification: "Quantity Updated", user: "Buyer" },
                        { date: "13.02.2025", notification: "Quantity Updated", user: "Buyer" },
                        { date: "13.02.2025", notification: "Quantity Updated", user: "Buyer" },

                    ]}
                    headerLabels={{
                        date: "Date",
                        notification: "Notification",
                        user: "User",
                    }}
                    styles={{
                        containerBackground: "white",
                        rowBackground: "white",
                        alternateRowBackground: "white",
                        separatorColor: "#E5E7EB",
                        fontSize: {
                            header: "1rem",
                            cell: "1rem",
                        },
                        fontWeight: {
                            header: "600",
                            cell: "400",
                        },
                        textColor: {
                            header: "#1E1E1E",
                            cell: "#1E1E1E",
                        },
                        padding: {
                            container: "0",
                            header: "1rem 1rem",
                            cell: "1rem 1rem",
                        },
                        borderRadius: "0.5rem",
                        showSeparators: true,
                        columnWidths: {
                            date: "25%",
                            notification: "50%",
                            user: "25%",
                        },
                    }}
                />
            </section>
            <section className="mb-1 p-4" >
                <div className="w-full max-w-7xl mx-auto p-2" >
                    <DocumentHeader
                        Icon={<img src={Document} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                        title="Documentation Overview"
                        subtitle="Documents uploaded in the portal"
                        showSeeMore={false}
                        showSeeMoreIcon
                        onSeeMoreClick={() => console.log('See More clicked')}
                        containerStyle={{ paddingBottom: '1rem' }}
                    />
                    <DocumentListPro
                        documents={[
                            {
                                title: "Commercial Invoice",
                                submissionDate: "19 Feb 2025",
                                onDownload: () => console.log("Downloading Commercial Invoice"),
                                onView: () => console.log("Viewing Commercial Invoice"),
                            },
                            {
                                title: "Marks and Numbers",
                                submissionDate: "19 Feb 2025",
                                onDownload: () => console.log("Downloading Marks and Numbers"),
                                onView: () => console.log("Viewing Marks and Numbers"),
                            },
                            {
                                title: "Booking Confirmations",
                                submissionDate: "19 Feb 2025",
                                onDownload: () => console.log("Downloading Booking Confirmations"),
                                onView: () => console.log("Viewing Booking Confirmations"),
                            },
                        ]}
                        showIcons={true}
                        showSubmittedText={true}
                        styles={{
                            backgroundColor: "#E2E2FC",
                            textColor: "#1E1E1E",
                            borderColor: "#D1D5DB",
                            buttonBackground: theme.colors.secondary,
                            iconColor: "#2563EB",
                            fontSize: {
                                title: {
                                    mobile: "1rem",
                                    desktop: "1.125rem",
                                },
                                date: {
                                    mobile: "0.65rem",
                                    desktop: "0.875rem",
                                },
                            },
                            fontWeight: {
                                title: {
                                    mobile: "550",
                                    desktop: "550",
                                },
                                date: {
                                    mobile: "300",
                                    desktop: "300",
                                }
                            },
                            padding: {
                                iconContainer: "0.5rem",
                            },
                        }}
                    />

                </div>

            </section>
















        </DashboardLayout >
    )
}

