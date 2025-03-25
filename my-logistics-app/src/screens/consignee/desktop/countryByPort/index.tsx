import DashboardLayout from "@/components/desktop/Layout"
import StatusDashboard from '@/components/desktop/StatusDashboard'
import PoBookingCard from '@/components/desktop/PoBookingCardNew'
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
import VendorHeader from "./vendorDetials"
import Vector from "@/assets/Vector.svg"
import Hazard from "@/assets/fluent_approvals-app-24-filled.svg"
import checkbox from "@/assets/ic_twotone-pending-actions.svg"
import PurchaseOrderTableExample from './ChangeRequestPendingApproval'
import OrderHeader from "./CargoReadyBookingHeader"
import ExampleScrollableTable from '@/components/desktop/DataChartForShipper'


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
        <DashboardLayout headerName={'Country By Port of Loading Status'}>

            {/* Today's Status Section Placeholder */}
            <section className="mb-2">
                <StatusDashboard showAddPoButton={false} showShipByDate={true} loggedInAstext={'Consignee'} />
            </section>
            <section className="mb-2 w-full max-w-7xl mx-auto">
                <VendorHeader
                    vendor="Vendor Name"
                    brand="Rubi"
                    shipByDate="4 Mar 25"
                    cargoReadyDate="26 Feb 25"
                    portOfLoading="CN-SHA"
                    destination="AU-MEL"
                    fontSize={{
                        label: theme.fonts.web.venderDetialsPage.infoHeader.size,    // 14px
                        value: theme.fonts.web.venderDetialsPage.infoDescription.size,    // 18px
                        title: theme.fonts.web.venderDetialsPage.label.size,         // 16px
                        titleValeu: theme.fonts.web.venderDetialsPage.value.size,
                    }}
                    fontWeight={{
                        label: theme.fonts.web.venderDetialsPage.infoHeader.weight,
                        value: theme.fonts.web.venderDetialsPage.infoDescription.weight,
                        title: theme.fonts.web.venderDetialsPage.label.weight,
                        titleValeu: theme.fonts.web.venderDetialsPage.value.weight,
                    }}
                    showVendroBrandDetail={false}
                />
            </section>



            <section className="mb-2">
                <PoBookingCard />




            </section>
            <section className="mb-2">
                <StatusCardContainer />




            </section>
            <section className="mb-2 w-full max-w-7xl mx-auto" style={{ fontSize: "1.7rem", fontWeight: '700' }}>Status by Ship-by-Date</section>
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

            <section className="mb-2">
                <div className="w-full max-w-7xl mx-auto"  >
                    <div className="p-4">
                        <DocumentHeader
                            Icon={<img src={Document} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                            title="Cargo Ready Date URGENT Booking"
                            subtitle="PO that should be shipped urgently"
                            showSeeMore={false}
                            onSeeMoreClick={() => console.log('See More clicked')}
                            headerTextStyle={{ color: theme.colors.redHeaderText }}
                            colorTheme={theme.colors.yellowHeaderText}
                        />
                    </div>
                    <div style={{ background: theme.colors.secondary, borderRadius: '25px' }}>
                        <ExampleScrollableTable showDocumentsSubcolumns={true} showDocuments={false} actionFlag="send_reminder_with_shipping_information"

                        />


                    </div>

                </div>

            </section>

            <section className="mb-2">
                <div className="w-full max-w-7xl mx-auto"  >
                    <div className="p-4">
                        <DocumentHeader
                            Icon={<img src={Document} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                            title="Cargo Ready Date Pending Booking"

                            subtitle="Actions these POs to avoid delay to the shipment"
                            showSeeMore={false}
                            onSeeMoreClick={() => console.log('See More clicked')}
                            headerTextStyle={{ color: theme.colors.yellowHeaderText }}
                            colorTheme={theme.colors.yellowHeaderText}
                        />
                    </div>
                    <div style={{ background: theme.colors.secondary, borderRadius: '25px' }}>
                        <ExampleScrollableTable showDocuments={true} showDocumentsSubcolumns={true} actionFlag="send_reminder_with_shipping_information"

                        />


                    </div>

                </div>

            </section>

            <section className="mb-2">
                <div className="w-full max-w-7xl mx-auto"  >
                    <div className="p-4">
                        <DocumentHeader
                            Icon={<img src={Document} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                            title="Cargo Ready Date Pending Documents"

                            subtitle="Upload Pending documents"
                            showSeeMore={false}
                            onSeeMoreClick={() => console.log('See More clicked')}
                            headerTextStyle={{ color: theme.colors.yellowHeaderText }}
                            colorTheme={theme.colors.yellowHeaderText}
                        />
                    </div>
                    <div style={{ background: theme.colors.secondary, borderRadius: '25px' }}>
                        <ExampleScrollableTable showDocuments={true} showDocumentsSubcolumns={true}
                            actionFlag="send_reminder_with_shipping_information"
                        />


                    </div>

                </div>

            </section>


        </DashboardLayout>
    )
}

