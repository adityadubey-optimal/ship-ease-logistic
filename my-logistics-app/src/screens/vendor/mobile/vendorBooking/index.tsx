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
import { useNavigate } from "react-router-dom"
import DocumentListPro from "@/components/ui/documentListNew"
export default function Home() {
    const { theme } = useTheme()
    const navigate = useNavigate()

    return (
        <DashboardLayout>
            {/* Today's Status Section Placeholder */}
            <section className="mb-1 p-4" style={{ paddingBottom: '0px' }}>
                <StatusDashboard />
            </section>

            {/* Metrics Section Placeholder */}
            <section className="mb-1 p-4">
                <PoBookingCard />

            </section>

            {/* Tasks Section Placeholder */}
            <section className="mb-1 p-4">

                <StatusCardContainer />
            </section>

            {/* Task Card Section Placeholder */}
            <section className="mb-1" style={{ background: theme.colors.thertiary, }}>
                <div className="w-full max-w-7xl mx-auto p-4" >
                    <DocumentHeader
                        Icon={<img src={UrgentTask} alt="Ship illustration" className="w-20 h-20 object-contain" />}
                        title="Urgent Tasks"
                        subtitle="Actions these PO's to avoid any delays to the shipment    "
                        showSeeMore={false}
                        onSeeMoreClick={() => {

                            navigate('/buyer/urgentTask')
                        }}
                    />
                    <div className="app" style={{ width: '100%', margin: "0 auto", padding: "0 px 20px" }}>


                        <NotificationCard
                            poNumber="137284638746"
                            shipByDate="04 Mar 25"
                            fromLocation="China CN-SHA"
                            toLocation="Australia AU"
                            actionRequired="Approve ship date"
                            requestFrom="Vendor"
                            urgent={true}
                            onGoToPO={() => { navigate('/buyer/poDetails/234324') }}
                        />
                        <NotificationCard
                            poNumber="137284638746"
                            shipByDate="04 Mar 25"
                            fromLocation="China CN-SHA"
                            toLocation="Australia AU"
                            actionRequired="Approve ship date"
                            requestFrom="Vendor"
                            urgent={true}
                            onGoToPO={() => { navigate('/buyer/poDetails/234324') }}
                        />





                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        width: '100%'
                    }}>
                        <IconButton text={"See More"} onClick={() => {
                            console.log('clicked')
                        }} size={"desktop"} ></IconButton>
                    </div>
                </div>

            </section>
            {/*Documetn overview section */}

            <section className="mb-1 p-4" >
                <div className="w-full max-w-7xl mx-auto p-2" >
                    <DocumentHeader
                        Icon={<img src={Document} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                        title="Documentation Overview"
                        subtitle="Documents uploaded in the portal"
                        showSeeMore={false}
                        showSeeMoreIcon
                        onSeeMoreClick={() => {
                            console.log('testing')
                            navigate('/buyer/documentList')
                        }}
                        onSeeMoreIconClick={() => {
                            console.log('testing')
                            navigate('/buyer/documentList')
                        }}
                        containerStyle={{ paddingBottom: '1rem' }}
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

            {/* <DataChart />

     

            <ShipDateGauge /> */}
        </DashboardLayout>
    )
}

