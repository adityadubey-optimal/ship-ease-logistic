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
import { Button } from "@/components/ui/button"
import PurchaseOrderTableExample from '../../../vendor/mobile/vendorHome/ChangeRequestPendingApproval'
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
        <DashboardLayout subtitle="CFS Receiving Status">
            {/* Today's Status Section Placeholder */}
            <section className="mb-1 p-4" style={{ paddingBottom: '0px' }}>
                <StatusDashboard showAddPoButton={false} />
            </section>

            {/* Metrics Section Placeholder */}
            <section className="mb-1 p-4" style={{ paddingBottom: '1rem' }}>
                <PoBookingCard />

            </section>



            <section className="mb-2">

                <span style={{
                    display: 'flex',

                    justifyContent: 'flex-start',
                    margin: '2rem 0rem 1rem 0.5rem',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                }}>PO Overview</span>
            </section>

            <section className="mb-12">
                <div style={{ background: theme.colors.secondary, borderRadius: '35px' }}>
                    <OrderHeader
                        poNumber="2846395275"
                        buyer="Sample Buyer"
                        brand="Sample Brand"
                        productName="Men's Long Sleeve Shirt 100% Cotton"
                        color="Navy"

                        colors={["Navy", "Black", "White", "Red"]}
                        orderDetails={orderDetails}
                        onAction={() => console.log("Action clicked")}
                        ActionButtonText={`Action Required, Approve Ship-By-Date`}
                        styles={{
                            backgroundColor: theme.colors.secondary,
                            textColor: "#1E1E1E",
                            fontSize: "16px",
                            fontWeight: "400",
                            actionButtonColor: "#FFE5E5",
                            actionButtonTextColor: "#1E1E1E",
                        }}
                    />

                </div>
            </section>


            <section className="mb-2">
                <div className="w-full max-w-7xl mx-auto p-4"  >
                    <DocumentHeader
                        Icon={<img src={Document} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                        title="Sea PO's Booked for Crago rady date:"
                        date="24 Feb 25"
                        subtitle="Overview of the POs"
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

            <section className="mb-2">
                <div className="w-full max-w-7xl mx-auto p-4"  >
                    <DocumentHeader
                        Icon={<img src={Document} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                        title="Air PO's Booked for Delivery:"
                        date="26 Feb 25"
                        subtitle="Overview of the POs"
                        showSeeMore={false}
                        onSeeMoreClick={() => console.log('See More clicked')}
                    // headerTextStyle={{ color: theme.colors.yellowHeaderText }}
                    // colorTheme={theme.colors.yellowHeaderText}
                    />
                    <div style={{ background: theme.colors.secondary, borderRadius: '25px' }}>
                        <ExampleScrollableTable showDocuments={false} showDocumentsSubcolumns={false} showTotals actionFlag={'send_reminder_only'}

                        />
                        <AcceptRejectButton />

                    </div>

                </div>

            </section>



        </DashboardLayout>
    )
}

