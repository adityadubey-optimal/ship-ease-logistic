import { Button } from "@/components/ui/button"
import { Calendar, Edit2, Plus, CirclePlus } from "lucide-react"
import { useTheme } from "../../context/ThemeContext" // Adjust the import path as needed
import Ship from '@assets/Ship.svg';
import CalendarIcon from '@assets/Calendar.svg';
// import shipIcon from "../assets/ship-icon.png" // Make sure this path is correct

export default function StatusDashboard() {
    const { theme } = useTheme()
    return (
        <div className="w-full max-w-7xl mx-auto p-4" style={{ background: 'transparent' }}>
            {/* Header Section */}
            <div className="flex justify-between items-center mb-6">
                <h1
                    style={{
                        color: theme.colors.textPrimary,
                        fontSize: theme.fonts.web.buyerHomePage.statusCard.headerFont.size,
                        fontWeight: theme.fonts.web.buyerHomePage.statusCard.headerFont.weight,
                    }}
                >
                    Today's Status
                </h1>
                <div>

                </div>
                <p
                    style={{
                        color: theme.colors.textSecondary,
                        fontSize: theme.fonts.web.buyerHomePage.statusCard.pageHeaderLight.size,
                        fontWeight: theme.fonts.web.buyerHomePage.statusCard.pageHeaderLight.weight,
                    }}
                >
                    You are signed in as <span style={{ color: theme.colors.textPrimary, fontWeight: theme.fonts.web.buyerHomePage.statusCard.pageHeaderFont.weight, fontSize: theme.fonts.web.buyerHomePage.statusCard.pageHeaderFont.size }}>Buyer</span>
                </p>
            </div>

            {/* Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-[350px_auto_160px] gap-4">
                {/* Ship by Date Card */}
                <div style={{ backgroundColor: theme.colors.cardBackground, borderRadius: "8px", padding: "24px" }}>
                    <div className="flex justify-between items-center">
                        <div>
                            <p
                                style={{
                                    color: theme.colors.textPrimary,
                                    fontSize: theme.fonts.web.buyerHomePage.statusCard.shipHeader.size,
                                    fontWeight: theme.fonts.web.buyerHomePage.statusCard.shipHeader.weight,
                                    marginBottom: "8px",
                                }}
                            >
                                For Ship-by-Date:
                            </p>
                            <p
                                style={{
                                    color: theme.colors.textPrimary,
                                    fontSize: theme.fonts.web.buyerHomePage.statusCard.dateFont.size,
                                    fontWeight: theme.fonts.web.buyerHomePage.statusCard.dateFont.weight,
                                }}
                            >
                                4 Mar 25
                            </p>
                        </div>
                        <Edit2 style={{ color: theme.colors.textPrimary, height: "20px", width: "20px", cursor: "pointer" }} />
                    </div>
                </div>

                {/* Days to Ship Card */}
                <div
                    style={{
                        backgroundColor: "white",
                        border: `1px solid ${theme.colors.secondary}`,
                        borderRadius: "8px",
                        maxWidth: '700px'
                    }}
                    className="flex items-center justify-between"
                >

                    <img src={Ship} alt="Ship illustration" className=" object-contain" style={{ padding: "24px", height: "120px", width: '120px' }} />
                    <p
                        style={{
                            color: theme.colors.textSecondary,
                            fontSize: theme.fonts.web.buyerHomePage.statusCard.calendarDescription.size,
                            fontWeight: theme.fonts.web.buyerHomePage.statusCard.calendarDescription.weight,
                            padding: "15px"
                        }}
                    >
                        <span style={{ color: theme.colors.textSecondary, fontWeight: theme.fonts.web.buyerHomePage.statusCard.calendarDate.weight, fontSize: theme.fonts.web.buyerHomePage.statusCard.calendarDate.size }}>14 days</span> to Ship-by-Date
                    </p>
                    <div style={{ backgroundColor: theme.colors.secondary, padding: "24px", borderRadius: "8px" }}>
                        <div className="flex items-center gap-2" style={{ position: 'relative' }}>
                            <img src={CalendarIcon} />
                            <span
                                style={{
                                    position: 'absolute',
                                    transform: 'translate(50%, 10px)',
                                    color: theme.colors.textPrimary,
                                    fontSize: theme.fonts.web.buyerHomePage.statusCard.calendarFont.size,
                                    fontWeight: theme.fonts.web.buyerHomePage.statusCard.calendarFont.weight,
                                }}
                            >
                                14
                            </span>
                        </div>
                    </div>

                </div>

                {/* Calendar and Add PO */}
                <div className="flex items-center justify-end">
                    <Button
                        className="text-white h-full w-160 p-0 rounded-lg flex flex-col items-center justify-center"
                        style={{ backgroundColor: theme.colors.primary, justifyContent: 'center', display: 'flex', flexDirection: 'column', width: '160px', height: '100%', borderRadius: theme.borderRadius.borderRadius, }}
                    >
                        <CirclePlus className="h-5 w-5" style={{ height: '25px', width: '25px' }} />
                        <span
                            style={{
                                fontSize: theme.fonts.web.secondaryHeading.size, fontWeight: theme.fonts.web.secondaryHeading.weight
                            }}
                        >
                            Add PO
                        </span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

