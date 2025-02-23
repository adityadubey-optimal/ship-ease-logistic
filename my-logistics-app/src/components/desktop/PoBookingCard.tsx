import { Progress } from "@/components/ui/progress"
import { Card } from "@/components/ui/card"
import { useTheme } from "../../context/ThemeContext"
import { borderRadius } from "@/theme/base"

export default function PoBookingCard() {
    const { theme } = useTheme()
    const progressPercentage = 60

    return (
        <div className="w-full max-w-7xl mx-auto p-4">
            <Card className="p-6 shadow-md relative">
                <div className="flex flex-col gap-6">
                    {/* Header Section */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <span
                                style={{
                                    color: theme.colors.success,
                                    fontSize: theme.fonts.web.heading.size,
                                    fontWeight: theme.fonts.web.heading.weight,
                                }}
                            >
                                80%
                            </span>
                            <span
                                style={{
                                    color: theme.colors.textSecondary,
                                    fontSize: theme.fonts.web.body.size,
                                    fontWeight: theme.fonts.web.body.weight,
                                }}
                            >
                                PO's Booked for Ship-by-Date
                            </span>
                        </div>
                        <div
                            className="flex items-center gap-2 px-4 py-2 rounded-lg"
                            style={{ backgroundColor: theme.colors.thertiary }}
                        >
                            <span className="text-lg">{"🎯"}</span>
                            <span
                                style={{
                                    color: theme.colors.textPrimary,
                                    fontSize: theme.fonts.web.notification.size,
                                    fontWeight: theme.fonts.web.notification.weight,
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
                                backgroundColor: theme.colors.primary, borderRadius: theme.borderRadius.borderRadius
                            }}
                        />

                    </div>

                    {/* Days Indicators */}
                    <div className="flex justify-between px-2">
                        <span
                            style={{
                                color: theme.colors.textSecondary,
                                fontSize: theme.fonts.web.body.size,
                                fontWeight: theme.fonts.web.body.weight,
                            }}
                        >
                            -21 days
                        </span>
                        <span
                            style={{
                                color: theme.colors.textSecondary,
                                fontSize: theme.fonts.web.body.size,
                                fontWeight: theme.fonts.web.body.weight,
                            }}
                        >
                            -14 Days    <span className="text-lg">{"😊"}</span>
                        </span>
                        <span
                            style={{
                                color: theme.colors.textSecondary,
                                fontSize: theme.fonts.web.body.size,
                                fontWeight: theme.fonts.web.body.weight,
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

