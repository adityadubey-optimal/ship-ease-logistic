import { Progress } from "@/components/ui/progress"
import { Card } from "@/components/ui/card"
import { useTheme } from "@/context/ThemeContext"
import { borderRadius, getResponsiveSize } from "@/theme/base"
import Medal from '@/assets/Medal.svg'

export default function PoBookingCard() {
    const { theme } = useTheme()
    const progressPercentage = 60

    return (
        <div className="w-full max-w-7xl mx-auto p-4" style={{ paddingBottom: '0px' }}>
            <Card className="p-6 shadow-md relative">
                <div className="flex flex-col gap-2">
                    {/* Header Section */}
                    <div className="flex items-center justify-between">
                        <div>

                            <div className="flex  gap-3" style={{
                                alignItems: 'baseline'
                            }}>
                                <span
                                    style={{
                                        color: theme.colors.success,
                                        fontSize: `${getResponsiveSize(1.85, 2.05)}rem`,
                                        fontWeight: theme.fonts.web.buyerHomePage.poBookingCard.poBookingPercentageFont.weight,
                                    }}
                                >
                                    100%
                                </span>
                                <span
                                    style={{
                                        color: theme.colors.textSecondary,
                                        fontSize: `${getResponsiveSize(1.35, 1.55)}rem`,
                                        fontWeight: theme.fonts.web.buyerHomePage.poBookingCard.pobokingDescription.weight,
                                    }}
                                >
                                    PO's Booked by Ship-by-Date
                                </span>
                            </div>
                        </div>
                        <div
                            className="flex items-center gap-2 px-4 py-2 rounded-lg"
                            style={{ backgroundColor: theme.colors.thertiary }}
                        >
                            <img src={Medal} />
                            <span
                                style={{

                                    color: theme.colors.textSecondary,
                                    fontSize: theme.fonts.web.buyerHomePage.poBookingCard.statusMessage.size,
                                    fontWeight: theme.fonts.web.buyerHomePage.poBookingCard.statusMessage.weight,
                                }}
                            >
                                Congratulations! Last 20 PO's booked on-time
                            </span>
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
                                width: '80px',
                                textAlign: 'center',
                            }}
                        >
                            -21 Days
                        </span>
                        <span
                            style={{
                                color: theme.colors.textSecondary,
                                fontSize: theme.fonts.web.buyerHomePage.poBookingCard.daysFont.size,
                                fontWeight: theme.fonts.web.buyerHomePage.poBookingCard.daysFont.weight,
                                width: '80px',
                                textAlign: 'center',
                            }}
                        >
                            -14 Days
                        </span>
                        <span
                            style={{
                                color: theme.colors.textSecondary,
                                fontSize: theme.fonts.web.buyerHomePage.poBookingCard.daysFont.size,
                                fontWeight: theme.fonts.web.buyerHomePage.poBookingCard.daysFont.weight,
                                width: '80px',
                                textAlign: 'center',
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

