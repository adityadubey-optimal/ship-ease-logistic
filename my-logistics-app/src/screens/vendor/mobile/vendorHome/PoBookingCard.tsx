// import { Progress } from "@/components/ui/progress"
// import { Card } from "@/components/ui/card"
// import { useTheme } from "@/context/ThemeContext"
// import { borderRadius, getResponsiveSize } from "@/theme/base"
// import Medal from '@/assets/Medal.svg'

// export default function PoBookingCard() {
//     const { theme } = useTheme()
//     const progressPercentage = 60

//     return (
//         <div className="w-full max-w-7xl mx-auto p-4">
//             <Card className="p-6 shadow-md relative">
//                 <div className="flex flex-col gap-6">
//                     {/* Header Section */}
//                     <div className="flex items-center justify-between">
//                         <div>
//                             <div className="flex  gap-3" style={{
//                                 alignItems: 'baseline'
//                             }}>
//                                 <span
//                                     style={{
//                                         color: theme.colors.textSecondary,
//                                         fontSize: `${getResponsiveSize(1.2, 1.75)}rem`,
//                                         fontWeight: 800,
//                                     }}
//                                 >
//                                     20
//                                 </span>
//                                 <span
//                                     style={{
//                                         color: theme.colors.textSecondary,
//                                         fontSize: `${getResponsiveSize(1.2, 1.75)}rem`,
//                                         fontWeight: 800,
//                                     }}
//                                 >
//                                     New POs issued
//                                 </span>
//                             </div>

//                             <div className="flex  gap-3" style={{
//                                 alignItems: 'baseline'
//                             }}>
//                                 <span
//                                     style={{
//                                         color: theme.colors.success,
//                                         fontSize: `${getResponsiveSize(1.85, 2.05)}rem`,
//                                         fontWeight: theme.fonts.web.buyerHomePage.poBookingCard.poBookingPercentageFont.weight,
//                                     }}
//                                 >
//                                     100%
//                                 </span>
//                                 <span
//                                     style={{
//                                         color: theme.colors.textSecondary,
//                                         fontSize: `${getResponsiveSize(1.35, 1.55)}rem`,
//                                         fontWeight: theme.fonts.web.buyerHomePage.poBookingCard.pobokingDescription.weight,
//                                     }}
//                                 >
//                                     PO Booked by Ship-by-Date
//                                 </span>
//                             </div>
//                         </div>
//                         <div
//                             className="flex items-center gap-2 px-4 py-2 rounded-lg"
//                             style={{ backgroundColor: theme.colors.thertiary }}
//                         >
//                             <img src={Medal} />
//                             <span
//                                 style={{

//                                     color: theme.colors.textSecondary,
//                                     fontSize: theme.fonts.web.buyerHomePage.poBookingCard.statusMessage.size,
//                                     fontWeight: theme.fonts.web.buyerHomePage.poBookingCard.statusMessage.weight,
//                                 }}
//                             >
//                                 Keep going
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
//                                 fontSize: theme.fonts.web.buyerHomePage.poBookingCard.daysFont.size,
//                                 fontWeight: theme.fonts.web.buyerHomePage.poBookingCard.daysFont.weight,
//                                 width: '70px',
//                                 textAlign: 'center',
//                             }}
//                         >
//                             -21 Days
//                         </span>
//                         <span
//                             style={{
//                                 color: theme.colors.textSecondary,
//                                 fontSize: theme.fonts.web.buyerHomePage.poBookingCard.daysFont.size,
//                                 fontWeight: theme.fonts.web.buyerHomePage.poBookingCard.daysFont.weight,
//                                 width: '70px',
//                                 textAlign: 'center',
//                             }}
//                         >
//                             -14 Days
//                         </span>
//                         <span
//                             style={{
//                                 color: theme.colors.textSecondary,
//                                 fontSize: theme.fonts.web.buyerHomePage.poBookingCard.daysFont.size,
//                                 fontWeight: theme.fonts.web.buyerHomePage.poBookingCard.daysFont.weight,
//                                 width: '70px',
//                                 textAlign: 'center',
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
            <Card className="p-2 shadow-md relative">
                <div className="flex flex-col gap-6">
                    {/* Header Section */}

                    <div className="flex items-center justify-between">
                        <div>
                            <div className="flex items-center gap-3" style={{
                                maxWidth: '170px',
                                lineHeight: '1.2rem',
                                paddingBottom: '7px',
                            }}>
                                <span
                                    style={{
                                        color: theme.colors.textSecondary,
                                        fontSize: '0.85rem',
                                        fontWeight: bookingCardFonts.heading.weight,
                                    }}
                                >
                                    20

                                    <span
                                        style={{
                                            color: theme.colors.textSecondary,
                                            fontSize: '0.85rem',
                                            fontWeight: bookingCardFonts.body.weight,
                                        }}
                                    >
                                        {" "}New POs Issued
                                    </span>
                                </span>
                            </div>
                            <div className="flex items-center gap-3" style={{
                                maxWidth: '170px',
                                lineHeight: '1.2rem'
                            }}>
                                <span
                                    style={{
                                        color: theme.colors.success,
                                        fontSize: '1rem',
                                        fontWeight: bookingCardFonts.heading.weight,
                                    }}
                                >
                                    80%

                                    <span
                                        style={{
                                            color: theme.colors.textSecondary,
                                            fontSize: '0.85rem',
                                            fontWeight: bookingCardFonts.body.weight,
                                        }}
                                    >
                                        {" "}PO's Booked for Ship-by-Date
                                    </span>
                                </span>

                            </div>
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



