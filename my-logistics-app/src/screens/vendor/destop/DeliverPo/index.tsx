import DashboardLayout from "@/components/desktop/Layout"
import StatusDashboard from '@/components/desktop/StatusDashboard'
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
import { useNavigate } from "react-router-dom"
import DocumentListPro from '@/components/ui/documentListNew'
import VendorOptions from '@/components/desktop/vendorOptions'
import PoBookingCard from './PoBookingCard'
import ExampleScrollableTable from '@/components/desktop/DataChartForShipper'


export default function Home() {
    const { theme } = useTheme()
    const navigate = useNavigate()

    return (
        <DashboardLayout headerName={'Bookings Good To-Go'} >
            {/* Today's Status Section Placeholder */}
            < section className="mb-0" style={{ paddingBottom: "0px" }} >
                <StatusDashboard showAddPoButton={false} loggedInAstext="Vendor" />
            </section>

            {/* Metrics Section Placeholder */}
            <section className="mb-8" style={{ paddingBottom: "0px" }} >
                <div className="w-full max-w-7xl mx-auto p-4" style={{ paddingBottom: '0px' }}>
                    <VendorOptions defaultSelectedIndex={2} />
                </div>
            </section>

            <section className="mb-0">
                <PoBookingCard />

            </section>


            {/* Tasks Section Placeholder */}
            <section className="mb-2" >

                <StatusCardContainer cards={[
                    {
                        value: 0,
                        status: "success" as const,
                        title: "Good To-go",
                        subtitle: "Shipments",
                        width: "300px",
                    },
                    {
                        value: 20,
                        status: "warning" as const,
                        title: "Pending",
                        subtitle: "Shipments",
                        width: "300px",
                    },
                    {
                        value: 0,
                        status: "error" as const,
                        title: "Urgent",
                        subtitle: "Shipments",
                        additionalInfo: "20 PO's at risk Need Action",
                        widthError: "520px",
                    },
                ]} />
            </section>

            <section className="mb-2">
                <div className="w-full max-w-7xl mx-auto p-4"  >
                    <DocumentHeader
                        Icon={<img src={Document} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                        title="POs booked for cargo ready date:"

                        date="26 Feb 25"
                        subtitle="Select Purchase Order to Print or Amend SSCC Labels"
                        showSeeMore={false}
                        onSeeMoreClick={() => console.log('See More clicked')}
                        headerTextStyle={{ color: theme.colors.yellowHeaderText }}
                        colorTheme={theme.colors.yellowHeaderText}
                    />
                    <div style={{ background: theme.colors.secondary, borderRadius: '25px' }}>
                        <ExampleScrollableTable showDocuments={true} showDocumentsSubcolumns={true}

                        />


                    </div>

                </div>

            </section>

            <section className="mb-2">
                <div className="w-full max-w-7xl mx-auto p-4"  >
                    <DocumentHeader
                        Icon={<img src={Document} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                        title="POs booked for cargo ready date:"
                        date="26 Feb 25"
                        subtitle="Select Purchase Order to Print or Amend SSCC Labels"
                        showSeeMore={false}
                        onSeeMoreClick={() => console.log('See More clicked')}
                        headerTextStyle={{ color: theme.colors.yellowHeaderText }}
                        colorTheme={theme.colors.yellowHeaderText}
                    />
                    <div style={{ background: theme.colors.secondary, borderRadius: '25px' }}>
                        <ExampleScrollableTable showDocuments={true} showDocumentsSubcolumns={true}

                        />


                    </div>

                </div>

            </section>

        </DashboardLayout>
    )
}

