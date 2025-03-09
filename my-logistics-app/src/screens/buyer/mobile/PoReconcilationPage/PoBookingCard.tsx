


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
            <Card className="p-6 shadow-md relative">
                <div className="flex flex-col">
                    {/* Header Section */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3" style={{
                            paddingBottom: '1.5rem',
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

                    <div className="flex justify-between px-2" style={{ paddingBottom: '0.85rem', }}>

                        <span
                            style={{
                                color: theme.colors.textSecondary,
                                fontSize: bookingCardFonts.progressText.size,
                                fontWeight: bookingCardFonts.progressText.weight,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                width: '70px',
                                textAlign: 'center'
                            }}
                        >

                        </span>
                        <span
                            style={{
                                color: theme.colors.textSecondary,
                                fontSize: bookingCardFonts.progressText.size,
                                fontWeight: bookingCardFonts.progressText.weight,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                width: '70px',
                                textAlign: 'center'
                            }}
                        >
                            80
                        </span>
                        <span
                            style={{
                                color: theme.colors.textSecondary,
                                fontSize: bookingCardFonts.progressText.size,
                                fontWeight: bookingCardFonts.progressText.weight,
                                width: '70px',
                                textAlign: 'center'
                            }}
                        >
                            100
                        </span>
                    </div>

                    {/* Progress Bar Section */}
                    <div className="relative" style={{ paddingBottom: '1.5rem', }}>
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
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                width: '70px',
                                textAlign: 'center'
                            }}
                        >

                        </span>
                        <span
                            style={{
                                color: theme.colors.textSecondary,
                                fontSize: bookingCardFonts.progressText.size,
                                fontWeight: bookingCardFonts.progressText.weight,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                width: '70px',
                                textAlign: 'center'
                            }}
                        >
                            Total POs in portal
                        </span>
                        <span
                            style={{
                                color: theme.colors.textSecondary,
                                fontSize: bookingCardFonts.progressText.size,
                                fontWeight: bookingCardFonts.progressText.weight,
                                width: '70px',
                                textAlign: 'center'
                            }}
                        >
                            Total POs issued
                        </span>
                    </div>
                </div>
            </Card>
        </div>
    )
}

