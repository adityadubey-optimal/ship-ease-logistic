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
import AcceptRejectButton from "@/components/ui/AcceptRejectButton"


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
        <DashboardLayout headerName={'CFS Receving Status'}>

            {/* Today's Status Section Placeholder */}
            <section className="mb-2">
                <StatusDashboard showAddPoButton={false} showShipByDate={false} loggedInAstext={'CFS Receiver'} />
            </section>
            <section className="mb-2">
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
                    showVendroBrandDetail={true}
                />
            </section>



            <section className="mb-2">
                <PoBookingCard />




            </section>
            <section className="mb-2">
                <DocumentHeader
                    Icon={<img />}
                    title="CFS Overview"
                    subtitle="Delivery to CFS Site"
                    showSeeMore={false}
                    onSeeMoreClick={() => console.log('See More clicked')}
                // headerTextStyle={{ color: theme.colors.redHeaderText }}
                // colorTheme={theme.colors.redHeaderText}
                />
                <StatusCardContainer cards={[
                    {
                        value: 12,
                        status: "success" as const,
                        title: "Total vendors",
                        subtitle: "",
                        width: "300px",
                    },
                    {
                        value: 12,
                        status: "success" as const,
                        title: "POs booked",
                        subtitle: "",
                        width: "300px",
                    },
                    {
                        value: 4,
                        status: "warning" as const,
                        title: "warning",
                        subtitle: "",
                        width: "300px",
                    },
                    {
                        value: 12,
                        status: "success" as const,
                        title: "Carton Quantity",
                        subtitle: "",

                        width: "300px",
                    },
                ]} />




            </section>
            <section className="mb-2">
                <div className="w-full max-w-7xl mx-auto p-4"  >
                    <DocumentHeader
                        Icon={<img />}
                        title="Shipment Barcode Scanning"
                        subtitle="Scan the carton SSCC label using yuor mobile device"
                        showSeeMore={false}
                        onSeeMoreClick={() => console.log('See More clicked')}

                    />
                    <div style={{ background: theme.colors.guageheaderColor, borderRadius: '25px', display: 'flex', justifyContent: 'center' }}>
                        <div style={{ textAlign: 'center', width: '80%', padding: '1.5rem' }}> <span style={{ fontSize: '2rem', fontWeight: '600' }}>The Scanning functionality is available on your mobile device. Please sign in from your mobile device to access scanner</span></div>

                    </div>

                </div>


            </section>

            <section className="mb-2">
                <div className="w-full max-w-7xl mx-auto p-4"  >
                    <DocumentHeader
                        Icon={<img src={Document} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                        title="Sea PO's Booked for Crago rady date:"
                        date="26 Feb 25"
                        subtitle="SOverview of the POs"
                        showSeeMore={false}
                        onSeeMoreClick={() => console.log('See More clicked')}
                    // headerTextStyle={{ color: theme.colors.yellowHeaderText }}
                    // colorTheme={theme.colors.yellowHeaderText}
                    />
                    <div style={{ background: theme.colors.secondary, borderRadius: '25px' }}>
                        <ExampleScrollableTable showDocuments={false} showDocumentsSubcolumns={false} showTotals actionFlag={'send_reminder_only'}

                        />


                    </div>

                </div>

            </section>
            <section className="mb-2" style={{ fontSize: "1.7rem", fontWeight: '700' }}>Delivery Carton Quantity Receipt</section>

            <section className="mb-2">
                <div className="w-full max-w-7xl mx-auto p-4"  >
                    <DocumentHeader
                        Icon={<img src={Document} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                        title="Delivery Carton Quantity Receipt for Cargo Ready Date"
                        date="26 Feb 25"
                        subtitle="review and approve the cartons for cargo"
                        showSeeMore={false}
                        onSeeMoreClick={() => console.log('See More clicked')}
                    // headerTextStyle={{ color: theme.colors.yellowHeaderText }}
                    // colorTheme={theme.colors.yellowHeaderText}
                    />
                    <div style={{ background: theme.colors.secondary, borderRadius: '25px' }}>
                        <ExampleScrollableTable showDocuments={false} showDocumentsSubcolumns={false} showTotals actionFlag={'active_purchase_order'}

                        />
                        <AcceptRejectButton />


                    </div>

                </div>

            </section>




        </DashboardLayout>
    )
}

