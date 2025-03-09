// import { Progress } from "@/components/ui/progress"
// import { Card } from "@/components/ui/card"
// import { useTheme } from "../../context/ThemeContext"
// import { borderRadius } from "@/theme/base"

// export default function PoBookingCard() {
//     const { theme } = useTheme()
//     const progressPercentage = 60

//     return (
//         <div className="w-full max-w-7xl mx-auto p-4">
//             <Card className="p-6 shadow-md relative">
//                 <div className="flex flex-col gap-6">
//                     {/* Header Section */}
//                     <div className="flex items-center justify-between">
//                         <div className="flex items-center gap-3">
//                             <span
//                                 style={{
//                                     color: theme.colors.success,
//                                     fontSize: theme.fonts.web.heading.size,
//                                     fontWeight: theme.fonts.web.heading.weight,
//                                 }}
//                             >
//                                 80%
//                             </span>
//                             <span
//                                 style={{
//                                     color: theme.colors.textSecondary,
//                                     fontSize: theme.fonts.web.body.size,
//                                     fontWeight: theme.fonts.web.body.weight,
//                                 }}
//                             >
//                                 PO's Booked for Ship-by-Date
//                             </span>
//                         </div>
//                         <div
//                             className="flex items-center gap-2 px-4 py-2 rounded-lg"
//                             style={{ backgroundColor: theme.colors.thertiary }}
//                         >
//                             <span className="text-lg">{"🎯"}</span>
//                             <span
//                                 style={{
//                                     color: theme.colors.textPrimary,
//                                     fontSize: theme.fonts.web.notification.size,
//                                     fontWeight: theme.fonts.web.notification.weight,
//                                 }}
//                             >
//                                 Good Going
//                             </span>
//                         </div>
//                     </div>

//                     {/* Progress Bar Section */}
//                     <div className="relative">
//                         <Progress
//                             value={progressPercentage}
//                             className="h-5"
//                             style={{
//                                 backgroundColor: theme.colors.secondary,
//                             }}
//                             indicatorClassName={`bg-[${theme.colors.primary}]`}
//                             progressBarStyle={{
//                                 backgroundColor: theme.colors.primary, borderRadius: theme.borderRadius.borderRadius
//                             }}
//                         />

//                     </div>

//                     {/* Days Indicators */}
//                     <div className="flex justify-between px-2">
//                         <span
//                             style={{
//                                 color: theme.colors.textSecondary,
//                                 fontSize: theme.fonts.web.body.size,
//                                 fontWeight: theme.fonts.web.body.weight,
//                             }}
//                         >
//                             -21 days
//                         </span>
//                         <span
//                             style={{
//                                 color: theme.colors.textSecondary,
//                                 fontSize: theme.fonts.web.body.size,
//                                 fontWeight: theme.fonts.web.body.weight,
//                             }}
//                         >
//                             -14 Days    <span className="text-lg">{"😊"}</span>
//                         </span>
//                         <span
//                             style={{
//                                 color: theme.colors.textSecondary,
//                                 fontSize: theme.fonts.web.body.size,
//                                 fontWeight: theme.fonts.web.body.weight,
//                             }}
//                         >
//                             -10 Days
//                         </span>
//                     </div>
//                 </div>
//             </Card>
//         </div>
//     )
// }


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
                        <div
                            className="flex items-center gap-2 rounded-lg"
                            style={{ backgroundColor: theme.colors.thertiary, width: '100px', padding: '0.5rem', boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.15) inset", borderRadius: '5px' }}
                        >
                            <img src={Medal} style={{ height: '2rem', width: '2rem' }}></img>
                            <span
                                style={{
                                    color: theme.colors.textPrimary,
                                    fontSize: notificationFonts.size,
                                    fontWeight: notificationFonts.weight,
                                }}
                            >
                                Good Going
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
                                alignItems: 'center'
                            }}
                        >
                            <span className="text-lg">{"😊"}</span> -14 Days
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

