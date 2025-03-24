import DashboardLayout from "@/components/mobile/layout"
import StatusDashboard from '@/components/mobile/statusDashboardMobile'
// import PoBookingCard from '@/components/mobile/PoBookingCardMobile'
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
import { useNavigate } from "react-router-dom"
import DocumentListPro from "@/components/ui/documentListNew"
import VendorOptions from '@/components/mobile/VendorOptionsMobile'
import PoBookingCard from './PoBookingCard'
import AcceptRejectButton from '../vendorHome/AcceptRejectButton'

import Vector from "@/assets/Vector.svg"
import Hazard from "@/assets/fluent_approvals-app-24-filled.svg"
import checkbox from "@/assets/ic_twotone-pending-actions.svg"

import NotificationTable from "../vendorHome/NotificationTable"
import PurchaseOrderTableExample from '../vendorHome/ChangeRequestPendingApproval'
import Building from '@/assets/NotificationIcon2.svg'
import Bill from '@/assets/bill.svg'

export default function Home() {
    const { theme } = useTheme()
    const navigate = useNavigate()

    return (
        <DashboardLayout subtitle="Active Purchase Orders">
            {/* Today's Status Section Placeholder */}
            <section className="mb-1 p-4" style={{ paddingBottom: '0px' }}>
                <StatusDashboard />
            </section>

            <section className="mb-1 p-4">
                <VendorOptions defaultSelectedIndex={0} />

            </section>

            {/* Metrics Section Placeholder */}
            <section className="mb-1 p-4">
                <PoBookingCard />

            </section>

            {/* Tasks Section Placeholder */}
            <section className="mb-1 p-4">

                <StatusCardContainer />
            </section>



            {/*Documetn overview section */}
            <section className="mb-1">
                <div className="w-full max-w-7xl mx-auto"  >
                    <div className=" p-4">
                        <DocumentHeader
                            Icon={<img src={Bill} alt="Ship illustration" className="w-15 h-15 object-contain" />}
                            title="Active Purchase Order for Ship-By-Date: 4 Mar 25 (20 new POs)"

                            subtitle="Apprive POs Ship-By-Date, Mode and Quantity"
                            showSeeMore={false}
                            onSeeMoreClick={() => console.log('See More clicked')}
                        />
                    </div>
                    <div style={{ background: theme.colors.secondary, borderRadius: '25px' }}>
                        <DataChart height="400px" actionFlag={'active_purchase_order'} customContainerStyle={{ paddingTop: "1.5rem" }} />
                        <AcceptRejectButton />
                    </div>

                </div>


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
                        <DataChart height="400px" actionFlag={"ship_by_date_booking"} />

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
                        <DataChart height="400px" actionFlag={"ship_by_date_booking"} />

                    </div>

                </div>


            </section>

            <section className="mb-12">
                <div className="w-full max-w-7xl mx-auto "  >
                    <div className=" p-4">
                        <DocumentHeader
                            Icon={<img src={Hazard} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                            title="PO Change Requests Pending Approval"
                            subtitle="Send reminders to the stakeholders for pending actions"
                            showSeeMore={false}
                            onSeeMoreClick={() => console.log('See More clicked')}
                            headerTextStyle={{ color: theme.colors.yellowHeaderText }}
                            colorTheme={theme.colors.yellowHeaderText}
                        />
                    </div>
                    <div style={{ background: theme.colors.secondary, borderRadius: '25px', paddingTop: "1.5rem", marginTop: '1rem' }}>
                        <PurchaseOrderTableExample />


                    </div>

                </div>

            </section>
            <section className="mb-2"  >
                <div className="w-full max-w-7xl mx-auto" style={{ borderRadius: '30px', position: 'relative', background: theme.colors.dataTableBackground }}>
                    <div className=" p-4">
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
                    </div>
                    <div style={{ paddingTop: "0.5rem", marginTop: '0rem' }}>
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
                </div>
            </section>



        </DashboardLayout>
    )
}

