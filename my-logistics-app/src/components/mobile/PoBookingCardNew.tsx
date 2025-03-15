


"use client"

import { Progress } from "@/components/ui/progress"
import { Card } from "@/components/ui/card"
import { useTheme } from "@/context/ThemeContext"
import Medal from '@/assets/Medal.svg'
import { Weight } from "lucide-react"

export default function PoBookingCard() {
    const { theme } = useTheme()
    const progressPercentage = 60

    // Define variables for font sizes and weights for the card
    const bookingCardFonts = {
        heading: {
            size: theme.fonts.mobile.buyerHomePage.poBookingCard.poBookingPercentageFont.size,
            weight: theme.fonts.mobile.buyerHomePage.poBookingCard.poBookingPercentageFont.weight,
        },
        body: {
            size: theme.fonts.mobile.buyerHomePage.poBookingCard.pobokingDescription.size,
            weight: theme.fonts.mobile.buyerHomePage.poBookingCard.pobokingDescription.weight,
        },
        progressText: {
            size: theme.fonts.mobile.buyerHomePage.poBookingCard.statusMessage.size,
            weight: theme.fonts.mobile.buyerHomePage.poBookingCard.statusMessage.weight
        },
        daysFont: {
            size: theme.fonts.mobile.buyerHomePage.poBookingCard.daysFont.size,
            weight: theme.fonts.mobile.buyerHomePage.poBookingCard.daysFont.weight
        }
    }

    const notificationFonts = {
        size: theme.fonts.mobile.buyerHomePage.poBookingCard.statusMessage.size,
        weight: theme.fonts.mobile.buyerHomePage.poBookingCard.statusMessage.weight,
    }

    return (
        <div className="w-full max-w-7xl mx-auto" style={{ background: "transparent", paddingBottom: '0px' }}>
            <Card className="p-2 shadow-md relative">
                <div className="flex flex-col gap-6">
                    {/* Header Section */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3" style={{
                            maxWidth: '170px',
                            lineHeight: '1.2rem'
                        }}>
                            <span
                                style={{
                                    color: theme.colors.success,
                                    fontSize: bookingCardFonts.heading.size,
                                    fontWeight: bookingCardFonts.heading.weight,
                                }}
                            >
                                80%

                                <span
                                    style={{
                                        color: theme.colors.textSecondary,
                                        fontSize: bookingCardFonts.body.size,
                                        fontWeight: bookingCardFonts.body.weight,
                                    }}
                                >
                                    {" "}PO's Booked for Ship-by-Date
                                </span>
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
                                backgroundColor: theme.colors.primary,
                                borderRadius: theme.borderRadius.borderRadius,
                            }}
                        />
                    </div>

                    {/* Days Indicators */}
                    <div className="flex justify-between px-2">
                        <span
                            style={{
                                color: theme.colors.textSecondary,
                                fontSize: bookingCardFonts.progressText.size,
                                fontWeight: bookingCardFonts.progressText.weight,
                            }}
                        >
                            -21 days
                        </span>
                        <span
                            style={{
                                color: theme.colors.textSecondary,
                                fontSize: bookingCardFonts.progressText.size,
                                fontWeight: bookingCardFonts.progressText.weight,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                position: 'relative'
                            }}
                        >
                            <span className="text-lg" style={{ position: 'absolute', top: '-20px' }}>{"😊"}</span> -14 Days
                        </span>
                        <span
                            style={{
                                color: theme.colors.textSecondary,
                                fontSize: bookingCardFonts.progressText.size,
                                fontWeight: bookingCardFonts.progressText.weight,
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

