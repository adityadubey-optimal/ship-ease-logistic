import DashboardLayout from "@/components/mobile/layout"
import StatusDashboard from '@/components/mobile/statusDashboardMobile'
import PoBookingCard from '@/components/mobile/PoBookingCardMobile'
import StatusCardContainer from '@/components/mobile/statusContainerMobile'
import DocumentHeader from "@/components/mobile/sectionHeaderMobile"
import UrgentTask from "@assets/urgentTask.svg";
import Document from "@assets/document.svg";
import { useTheme } from "@/context/ThemeContext"
import NotificationCard from "@/components/mobile/NotificationCardMobile"
import Slider from "@/components/ui/slider"
import { DocumentList } from "@/components/ui/documentList"
import DocumentListPro from '@/components/ui/documentListNew'
import ProgressChart from "@/components/ui/progressChart"
import DataChart from "@/components/desktop/dataChart"
import { Button } from "@/components/ui/button"
import IconButton from "@/components/ui/IconButton"
import { QuantityTable } from "@/components/mobile/quantityTableMobile"
import ShipDateGauge from "@/components/mobile/shipDaysGauage"
import VendorHeader from "@/components/mobile/VendorDetails"
import { useParams } from "react-router-dom"
import { DataTableForPo } from "./DataTable"
import ShipDate from "@/assets/ship_dates.svg"
import ShippingDatesDisplay from "./ShipDates"
import Building from "@assets/boxes_with_labels.svg"
import ShippingDatesDisplayMode from "./ShipModes"
import NotificationTable from "./NotificationTable"
import DeliveryOnline from "@/assets/Delivery and online parcel tracking.svg"
import Notification2 from '@/assets/NotificationIcon2.svg'


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
                <VendorHeader
                    vendor="Vendor Name"
                    brand="Rubi"
                    shipByDate="4 Mar 25"
                    cargoReadyDate="26 Feb 25"
                    portOfLoading="CN-SHA"
                    destination="AU-MEL"

                />
            </section>

            <section className="mb-1" style={{ borderRadius: '30px', position: 'relative', background: theme.colors.dataTableBackground }} >
                <DataTableForPo />
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
                        src={Notification2}
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


        </DashboardLayout>
    )
}

