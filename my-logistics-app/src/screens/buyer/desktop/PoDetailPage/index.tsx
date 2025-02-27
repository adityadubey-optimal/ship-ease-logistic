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
import { useParams } from "react-router-dom"
import VendorHeader from './vendorDetials'
import { Button } from "@/components/ui/button"
import SpecialButton from "./CustomButton"
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
                    Icon={<img src={Document} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                    title="SKU Change Request"
                    subtitle="SKU units are derived from the uploaded PO"
                    showSeeMore={false}
                    onSeeMoreClick={() => console.log('See More clicked')}
                />
                <DataChart />
            </section>


        </DashboardLayout>
    )
}

