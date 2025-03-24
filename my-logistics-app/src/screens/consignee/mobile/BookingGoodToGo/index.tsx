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
import VendorHeader from "@/components/mobile/vendorDetailsNew"

export default function Home() {
    const { theme } = useTheme()
    const navigate = useNavigate()

    return (
        <DashboardLayout subtitle="Booking good to-go">
            <section className="mb-1 p-4" style={{ paddingBottom: '0px' }}>
                <StatusDashboard showAddPoButton={false} />
            </section>
            <section className="mb-0 p-4">

                <VendorHeader vendor="Vendor Name"
                    brand="Rubi"
                    shipByDate="4 Mar 25"
                    cargoReadyDate="26 Feb 25"
                    portOfLoading="CN-SHA"
                    destination="AU-MEL" />
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

            <section className="mb-2">
                <div className="w-full max-w-7xl mx-auto p-4"  >
                    <DocumentHeader
                        Icon={<img src={Document} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                        title="Sea PO's Booked for Crago rady date:"
                        date="24 Feb 25"
                        subtitle="Action These  POs to avoid any delay to the shipment"
                        showSeeMore={false}
                        onSeeMoreClick={() => console.log('See More clicked')}
                    // headerTextStyle={{ color: theme.colors.yellowHeaderText }}
                    // colorTheme={theme.colors.yellowHeaderText}
                    />
                    <div style={{ background: theme.colors.secondary, borderRadius: '25px' }}>
                        <ExampleScrollableTable showDocuments={false} showDocumentsSubcolumns={true} actionFlag={'send_reminder_with_shipping_information'}

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
                        subtitle="Action These  POs to avoid any delay to the shipment"
                        showSeeMore={false}
                        onSeeMoreClick={() => console.log('See More clicked')}
                    // headerTextStyle={{ color: theme.colors.yellowHeaderText }}
                    // colorTheme={theme.colors.yellowHeaderText}
                    />
                    <div style={{ background: theme.colors.secondary, borderRadius: '25px' }}>
                        <ExampleScrollableTable showDocuments={false} showDocumentsSubcolumns={true} actionFlag={'send_reminder_with_shipping_information'}

                        />


                    </div>

                </div>

            </section>

            <section className="mb-2">
                <div className="w-full max-w-7xl mx-auto p-4"  >
                    <DocumentHeader
                        Icon={<img src={Document} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                        title="Air PO's Booked for Crago rady date::"
                        date="26 Feb 25"
                        subtitle="Action These  POs to avoid any delay to the shipment"
                        showSeeMore={false}
                        onSeeMoreClick={() => console.log('See More clicked')}
                    // headerTextStyle={{ color: theme.colors.yellowHeaderText }}
                    // colorTheme={theme.colors.yellowHeaderText}
                    />
                    <div style={{ background: theme.colors.secondary, borderRadius: '25px' }}>
                        <ExampleScrollableTable showDocuments={false} showDocumentsSubcolumns={false} showTotals actionFlag="send_reminder_with_shipping_information"

                        />


                    </div>

                </div>

            </section>






        </DashboardLayout>
    )
}

