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
import DocumentListPro from '@/components/ui/documentListNew'
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
            <section className="mb-8 p-4" style={{ background: theme.colors.thertiary, borderRadius: '15px' }} >
                <div style={{
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    padding: '0rem 1rem'
                }}>
                    PO#1242342343
                </div>
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
                                desktop: "1.15rem",
                            },
                            date: {
                                mobile: "0.65rem",
                                desktop: "0.975rem",
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
                            container: '0rem',
                            item: '1.2rem'
                        },
                    }}
                />

            </section>

            <section className="mb-8 p-4" style={{ background: theme.colors.thertiary, borderRadius: '15px' }} >
                <div style={{
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    padding: '0rem 1rem'
                }}>
                    PO#1242342343
                </div>
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
                                desktop: "1.15rem",
                            },
                            date: {
                                mobile: "0.65rem",
                                desktop: "0.975rem",
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
                            container: '0rem',
                            item: '1.2rem'
                        },
                    }}
                />

            </section>

            <section className="mb-8 p-4" style={{ background: theme.colors.thertiary, borderRadius: '15px' }} >
                <div style={{
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    padding: '0rem 1rem'
                }}>
                    PO#1242342343
                </div>
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
                                desktop: "1.15rem",
                            },
                            date: {
                                mobile: "0.65rem",
                                desktop: "0.975rem",
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
                            container: '0rem',
                            item: '1.2rem'
                        },
                    }}
                />

            </section>



        </DashboardLayout>
    )
}

