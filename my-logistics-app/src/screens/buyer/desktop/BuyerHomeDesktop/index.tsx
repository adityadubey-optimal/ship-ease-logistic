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
export default function Home() {
    const { theme } = useTheme()
    const navigate = useNavigate()

    return (
        <DashboardLayout headerName={'Vendors Ship-By-Date Overview'}>
            {/* Today's Status Section Placeholder */}
            <section className="mb-8">
                <StatusDashboard />
            </section>

            {/* Metrics Section Placeholder */}
            <section className="mb-8">
                <PoBookingCard />

            </section>

            {/* Tasks Section Placeholder */}
            <section className="mb-8">

                <StatusCardContainer />
            </section>

            {/* Task Card Section Placeholder */}
            <section className="mb-8" >
                <div className="w-full max-w-7xl mx-auto p-4" style={{ background: theme.colors.thertiary }}>
                    <DocumentHeader
                        Icon={<img src={UrgentTask} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                        title="Urgent Tasks"
                        subtitle="Actions these PO's to avoid any delays to the shipment    "
                        showSeeMore
                        onSeeMoreClick={() => console.log('See More clicked')}
                    />
                    <div className="app" style={{ width: '100%', margin: "0 auto", padding: "20px" }}>

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

            <section className="mb-8" >
                <div className="w-full max-w-7xl mx-auto p-4" style={{ background: theme.colors.thertiary }}>
                    <DocumentHeader
                        Icon={<img src={Document} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                        title="Documentation Overview"
                        subtitle="Documents uploaded in the portal"
                        showSeeMore
                        onSeeMoreClick={() => console.log('See More clicked')}
                    />
                    <div className="w-full p-5" style={{}}>
                        <DocumentList
                            documentName="Commercial Invoices"
                            // submittedDate="19 Feb 2025"
                            count={94}
                        // onDownload={() => console.log("Download clicked")}
                        // onView={() => console.log("View clicked")}
                        />
                        <DocumentList
                            documentName="Commercial Invoices"
                            // submittedDate="19 Feb 2025"
                            count={94}
                        // onDownload={() => console.log("Download clicked")}
                        // onView={() => console.log("View clicked")}
                        />
                        <DocumentList
                            documentName="Commercial Invoices"
                            // submittedDate="19 Feb 2025"
                            count={94}
                        // onDownload={() => console.log("Download clicked")}
                        // onView={() => console.log("View clicked")}
                        />
                    </div>
                </div>

            </section>


            <section className="mb-8" >
                <div className="w-full max-w-7xl mx-auto p-4" style={{ background: theme.colors.thertiary }}>
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

