import DashboardLayout from "@/components/desktop/Layout"
import StatusDashboard from '@/components/desktop/StatusDashboard'
import PoBookingCard from '@/components/desktop/PoBookingCard'
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
import CancelledPoList from "./CancelledPoList"
import { useNavigate } from "react-router-dom"
import DocumentListPro from '@/components/ui/documentListNew'
export default function Home() {
    const { theme } = useTheme()
    const navigate = useNavigate()

    return (
        <DashboardLayout headerName={'Vendors Ship-By-Date Overview'}>
            {/* Today's Status Section Placeholder */}
            <section className="mb-2">
                <StatusDashboard />
            </section>

            {/* Metrics Section Placeholder */}
            <section className="mb-2">
                <PoBookingCard />

            </section>

            {/* Tasks Section Placeholder */}
            <section className="mb-2">

                <StatusCardContainer />
            </section>

            {/* Task Card Section Placeholder */}
            <section className="mb-8"  >
                <div className="w-full max-w-7xl mx-auto p-4" style={{ background: theme.colors.thertiary, borderRadius: '15px', padding: '0rem 1rem 0rem 1rem' }}>
                    <DocumentHeader
                        Icon={<img src={UrgentTask} alt="Ship illustration" style={{ height: '6rem', width: '6rem' }} className="w-13 h-13 object-contain" />}
                        title="Urgent Tasks"
                        subtitle="Actions these PO's to avoid any delays to the shipment    "
                        showSeeMore
                        onSeeMoreClick={() => {
                            navigate('/buyer/urgentTask')
                            console.log('See More clicked')
                        }}

                    />
                    <div className="app" style={{ width: '100%', margin: "0 auto", padding: "0rem 1rem 1rem 1rem" }}>

                        <Slider>
                            <NotificationCard
                                poNumber="137284638746"
                                shipByDate="04 Mar 25"
                                fromLocation="China CN-SHA"
                                toLocation="Australia AU"
                                actionRequired="Approve ship date"
                                requestFrom="Vendor"
                                urgent={true}
                                onGoToPO={() => {
                                    console.log('clicked')
                                    navigate('/buyer/poDetails/12435')
                                }}
                            />
                            <NotificationCard
                                poNumber="137284638746"
                                shipByDate="04 Mar 25"
                                fromLocation="China CN-SHA"
                                toLocation="Australia AU"
                                actionRequired="Approve ship date"
                                requestFrom="Vendor"
                                urgent={true}
                                onGoToPO={() => {
                                    console.log('clicked')
                                    navigate('/buyer/poDetails/12435')
                                }}
                            />
                            <NotificationCard
                                poNumber="137284638746"
                                shipByDate="04 Mar 25"
                                fromLocation="China CN-SHA"
                                toLocation="Australia AU"
                                actionRequired="Approve ship date"
                                requestFrom="Vendor"
                                urgent={true}
                                onGoToPO={() => {
                                    console.log('clicked')
                                    navigate('/buyer/poDetails/12435')
                                }}
                            />
                            <NotificationCard
                                poNumber="137284638746"
                                shipByDate="04 Mar 25"
                                fromLocation="China CN-SHA"
                                toLocation="Australia AU"
                                actionRequired="Approve ship date"
                                requestFrom="Vendor"
                                urgent={true}
                                onGoToPO={() => {
                                    console.log('clicked')
                                    navigate('/buyer/poDetails/12435')
                                }}
                            />

                            <NotificationCard
                                poNumber="137284638746"
                                shipByDate="04 Mar 25"
                                fromLocation="China CN-SHA"
                                toLocation="Australia AU"
                                actionRequired="Approve ship date"
                                requestFrom="Vendor"
                                urgent={true}
                                onGoToPO={() => {
                                    console.log('clicked')
                                    navigate('/buyer/poDetails/12435')
                                }}
                            />



                        </Slider>
                    </div>
                </div>

            </section>
            {/*Documetn overview section */}

            <section className="mb-8">
                <div className="w-full max-w-7xl mx-auto p-4" >
                    <DocumentHeader
                        Icon={<img src={Document} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                        title="Documentation Overview"
                        subtitle="Documents uploaded in the portal"
                        showSeeMore
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


            <section className="mb-8" >
                <div className="w-full max-w-7xl mx-auto p-4" >
                    <DocumentHeader
                        Icon={<img src={Document} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                        title="Canceleed//declined POs"
                        subtitle="PO's declined by vendor"
                        showSeeMore={false}
                        onSeeMoreClick={() => console.log('See More clicked')}
                    />
                    <CancelledPoList />

                </div>

            </section>


            <DataChart />
        </DashboardLayout>
    )
}

