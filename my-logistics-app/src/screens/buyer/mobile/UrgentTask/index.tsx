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
export default function Home() {
    const { theme } = useTheme()


    return (
        <DashboardLayout>
            {/* Today's Status Section Placeholder */}
            <section className="mb-1 p-4" style={{ paddingBottom: '0px' }}>
                <StatusDashboard />
            </section>


            {/* Task Card Section Placeholder */}
            <section className="mb-1" >
                <div className="w-full max-w-7xl mx-auto p-2" style={{ background: theme.colors.thertiary }}>
                    <DocumentHeader
                        Icon={<img src={UrgentTask} alt="Ship illustration" className="w-20 h-20 object-contain" />}
                        title="Urgent Tasks"
                        subtitle="Actions these PO's to avoid any delays to the shipment    "
                        showSeeMore={false}
                        onSeeMoreClick={() => console.log('See More clicked')}
                    />
                    <div className="app" style={{ width: '100%', margin: "0 auto", padding: "20px" }}>


                        <NotificationCard
                            poNumber="137284638746"
                            shipByDate="04 Mar 25"
                            fromLocation="China CN-SHA"
                            toLocation="Australia AU"
                            actionRequired="Approve ship date"
                            requestFrom="Vendor"
                            urgent={true}
                            onGoToPO={() => { console.log('clicked') }}
                        />
                        <NotificationCard
                            poNumber="137284638746"
                            shipByDate="04 Mar 25"
                            fromLocation="China CN-SHA"
                            toLocation="Australia AU"
                            actionRequired="Approve ship date"
                            requestFrom="Vendor"
                            urgent={true}
                            onGoToPO={() => { console.log('clicked') }}
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


        </DashboardLayout>
    )
}

