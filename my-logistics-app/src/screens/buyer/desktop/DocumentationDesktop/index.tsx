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
import { useNavigate } from 'react-router-dom'
export default function Home() {
    const { theme } = useTheme()

    const navigate = useNavigate()


    return (
        <DashboardLayout headerName="Vendors Ship-By-Date Overview">
            {/* Today's Status Section Placeholder */}
            <section className="mb-8">
                <StatusDashboard />
            </section>



            {/* Task Card Section Placeholder */}
            <section className="mb-8" >
                <div className="w-full  mx-auto p-4" style={{ background: theme.colors.thertiary }}>
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

