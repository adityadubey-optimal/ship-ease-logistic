import { Progress } from "@/components/ui/progress"
import { Card } from "@/components/ui/card"
import { useTheme } from "../../context/ThemeContext"
import CalendarIcon from '@assets/Calendar.svg';
import Ship from '@assets/Ship.svg';
import { borderRadius } from "@/theme/base"
import Medal from '@/assets/Medal.svg'
import useResponsiveSize from "@/hooks/useResponsiveSize"

export default function PoBookingCard() {
    const { theme } = useTheme()
    const progressPercentage = 60

    const SHIP_BY_DATE_CARD_WIDTH = useResponsiveSize(300, 400); // Ship-by-Date card width scales from 350px to 400px
    const DAYS_TO_SHIP_CARD_WIDTH = useResponsiveSize(400, 450);   // Days-to-Ship card width scales from 500px to 600px
    const PO_CARD_WIDTH = useResponsiveSize(160, 120);           // PO card width scales from 160px to 180px
    const CARD_HEIGHT = useResponsiveSize(80, 120);
    const DatContainerHeight = CARD_HEIGHT
    const DateContainerIconHeight = DatContainerHeight - 10

    return (
        <div className="w-full max-w-7xl mx-auto p-4">
            <Card className="p-6 shadow-md relative" style={{ paddingTop: '0px', paddingBottom: '0px', borderRadius: '10px' }}>
                <div className="flex flex-col">
                    {/* Header Section */}
                    <div className="flex items-center justify-between">
                        <div className="flex  gap-3" style={{
                            alignItems: 'baseline'
                        }}>
                            <span
                                style={{
                                    color: theme.colors.success,
                                    fontSize: theme.fonts.web.buyerHomePage.poBookingCard.poBookingPercentageFont.size,
                                    fontWeight: theme.fonts.web.buyerHomePage.poBookingCard.poBookingPercentageFont.weight,
                                }}
                            >
                                80%
                            </span>
                            <span
                                style={{
                                    color: theme.colors.textSecondary,
                                    fontSize: theme.fonts.web.buyerHomePage.poBookingCard.pobokingDescription.size,
                                    fontWeight: theme.fonts.web.buyerHomePage.poBookingCard.pobokingDescription.weight,
                                }}
                            >
                                PO's Booked for Ship-by-Date
                            </span>
                        </div>

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
                                style={{ height: `${useResponsiveSize(50, 90)}px`, width: `${useResponsiveSize(50, 90)}px` }}
                            />
                            <p
                                style={{
                                    color: theme.colors.textSecondary,
                                    fontSize: `${useResponsiveSize(1, 1.2)}rem`,
                                    fontWeight: theme.fonts.web.buyerHomePage.statusCard.calendarDescription.weight,
                                    padding: "15px",
                                }}
                            >
                                <span
                                    style={{
                                        color: theme.colors.textSecondary,
                                        fontWeight: theme.fonts.web.buyerHomePage.statusCard.calendarDate.weight,
                                        fontSize: `${useResponsiveSize(1, 1.2)}rem`,
                                    }}
                                >
                                    14 days
                                </span>{" "}
                                to Ship-by-Date
                            </p>
                            <div
                                style={{
                                    backgroundColor: theme.colors.secondary,
                                    height: `${DatContainerHeight}px`,
                                    // height: `calc(${CARD_HEIGHT}- 10)px`,
                                    width: `calc(${CARD_HEIGHT}- 10)px`,
                                    // padding: "24px",
                                    borderRadius: "8px",
                                    position: "relative",
                                    display: 'flex',
                                    alignItems: 'center',

                                    // height: '500px'
                                }}
                            >
                                <img src={CalendarIcon} alt="Calendar Icon" style={{
                                    height: `${DateContainerIconHeight}px`,
                                    // height: `calc(${CARD_HEIGHT}- 15)px`,
                                    width: `calc(${CARD_HEIGHT}- 15)px`,
                                }} />
                                <span
                                    style={{
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        color: theme.colors.textPrimary,
                                        fontSize: '30px',
                                        fontWeight: theme.fonts.web.buyerHomePage.statusCard.calendarFont.weight,
                                    }}
                                >
                                    14
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Progress Bar Section */}
                    <div className="relative">
                        <Progress
                            value={progressPercentage}
                            className="h-5"
                            style={{
                                backgroundColor: theme.colors.secondary,
                            }}
                            indicatorClassName={`bg-[${theme.colors.primary}]`}
                            progressBarStyle={{
                                backgroundColor: theme.colors.primary, borderRadius: theme.borderRadius.borderRadius
                            }}
                        />

                    </div>

                    {/* Days Indicators */}
                    <div className="flex justify-between px-2">
                        <span
                            style={{
                                color: theme.colors.textSecondary,
                                fontSize: theme.fonts.web.buyerHomePage.poBookingCard.daysFont.size,
                                fontWeight: theme.fonts.web.buyerHomePage.poBookingCard.daysFont.weight,
                            }}
                        >
                            -21 days
                        </span>
                        <span
                            style={{
                                color: theme.colors.textSecondary,
                                fontSize: theme.fonts.web.buyerHomePage.poBookingCard.daysFont.size,
                                fontWeight: theme.fonts.web.buyerHomePage.poBookingCard.daysFont.weight,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                lineHeight: '15px'
                            }}
                        >
                            <span className="text-lg">{"😊"}</span>
                            -14 Days
                        </span>
                        <span
                            style={{
                                color: theme.colors.textSecondary,
                                fontSize: theme.fonts.web.buyerHomePage.poBookingCard.daysFont.size,
                                fontWeight: theme.fonts.web.buyerHomePage.poBookingCard.daysFont.weight,
                            }}
                        >
                            -10 Days
                        </span>
                    </div>
                </div>
            </Card>
        </div>
    )
}

