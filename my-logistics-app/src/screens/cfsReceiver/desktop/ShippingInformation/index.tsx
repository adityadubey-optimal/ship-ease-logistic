

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
import DataChartDesktop from "@/components/mobile/DataChartMobile"
import { useNavigate } from "react-router-dom"
import DocumentListPro from '@/components/ui/documentListNew'
import Vector from "@/assets/Vector.svg"
import Hazard from "@/assets/fluent_approvals-app-24-filled.svg"
import checkbox from "@/assets/ic_twotone-pending-actions.svg"
import Building from "@assets/boxes_with_labels.svg"
import VendorHeader from "./vendorDetials"
import ExampleScrollableTable from '@/components/desktop/DataChartForShipper'
import { DataTableForPo } from "@/components/desktop/DataTableForSkuDesktop"
import Box from "@/assets/box.svg"
import ShippingDates from "./ShippingDates"
import ShippingMode from "./ShippingMode"
import ShipDate from "@/assets/ship_dates.svg"
import DeliveryOnline from "@/assets/Delivery and online parcel tracking.svg"





export default function Home() {
    const { theme } = useTheme()
    const navigate = useNavigate()


    return (
        <DashboardLayout headerName={'Shipping Information PO#23432423'}>


            {/* Today's Status Section Placeholder */}
            <section className="mb-2">
                <StatusDashboard showAddPoButton={false} showShipByDate={false} loggedInAstext="CFS Receiver" />
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
                    showVendroBrandDetail={false}
                />
            </section>




            <section className="mb-8">
                <DocumentHeader
                    Icon={<img src={Box} alt="Ship illustration" className="w-10 h-10 object-contain" style={{ height: '3.5rem', width: '3.5rem   ' }} />}
                    title="SKU Packing List"
                    subtitle="Packing list as uploaded by the vendor"
                    showSeeMore={false}
                    onSeeMoreClick={() => console.log('See More clicked')}
                    containerStyle={{ borderRadius: '35px' }}
                />
                <DataTableForPo />
            </section>





            <section className="mb-8">

                <DataTableForPo showDetailedPackingList={true} />
            </section>

            <section className="mb-8">
                <DocumentHeader
                    Icon={<img src={ShipDate} alt="Ship illustration" className="w-10 h-10 object-contain" style={{ height: '5.5rem', width: '5.5rem' }} />}
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
                    Icon={<img src={DeliveryOnline} alt="Ship illustration" className="w-10 h-10 object-contain" style={{ height: '5.5rem', width: '5.5rem' }} />}
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
                <div className="w-full  mx-auto p-4" style={{ borderRadius: "15px" }}>
                    <DocumentHeader
                        Icon={<img src={Document} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                        title="Documentation Overview"
                        subtitle="Documents uploaded in the portal"

                        onSeeMoreClick={() => console.log('See More clicked')}
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
                        showSubmittedText={false}
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
                                    mobile: "0.75rem",
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




