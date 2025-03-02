import { Progress } from "@/components/ui/progress"
import { Card } from "@/components/ui/card"
import { useTheme } from "@/context/ThemeContext"
import { borderRadius } from "@/theme/base"
import Medal from '@/assets/Medal.svg'

export default function PoBookingCard() {
    const { theme } = useTheme()
    const progressPercentage = 60

    return (
        <div className="w-full max-w-7xl mx-auto p-4">
            <Card className="p-6 shadow-md relative">
                <div className="flex flex-col gap-6">
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

                        </span>
                        <span
                            style={{
                                color: theme.colors.textSecondary,
                                fontSize: theme.fonts.web.buyerHomePage.poBookingCard.daysFont.size,
                                fontWeight: theme.fonts.web.buyerHomePage.poBookingCard.daysFont.weight,
                            }}
                        >
                            Total PO's in portal
                        </span>
                        <span
                            style={{
                                color: theme.colors.textSecondary,
                                fontSize: theme.fonts.web.buyerHomePage.poBookingCard.daysFont.size,
                                fontWeight: theme.fonts.web.buyerHomePage.poBookingCard.daysFont.weight,
                            }}
                        >
                            total PO's issued
                        </span>
                    </div>
                </div>
            </Card>
        </div>
    )
}

