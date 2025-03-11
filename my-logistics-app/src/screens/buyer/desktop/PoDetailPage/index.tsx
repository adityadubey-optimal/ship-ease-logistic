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
import DocumentListPro from '@/components/ui/documentListNew'
export default function Home() {
    const { theme } = useTheme()
    const { id } = useParams()

    return (
        <DashboardLayout headerName={`PO#${id} Overview`}>
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

            <section className="mb-8 flex" style={{ justifyContent: 'center' }}>
                <div>
                    <SpecialButton />
                </div>
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



            <section className="mb-8 mt-8">
                <DocumentHeader
                    Icon={<img src={changeRequest} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                    title="Ship-by-date Change Request"
                    subtitle="Approve or reject the requested ship mode"
                    showSeeMore={false}
                    onSeeMoreClick={() => console.log('See More clicked')}
                />
                <div >
                    <GuageComponetForPo />
                </div>
            </section>

            <section className="mb-8">
                <DocumentHeader
                    Icon={<img src={Building} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                    title="Ship Mode Change Request"
                    subtitle="Approve or reject the requested Ship-by-Date"
                    showSeeMore={false}
                    onSeeMoreClick={() => console.log('See More clicked')}
                />
                <DataTableForPo />
            </section>

            <section className="mb-8" >
                <div className="w-full max-w-7xl mx-auto p-4" style={{ borderRadius: "12px" }}>
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
                        showIcons={false}
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
        </DashboardLayout >
    )
}

