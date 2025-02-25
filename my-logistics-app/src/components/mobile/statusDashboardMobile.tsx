"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Edit2 } from "lucide-react"
import { useTheme } from "@/context/ThemeContext"
import Ship from "@assets/Ship.svg"

export default function StatusDashboard() {
    const { theme } = useTheme()

    return (
        <div className="w-full max-w-7xl mx-auto p-4" style={{ background: "transparent", paddingBottom: '0px' }}>
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
                                fontSize: theme.fonts.mobile.heading.size,
                                fontWeight: theme.fonts.mobile.heading.weight,
                            }}
                        >
                            Today's Status
                        </h1>
                        <div className="flex justify-between items-center" style={{
                            backgroundColor: theme.colors.thertiary,
                            borderRadius: theme.borderRadius.card,

                            width: '160px',
                            padding: '5px',
                        }}>
                            <div>
                                <p
                                    style={{
                                        color: theme.colors.primary,
                                        fontSize: theme.fonts.mobile.body.size,
                                        fontWeight: theme.fonts.mobile.body.weight,
                                        marginBottom: "8px",

                                    }}
                                >
                                    For Ship-by-Date:
                                </p>
                                <p
                                    style={{
                                        color: theme.colors.primary,
                                        fontSize: theme.fonts.mobile.heading.size,
                                        fontWeight: theme.fonts.mobile.heading.weight,
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
                                <Edit2 className="h-5 w-5" style={{ color: theme.colors.primary }} />
                            </Button>
                        </div>
                    </div>

                    {/* Days to Ship Card */}
                    <div
                        className="flex-1"
                        style={{
                            backgroundColor: "white",

                            padding: '0px',
                            margin: "5px",
                            width: '160px',
                            display: 'flex',
                        }}
                    >
                        <div className="flex items-center justify-between gap-4" style={{
                            border: `1px solid ${theme.colors.secondary}`,
                            borderRadius: theme.borderRadius.card,
                            margin: '5px',
                            paddingRight: '5px',
                            paddingLeft: '5px'
                        }}>
                            <div className="flex items-center gap-4" style={{
                                flexDirection: 'column', gap: '0px', alignItems: 'flex-start',
                            }}>
                                <img src={Ship || "/placeholder.svg"} alt="Ship illustration" className="w-10 h-10 object-contain" />
                                <p
                                    style={{
                                        color: theme.colors.textSecondary,
                                        fontSize: theme.fonts.mobile.body.size,
                                        fontWeight: theme.fonts.mobile.body.weight,
                                    }}
                                >
                                    <span
                                        style={{
                                            color: theme.colors.textPrimary,
                                            fontSize: theme.fonts.mobile.body.size,
                                            fontWeight: theme.fonts.mobile.heading.weight,
                                        }}
                                    >
                                        14 days
                                    </span>{" "}
                                    to ship by date
                                </p>
                            </div>

                        </div>
                        <div
                            className="flex items-center gap-2 px-4 py-3"
                            style={{
                                backgroundColor: theme.colors.thertiary,
                                borderRadius: theme.borderRadius.borderRadius,
                                width: '80px'
                            }}
                        >
                            <Calendar className="h-6 w-6" style={{ color: theme.colors.primary }} />
                            <span
                                style={{
                                    color: theme.colors.primary,
                                    fontSize: theme.fonts.mobile.heading.size,
                                    fontWeight: theme.fonts.mobile.heading.weight,
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

