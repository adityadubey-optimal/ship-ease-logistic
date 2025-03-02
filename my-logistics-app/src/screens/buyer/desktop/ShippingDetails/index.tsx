import DashboardLayout from "@/components/desktop/Layout"
import StatusDashboard from '@/components/desktop/StatusDashboard'
import PoBookingCard from '@/components/desktop/PoBookingCard'
import StatusCardContainer from '@/components/desktop/statusCardContainer'
import DocumentHeader from "@/components/desktop/sectionHeader"
import UrgentTask from "@assets/urgentTask.svg";
import Document from "@assets/document.svg";
import Building from "@assets/boxes_with_labels.svg"
import { useTheme } from "@/context/ThemeContext"
import NotificationCard from "@/components/desktop/NotificationCardDesktop"
import Slider from "@/components/ui/slider"
import { DocumentList } from "@/components/ui/documentList"
import ProgressChart from "@/components/ui/progressChart"
import { useParams } from "react-router-dom"
import VendorHeader from './vendorDetials'
import { Button } from "@/components/ui/button"
import SpecialButton from "./CustomButton"
import { DataTableForPo } from "./DataTable"
import CircleGauge from "@/components/ui/CircleGuage"
import changeRequest from "@/assets/Delivery and online parcel tracking.svg"
import { GuageComponetForPo } from "./GuageComponentForPo"
import ShipDate from "@/assets/ship_dates.svg"
import ShippingDates from "./ShippingDates"
import ShippingMode from "./ShippingMode"
export default function Home() {
    const { theme } = useTheme()
    const { id } = useParams()

    return (
        <DashboardLayout headerName={`Shipping Details PO#${id} Overview`}>
            {/* Today's Status Section Placeholder */}
            <section className="mb-8">
                <StatusDashboard />
            </section>

            <section className="mb-8">
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
                />
            </section>


            <section className="mb-8">
                <DocumentHeader
                    Icon={<img src={Building} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                    title="SKU Change Request"
                    subtitle="SKU units are derived from the uploaded PO"
                    showSeeMore={false}
                    onSeeMoreClick={() => console.log('See More clicked')}
                />
                <DataTableForPo />
            </section>





            <section className="mb-8">

                <DataTableForPo showDetailedPackingList={true} />
            </section>
            <section className="mb-8">
                <DocumentHeader
                    Icon={<img src={ShipDate} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                    title="Ship Dates"
                    subtitle="Shipping ad cargo results"
                    showSeeMore={false}
                    onSeeMoreClick={() => console.log('See More clicked')}
                />
                <ShippingDates
                    poShipDate="4 Mar 25"
                    cargoReadyDate="26 Feb 25"
                />

            </section>
            <section className="mb-8">
                <DocumentHeader
                    Icon={<img src={Building} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                    title="Ship Modes"
                    subtitle="Ship mode as approved"
                    showSeeMore={false}
                    onSeeMoreClick={() => console.log('See More clicked')}
                />
                <ShippingMode
                    poShipDate="4 Mar 25"
                    cargoReadyDate="26 Feb 25"
                />
            </section>

            <section className="mb-8" >
                <div className="w-full  mx-auto p-4" style={{ background: theme.colors.thertiary, borderRadius: "15px", }}>
                    <DocumentHeader
                        Icon={<img src={Document} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                        title="Documentation Overview"
                        subtitle="Documents uploaded in the portal"

                        onSeeMoreClick={() => console.log('See More clicked')}
                    />
                    <div className="w-full p-5" style={{}}>
                        <DocumentList
                            showIcons
                            documentName="Commercial Invoices"
                            // submittedDate="19 Feb 2025"
                            // count={94}
                            onDownload={() => console.log("Download clicked")}
                            onView={() => console.log("View clicked")}
                        />
                        <DocumentList
                            showIcons
                            documentName="Commercial Invoices"
                            // submittedDate="19 Feb 2025"
                            // count={94}
                            onDownload={() => console.log("Download clicked")}
                            onView={() => console.log("View clicked")}
                        />
                        <DocumentList
                            showIcons
                            documentName="Commercial Invoices"
                            // submittedDate="19 Feb 2025"
                            // count={94}
                            onDownload={() => console.log("Download clicked")}
                            onView={() => console.log("View clicked")}
                        />
                    </div>
                </div>

            </section>

        </DashboardLayout>
    )
}

