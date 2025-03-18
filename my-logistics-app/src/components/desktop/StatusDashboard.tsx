import { Button } from "@/components/ui/button"
import { Calendar, Edit2, Plus, CirclePlus } from "lucide-react"
import { useTheme } from "../../context/ThemeContext" // Adjust the import path as needed
import Ship from '@assets/Ship.svg';
import CalendarIcon from '@assets/Calendar.svg';
import useResponsiveSize from "@/hooks/useResponsiveSize";
import { useNavigate } from "react-router-dom";
// import shipIcon from "../assets/ship-icon.png" // Make sure this path is correct

export default function StatusDashboard({ ImportPoButton = false, showAddPoButton = true, showShipByDate = true, loggedInAstext = "Buyer" }: { ImportPoButton?: boolean, showAddPoButton?: boolean, showShipByDate?: boolean, loggedInAstext?: string }) {
    const { theme } = useTheme()
    const navigate = useNavigate()
    // const SHIP_BY_DATE_CARD_WIDTH = "350px";
    // const DAYS_TO_SHIP_CARD_WIDTH = "500px";
    // const PO_CARD_WIDTH = "160px";
    // const CARD_HEIGHT = "180px";

    // Responsive dimensions (in pixels)
    const SHIP_BY_DATE_CARD_WIDTH = useResponsiveSize(300, 400); // Ship-by-Date card width scales from 350px to 400px
    const DAYS_TO_SHIP_CARD_WIDTH = useResponsiveSize(500, 600);   // Days-to-Ship card width scales from 500px to 600px
    const PO_CARD_WIDTH = useResponsiveSize(160, 120);           // PO card width scales from 160px to 180px
    const CARD_HEIGHT = useResponsiveSize(80, 120);            // Card height scales from 180px to 220px
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
                    You are signed in as <span style={{ color: theme.colors.textPrimary, fontWeight: theme.fonts.web.buyerHomePage.statusCard.pageHeaderFont.weight, fontSize: theme.fonts.web.buyerHomePage.statusCard.pageHeaderFont.size }}>
                        {loggedInAstext}

                    </span>
                </p>
            </div>

            <div className="flex flex-row gap-4" style={{ flexWrap: 'wrap' }}>
                {/* Ship by Date Card */}
                <div
                    style={{
                        backgroundColor: theme.colors.cardBackground,
                        borderRadius: "8px",
                        padding: "1rem",
                        minWidth: SHIP_BY_DATE_CARD_WIDTH,
                        maxWidth: SHIP_BY_DATE_CARD_WIDTH,
                        height: `calc(${CARD_HEIGHT} - 10px)`,
                    }}
                >
                    <div className="flex justify-between items-center h-full">
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
                        <Edit2
                            style={{
                                color: theme.colors.textPrimary,
                                height: "20px",
                                width: "20px",
                                cursor: "pointer",
                            }}
                        />
                    </div>
                </div>
                {showShipByDate && (

                    <div
                        style={{
                            backgroundColor: "white",
                            border: `1px solid ${theme.colors.secondary}`,
                            borderRadius: "8px",
                            minWidth: DAYS_TO_SHIP_CARD_WIDTH,
                            maxWidth: DAYS_TO_SHIP_CARD_WIDTH,
                            height: CARD_HEIGHT,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "24px 0px 24px 24px",
                        }}
                    >
                        <img
                            src={Ship}
                            alt="Ship illustration"
                            className="object-contain"
                            style={{ height: `${useResponsiveSize(80, 110)}px`, width: `${useResponsiveSize(80, 110)}px` }}
                        />
                        <p
                            style={{
                                color: theme.colors.textSecondary,
                                fontSize: theme.fonts.web.buyerHomePage.statusCard.calendarDescription.size,
                                fontWeight: theme.fonts.web.buyerHomePage.statusCard.calendarDescription.weight,
                                padding: "15px",
                            }}
                        >
                            <span
                                style={{
                                    color: theme.colors.textSecondary,
                                    fontWeight: theme.fonts.web.buyerHomePage.statusCard.calendarDate.weight,
                                    fontSize: theme.fonts.web.buyerHomePage.statusCard.calendarDate.size,
                                }}
                            >
                                14 days
                            </span>{" "}
                            to Ship-by-Date
                        </p>
                        <div
                            style={{
                                backgroundColor: theme.colors.secondary,
                                height: `calc(${CARD_HEIGHT}- 0px)`,
                                width: `calc(${CARD_HEIGHT}- 10px)`,
                                // padding: "24px",
                                borderRadius: "8px",
                                position: "relative",
                            }}
                        >
                            <img src={CalendarIcon} alt="Calendar Icon" style={{
                                height: `calc(${CARD_HEIGHT}- 15px)`,
                                width: `calc(${CARD_HEIGHT}- 15px)`,
                            }} />
                            <span
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    color: theme.colors.textPrimary,
                                    fontSize: theme.fonts.web.buyerHomePage.statusCard.calendarFont.size,
                                    fontWeight: theme.fonts.web.buyerHomePage.statusCard.calendarFont.weight,
                                }}
                            >
                                14
                            </span>
                        </div>
                    </div>)}

                {/* Calendar and Add PO Card */}
                {showAddPoButton && <div
                    style={{
                        minWidth: PO_CARD_WIDTH,
                        maxWidth: PO_CARD_WIDTH,
                        height: CARD_HEIGHT,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Button
                        className="text-white p-0 rounded-lg flex flex-col items-center justify-center"
                        style={{
                            backgroundColor: theme.colors.primary,
                            width: PO_CARD_WIDTH,
                            height: "100%",
                            borderRadius: theme.borderRadius.borderRadius,
                        }}
                        onClick={() => { !ImportPoButton ? navigate('/buyer/poReconcilation') : console.log('import PO') }}
                    >
                        <CirclePlus
                            className="h-5 w-5"
                            style={{ height: "25px", width: "25px" }}
                        />
                        <span
                            style={{
                                fontSize: theme.fonts.web.secondaryHeading.size,
                                fontWeight: theme.fonts.web.secondaryHeading.weight,
                            }}
                        >
                            {!ImportPoButton ? `Add PO` : `Import Po`}
                        </span>
                    </Button>
                </div>}
            </div>


        </div>
    )
}

