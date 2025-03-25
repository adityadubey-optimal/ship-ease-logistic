import DashboardLayout from "@/components/mobile/layout"
import StatusDashboard from '@/components/mobile/statusDashboardMobile'
import PoBookingCard from '@/components/desktop/PoBookingCard'
import StatusCardContainer from '@/components/desktop/statusCardContainer'
import UrgentTask from "@assets/urgentTask.svg";
import Document from "@assets/document.svg";
import { useTheme } from "@/context/ThemeContext"
import NotificationCard from "@/components/desktop/NotificationCardDesktop"
import Slider from "@/components/ui/slider"
import { DocumentList } from "@/components/ui/documentList"
import ProgressChart from "@/components/ui/progressChart"
import DataChartMobile from "@/components/mobile/DataChartMobile"

import DataChart from "@/components/desktop/dataChart"
import { useNavigate } from "react-router-dom"
import DocumentListPro from '@/components/ui/documentListNew'
import WorldMap from "@/components/ui/MapComponent"
import Vector from "@/assets/Vector.svg"
import Hazard from "@/assets/fluent_approvals-app-24-filled.svg"
import checkbox from "@/assets/ic_twotone-pending-actions.svg"
import DocumentHeader from "@/components/mobile/sectionHeaderMobile"
import Building from "@assets/boxes_with_labels.svg"
import styled from "styled-components"



export default function Home() {
    const { theme } = useTheme()
    const navigate = useNavigate()

    const ShippingDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  flex-grow: 1;
justify-content : space-around;

 
`

    const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.75rem 0.3rem;
  border: 1px solid #2563eb;
  border-radius: 0.75rem;
text-align : center;



`

    const Label = styled.span<{ $fontSize?: string; $fontWeight?: string }>`
  color: #666;
  font-size: ${(props) => props.$fontSize || "0.875rem"};
  font-weight: ${(props) => props.$fontWeight || "400"};
  margin-bottom: 0.25rem;
`

    const Value = styled.span<{ $fontSize?: string; $fontWeight?: string }>`
  color: #333;
  font-size: ${(props) => props.$fontSize || "1rem"};
  font-weight: ${(props) => props.$fontWeight || "600"};
`
    const fontSize = {
        label: "0.575rem",
        value: "0.8rem",
        title: "0.8rem",
        titleValeu: '0.8rem'
    }
    const fontWeight = {
        label: "400",
        value: "600",
        title: "400",
        titleValeu: '500'
    }

    interface Vendor {
        id?: string
        country?: string
        vendor?: string
        lat?: number
        lng?: number
        category?: "red" | "yellow" | "orange"
    }

    const vendors: Vendor[] = [
        {
            id: "1",
            country: "China",
            vendor: "Wuxi",
            lat: 31.57,
            lng: 120.3,
            category: "red",
        },
        {
            id: "2",
            country: "India",
            vendor: "Mumbai",
            lat: 19.07,
            lng: 72.87,
            category: "yellow",
        },
        {
            id: "3",
            country: "USA",
            vendor: "New York",
            lat: 40.71,
            lng: -74.01,
            category: "orange",
        },
    ]
    return (
        <DashboardLayout subtitle="Control Tower Overview">
            {/* Today's Status Section Placeholder */}
            <section className="mb-1 p-4" style={{ paddingBottom: '0px' }}>
                <StatusDashboard showAddPoButton={false} />
            </section>

            {/* Metrics Section Placeholder */}
            <section className="mb-1 p-4" style={{ paddingBottom: '6rem' }}>
                <WorldMap vendors={vendors} height="400px" />

            </section>



            <section className="mb-2">
                <div className="w-full max-w-7xl mx-auto "  >
                    <div className=" p-4">
                        <DocumentHeader
                            Icon={<img src={Vector} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                            title="Ship-By-Date Urgent Booking"
                            subtitle="POs which should have cargo booked immediately"
                            showSeeMore={false}
                            onSeeMoreClick={() => console.log('See More clicked')}
                            headerTextStyle={{ color: theme.colors.redHeaderText }}
                            colorTheme={theme.colors.redHeaderText}
                        />
                    </div>
                    <div style={{ background: theme.colors.secondary, borderRadius: '25px', paddingTop: "1.5rem", marginTop: '1rem' }}>
                        <DataChart height="400px" actionFlag={"ship_by_date_booking"} showDownloadButton />

                    </div>

                </div>


            </section>


            <section className="mb-2">
                <div className="w-full max-w-7xl mx-auto "  >
                    <div className=" p-4">
                        <DocumentHeader
                            Icon={<img src={checkbox} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                            title="Ship-By-Date Pending Booking"
                            subtitle="POs to book cargo"
                            showSeeMore={false}
                            onSeeMoreClick={() => console.log('See More clicked')}
                            headerTextStyle={{ color: theme.colors.yellowHeaderText }}
                            subTitleTextStyle={{}}
                            colorTheme={theme.colors.yellowHeaderText}
                        />
                    </div>
                    <div style={{ background: theme.colors.secondary, borderRadius: '25px', paddingTop: "1.5rem", marginTop: '1rem' }}>
                        <DataChart height="400px" actionFlag={"ship_by_date_booking"} showDownloadButton />

                    </div>

                </div>


            </section>

            <section className="mb-2">
                <div className="w-full max-w-7xl mx-auto"  >
                    <div style={{ marginBottom: '0.75rem' }}>
                        <DocumentHeader
                            Icon={<img />}
                            title="Cargo Ready Overview 24 Mar 25"
                            subtitle="Cargo Ready Booking Overview for Ship-by-Date 24 Mar 25"
                            showSeeMore={false}
                            onSeeMoreClick={() => console.log('See More clicked')}

                        />
                    </div>
                    <div style={{ borderRadius: '25px' }}>

                        <StatusCardContainer cards={[
                            {
                                value: 16,
                                status: "success" as const,
                                title: "Total vendors",
                                subtitle: "",
                                width: "180px",
                            },
                            {
                                value: 4,
                                status: "warning" as const,
                                title: "Pending",
                                subtitle: "",
                                width: "180px",
                            },
                            {
                                value: 0,
                                status: "error" as const,
                                title: "Total Urgent",
                                subtitle: "",
                                additionalInfo: "Congratulations, No Urgent tasks for today",
                                widthError: "320px",
                            }
                        ]} />
                        <div style={{ marginBottom: '0.75rem' }}>

                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', fontSize: '1.05rem', fontWeight: '600', lineHeight: '1.25rem' }}>
                                <span>Cargo Ready Bookings</span>
                                <span>vs Capacity</span>
                            </div>
                            <ShippingDetails>
                                <InfoBox style={{ padding: '0.7rem 0.5rem', textAlign: 'center' }}>
                                    <Label $fontSize={fontSize.label} $fontWeight={fontWeight.label}>
                                        Country Of Origin
                                    </Label>
                                    <Value $fontSize={fontSize.value} $fontWeight={fontWeight.value}>
                                        China
                                    </Value>
                                </InfoBox>
                            </ShippingDetails>
                        </div>

                        <DataChartMobile />

                    </div>

                </div>

            </section>

        </DashboardLayout>
    )
}

