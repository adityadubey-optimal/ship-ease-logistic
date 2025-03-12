import { useState } from 'react'
import DashboardLayout from "@/components/desktop/Layout"
import StatusDashboard from '@/components/desktop/StatusDashboard'
import PoBookingCard from './PoBookingCard'
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
import VendorOptions from '../../../../components/desktop/vendorOptions'
import AcceptRejectButton from "./AcceptRejectButton"
import Vector from "@/assets/Vector.svg"
import Hazard from "@/assets/fluent_approvals-app-24-filled.svg"
import checkbox from "@/assets/ic_twotone-pending-actions.svg"
import { CustomActions } from './CustomActions'
import { addDays } from 'date-fns';
import useResponsiveSize from '@/hooks/useResponsiveSize'
import NotificationTable from "./NotificationTable"
import PurchaseOrderTableExample from './ChangeRequestPendingApproval'


export default function Home() {
    const { theme } = useTheme()
    console.log('tehem', theme)
    const navigate = useNavigate()

    const [dateRange, setDateRange] = useState<[Date | undefined, Date | undefined]>([undefined, undefined])
    const availableDates = Array.from({ length: 30 }, (_, i) => addDays(new Date(), i));
    // Colored dates for highlighting (for example, special events)
    const coloredDates = [
        { date: new Date(2025, 3, 19), color: "#A5F3BC" }, // green
        { date: new Date(2025, 3, 27), color: "#FCD7B6" }, // orange
    ]

    // Blocked dates: these dates will be disabled and styled (e.g., red)
    const blockedDates = [
        { date: new Date(2025, 3, 22), color: "#F87171" }, // red
        { date: new Date(2025, 3, 25), color: "#FBBF24" }, // yellow
    ]


    return (
        <DashboardLayout headerName={'Vendors Ship-By-Date Overview'}>
            {/* Today's Status Section Placeholder */}
            <section className="mb-2">
                <StatusDashboard />
            </section>

            <section className="mb-12">
                <div className="w-full max-w-7xl mx-auto p-4"  >
                    <VendorOptions defaultSelectedIndex={0} />
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
                        Icon={<img src={Document} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                        title="Active Purchase Order for Ship-By-Date: "
                        subtitle="Apprive POs Ship-By-Date, Mode and Quantity"
                        showSeeMore={false}
                        onSeeMoreClick={() => console.log('See More clicked')}
                    />
                    <div style={{ background: theme.colors.secondary, borderRadius: '25px' }}>
                        <DataChart height="1200px" actionFlag={'active_purchase_order'} />
                        <AcceptRejectButton />
                    </div>

                </div>


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
                        <DataChart height="400px" actionFlag={"ship_by_date_booking"} />

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
                        <DataChart height="400px" actionFlag={"ship_by_date_booking"} />

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
            <section className="mb-2"  >
                <div className="w-full max-w-7xl mx-auto p-4" style={{ borderRadius: '30px', position: 'relative', background: theme.colors.dataTableBackground }}>
                    <DocumentHeader
                        Icon={<img
                            // src={Building} 
                            // alt="Ship illustration"
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
                            borderRadius: "25px",
                            showSeparators: true,
                            columnWidths: {
                                date: "25%",
                                notification: "50%",
                                user: "25%",
                            },
                        }}
                    />
                </div>
            </section>




        </DashboardLayout>

    )
}

