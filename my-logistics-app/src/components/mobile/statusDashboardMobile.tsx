"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Edit2 } from "lucide-react"
import { useTheme } from "@/context/ThemeContext"
import Ship from "@assets/Ship.svg"
import CalendarIcon from '@assets/Calendar.svg';

export default function StatusDashboard({ showAddPoButton = true }: { showAddPoButton?: boolean }) {
    const { theme } = useTheme()

    return (
        <div className="w-full max-w-7xl mx-auto" style={{ background: "transparent", paddingBottom: '0px' }}>
            {/* User Info */}


            {/* Status Section */}
            <div className="flex flex-col gap-4">
                {/* Title */}


                {/* Cards Container */}
                <div className="flex gap-4">
                    {/* Ship by Date Card */}
                    <div
                        className="flex-1"
                        style={{


                        }}
                    >
                        <h1
                            style={{
                                color: '#000000',
                                fontSize: theme.fonts.mobile.buyerHomePage.statusCard.headerFont.size,
                                fontWeight: theme.fonts.mobile.buyerHomePage.statusCard.headerFont.weight,
                            }}
                        >
                            Today's Status
                        </h1>
                        <div className="flex justify-between items-center" style={{
                            backgroundColor: theme.colors.thertiary,
                            borderRadius: theme.borderRadius.card,

                            width: '160px',
                            padding: '5px',
                            height: '75%'
                        }}>
                            <div>
                                <p
                                    style={{
                                        color: theme.colors.textPrimary,
                                        fontSize: theme.fonts.mobile.buyerHomePage.statusCard.pageHeaderLight.size,
                                        fontWeight: theme.fonts.mobile.buyerHomePage.statusCard.pageHeaderLight.weight,
                                        marginBottom: "0px",

                                    }}
                                >
                                    For Ship-by-Date:
                                </p>
                                <p
                                    style={{
                                        color: theme.colors.textPrimary,
                                        fontSize: theme.fonts.mobile.buyerHomePage.statusCard.pageHeaderFont.size,
                                        fontWeight: theme.fonts.mobile.buyerHomePage.statusCard.pageHeaderFont.weight,
                                    }}
                                >
                                    4 Mar 25
                                </p>
                            </div>
                            <Button
                                variant="icon"
                                size="mobile"
                                className="h-10 w-10 p-0"
                                style={{
                                    backgroundColor: "transparent",
                                }}
                            >
                                <Edit2 className="h-5 w-5" style={{ color: theme.colors.textPrimary }} />
                            </Button>
                        </div>
                    </div>

                    {/* Days to Ship Card */}
                    <div
                        className="flex-1"
                        style={{
                            backgroundColor: "white",

                            padding: '0px',

                            width: '170px',
                            display: 'flex',
                            position: "relative"
                        }}
                    >
                        <div className="flex items-center justify-between gap-4" style={{
                            border: `1px solid ${theme.colors.secondary}`,
                            borderRadius: theme.borderRadius.card,
                            margin: '5px',
                            paddingRight: '0px',
                            paddingLeft: '0px',
                            width: '50%'
                        }}>
                            <div className="flex items-center gap-4" style={{
                                flexDirection: 'column', gap: '0px', alignItems: 'flex-start', padding: '5px'
                            }}>
                                <img src={Ship || "/placeholder.svg"} alt="Ship illustration" className="w-10 h-10 object-contain" style={{ height: '30px', width: '30  px' }} />
                                <p
                                    style={{
                                        color: theme.colors.textSecondary,
                                        fontSize: theme.fonts.mobile.buyerHomePage.statusCard.calendarDescription.size,
                                        fontWeight: theme.fonts.mobile.buyerHomePage.statusCard.calendarDescription.weight,
                                    }}
                                >
                                    <span
                                        style={{
                                            color: theme.colors.textPrimary,
                                            fontSize: theme.fonts.mobile.buyerHomePage.statusCard.calendarDate.size,
                                            fontWeight: theme.fonts.mobile.buyerHomePage.statusCard.calendarDate.weight,
                                        }}
                                    >
                                        14 days
                                    </span>{" "}
                                    to ship by date
                                </p>
                            </div>

                        </div>
                        <div
                            style={{
                                backgroundColor: theme.colors.secondary,
                                width: '50%',
                                transform: "translate(100%, 50%)",
                                bottom: "50%",
                                height: "110%",
                                borderRadius: "8px",
                                position: "absolute",
                            }}
                        >

                            <img src={CalendarIcon} alt="Calendar Icon" style={{
                                height: '90%', top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                position: 'absolute'
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
                    </div>

                </div>
            </div>
        </div>
    )
}




