import DashboardLayout from "@/components/mobile/layout"
import StatusDashboard from '@/components/mobile/statusDashboardMobile'
import PoBookingCard from '@/components/mobile/PoBookingCardMobile'
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
import { useParams } from "react-router-dom"
import VendorHeader from '../../../../components/mobile/VendorDetails'
import SpecialButton from "./CustomButton"
import inProgress from '@/assets/In Progress.svg'
import { DataTableForPo } from './DataTable'
import changeRequest from "@/assets/Delivery and online parcel tracking.svg"
import { GuageComponetForPo } from "./GuageComponentForPo"
import Building from "@assets/boxes_with_labels.svg"
import DataTableForPo2 from './DataTableForPo2'
import DocumentListPro from '@/components/ui/documentListNew'

export default function Home() {
    const { theme } = useTheme()
    const { id } = useParams()

    return (
        <DashboardLayout subtitle={`PO#${id} Overview`}>
            {/* Today's Status Section Placeholder */}
            <section className="mb-1 p-4" style={{ paddingBottom: '0px' }}>
                <StatusDashboard />
            </section>

            <section className="mb-1 p-4">
                <VendorHeader
                    vendor="Vendor Name"
                    brand="Rubi"
                    shipByDate="4 Mar 25"
                    cargoReadyDate="26 Feb 25"
                    portOfLoading="CN-SHA"
                    destination="AU-MEL"

                />
            </section>

            <section className="mb-1 p-4" style={{ padding: '0rem 1rem 3rem' }}>
                <SpecialButton />
            </section>
            <section className="mb-1" style={{ background: theme.colors.thertiary, borderRadius: '30px', position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'center', height: '30px' }}>
                    <Button
                        variant="primary"
                        size="desktop"
                        style={{
                            backgroundColor: "#FFE5E5",
                            color: "#1E1E1E",
                            borderRadius: "15px",
                            boxShadow: "0px 10px 15px 5px rgba(0, 0, 0, 0.15)",
                            padding: "8px 24px",
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            fontSize: "0.8rem",
                            fontWeight: "600",
                            transform: "translate(0px, -70%)",
                            height: '50px'

                        }}

                        onClick={() => {
                            console.log('on Action click')
                        }}
                    >
                        {/* Icon placeholder - replace with your SVG */}
                        <div style={{ width: `2.5rem`, height: `2.5rem`, position: "relative" }}><img src={inProgress} style={{ height: '100%', width: '100%' }} /></div>
                        {`Action Required: Approve Quantity Variation`}
                    </Button>
                </div>
                <DocumentHeader
                    Icon={<img src={Building} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                    title="SKU Change Request"
                    subtitle="SKU units are derived from the uploaded PO"
                    showSeeMore={false}
                    onSeeMoreClick={() => console.log('See More clicked')}
                    containerStyle={{
                        padding: '0.5rem 1rem 2rem 1rem',

                    }}
                />
                <DataTableForPo />
            </section>
            <section style={{ height: '50px' }} />

            <section className="mb-1" style={{ borderRadius: '30px', position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'center', height: '30px' }}>
                    <Button
                        variant="primary"
                        size="desktop"
                        style={{
                            backgroundColor: "#FFE5E5",
                            color: "#1E1E1E",
                            borderRadius: "15px",
                            boxShadow: "0px 10px 15px 5px rgba(0, 0, 0, 0.15)",
                            padding: "8px 24px",
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            fontSize: "0.8rem",
                            fontWeight: "600",
                            transform: "translate(0px, -70%)",
                            height: '50px'

                        }}

                        onClick={() => {
                            console.log('on Action click')
                        }}
                    >
                        {/* Icon placeholder - replace with your SVG */}
                        <div style={{ width: `2.5rem`, height: `2.5rem`, position: "relative" }}><img src={inProgress} style={{ height: '100%', width: '100%' }} /></div>
                        {`Action Required: Approve Quantity Variation`}
                    </Button>
                </div>
                <DocumentHeader
                    Icon={<img src={changeRequest} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                    title="Ship-by-date Change Request"
                    subtitle="Approve or reject the requested ship mode"
                    showSeeMore={false}
                    onSeeMoreClick={() => console.log('See More clicked')}
                    containerStyle={{
                        padding: '0.5rem 1rem 2rem 1rem',

                    }}
                />
                <GuageComponetForPo />
            </section>

            <section style={{ height: '50px' }} />

            <section className="mb-1" style={{ borderRadius: '30px', position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'center', height: '30px' }}>
                    <Button
                        variant="primary"
                        size="desktop"
                        style={{
                            backgroundColor: "#FFE5E5",
                            color: "#1E1E1E",
                            borderRadius: "15px",
                            boxShadow: "0px 10px 15px 5px rgba(0, 0, 0, 0.15)",
                            padding: "8px 24px",
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            fontSize: "0.8rem",
                            fontWeight: "600",
                            transform: "translate(0px, -70%)",
                            height: '50px'

                        }}

                        onClick={() => {
                            console.log('on Action click')
                        }}
                    >
                        {/* Icon placeholder - replace with your SVG */}
                        <div style={{ width: `2.5rem`, height: `2.5rem`, position: "relative" }}><img src={inProgress} style={{ height: '100%', width: '100%' }} /></div>
                        {`Action Required: Approve Quantity Variation`}
                    </Button>
                </div>
                <DocumentHeader
                    Icon={<img src={Building} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                    title="Ship Mode Change Request"
                    subtitle="Approve or reject the requested Ship-by-Date"
                    showSeeMore={false}
                    onSeeMoreClick={() => console.log('See More clicked')}
                    containerStyle={{
                        padding: '0.5rem 1rem 2rem 1rem',

                    }}
                />
                <DataTableForPo2 />

            </section>
            <section className="mb-1 p-4" >
                <div className="w-full max-w-7xl mx-auto p-2" >
                    <DocumentHeader
                        Icon={<img src={Document} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                        title="Documentation Overview"
                        subtitle="Documents uploaded in the portal"
                        showSeeMore={false}
                        showSeeMoreIcon
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
                        showSubmittedText={true}
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
                                    mobile: "0.65rem",
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

