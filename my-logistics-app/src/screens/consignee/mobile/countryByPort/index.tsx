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
import OrderHeader from "./CargoReadyBookingHeader"
import ExampleScrollableTable from '@/components/desktop/DataChartForShipper'

import PurchaseOrderTableExample from '../../../vendor/mobile/vendorHome/ChangeRequestPendingApproval'

export default function Home() {
    const { theme } = useTheme()
    const navigate = useNavigate()

    const orderDetails = {
        totalPoQuantity: 1545,
        totalPackedQuantity: 1545,
        netWeight: 1545,
        grossWeight: 1545,
        cartonQuantity: 20,
        cartonMeasurement: 20,
    }

    return (
        <DashboardLayout subtitle="Country by Port of loading Status">
            {/* Today's Status Section Placeholder */}
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

            <section className="mb-2">

                <span style={{
                    display: 'flex',

                    justifyContent: 'flex-start',
                    margin: '2rem 0rem 1rem 0.5rem',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                }}>Status by Ship-by-date</span>
            </section>

            <section className="mb-2">
                <div className="w-full max-w-7xl mx-auto "  >
                    <div className=" p-4">
                        <DocumentHeader
                            Icon={<img src={Vector} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                            title="Ship-by-date  URGENT Booking"
                            subtitle="POs which should have cargo booked immediately"
                            showSeeMore={false}
                            onSeeMoreClick={() => console.log('See More clicked')}
                            headerTextStyle={{ color: theme.colors.redHeaderText }}
                            colorTheme={theme.colors.redHeaderText}
                        />
                    </div>
                    <div style={{ background: theme.colors.secondary, borderRadius: '25px', paddingTop: "1.5rem", marginTop: '1rem' }}>
                        <DataChart height="400px" actionFlag={"send_reminder_with_shipping_information"} showDownloadButton />

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
                        <DataChart height="400px" actionFlag={"send_reminder_with_shipping_information"} showDownloadButton />

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

            <section className="mb-2">
                <div className="w-full max-w-7xl mx-auto"  >
                    <div className="p-4">
                        <DocumentHeader
                            Icon={<img src={Document} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                            title="Cargo Ready Date URGENT Booking"
                            subtitle="Action these POs to avoid delay to the shipment"
                            showSeeMore={false}
                            onSeeMoreClick={() => console.log('See More clicked')}
                            headerTextStyle={{ color: theme.colors.redHeaderText }}
                            colorTheme={theme.colors.redHeaderText}
                        />
                    </div>
                    <div style={{ background: theme.colors.secondary, borderRadius: '25px' }}>
                        <ExampleScrollableTable showDocumentsSubcolumns={true} showDocuments={false}

                        />


                    </div>

                </div>

            </section>

            <section className="mb-2">
                <div className="w-full max-w-7xl mx-auto"  >
                    <div className="p-4">
                        <DocumentHeader
                            Icon={<img src={Document} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                            title="Cargo Ready Date Pending booking"
                            subtitle="Action these POs to avoid any delay to the shipment"
                            showSeeMore={false}
                            onSeeMoreClick={() => console.log('See More clicked')}
                            headerTextStyle={{ color: theme.colors.yellowHeaderText }}
                            colorTheme={theme.colors.yellowHeaderText}
                        />
                    </div>
                    <div style={{ background: theme.colors.secondary, borderRadius: '25px' }}>
                        <ExampleScrollableTable showDocuments={true} showDocumentsSubcolumns={true}

                        />


                    </div>

                </div>

            </section>

            <section className="mb-2">
                <div className="w-full max-w-7xl mx-auto"  >
                    <div className="p-4">
                        <DocumentHeader
                            Icon={<img src={Document} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                            title="Cargo ready Date pending Documents"
                            subtitle="Upload Pending Documents"
                            showSeeMore={false}
                            onSeeMoreClick={() => console.log('See More clicked')}
                            headerTextStyle={{ color: theme.colors.yellowHeaderText }}
                            colorTheme={theme.colors.yellowHeaderText}
                        />
                    </div>
                    <div style={{ background: theme.colors.secondary, borderRadius: '25px' }}>
                        <ExampleScrollableTable showDocuments={false} showDocumentsSubcolumns={true}

                        />


                    </div>

                </div>

            </section>



        </DashboardLayout>
    )
}

