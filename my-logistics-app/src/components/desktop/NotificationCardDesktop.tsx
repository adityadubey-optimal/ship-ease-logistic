import { CircleArrowRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useTheme } from "../../context/ThemeContext"

interface NotificationCardProps {
    poNumber: string
    shipByDate: string
    fromLocation: string
    toLocation: string
    actionRequired: string
    requestFrom: string
    onGoToPO?: () => void
    urgent?: boolean
}

const NotificationCard = ({
    poNumber,
    shipByDate,
    fromLocation,
    toLocation,
    actionRequired,
    requestFrom,
    onGoToPO,
    urgent = false,
}: NotificationCardProps) => {
    const { theme } = useTheme()
    const CardWidth = '460px'
    const numericCardWidth = parseFloat(CardWidth); // extracts 460 as a number
    const buttonWidth: string = (numericCardWidth / 2.5) + "px"; // calculates and adds the "px" unit

    return (
        <div style={{ paddingTop: '10px', width: '100%' }}>
            <Card
                className="relative"
                style={{
                    width: CardWidth,
                    backgroundColor: theme.colors.cardBackground,
                    borderRadius: "16px",
                    border: '2px solid #ffffff',
                    marginRight: '15px',

                }}
            >
                {/* Urgent Badge */}
                {urgent && (
                    <div style={{

                    }}>

                        <div
                            className="w-fit px-3 py-1 rounded-full"
                            style={{
                                backgroundColor: theme.colors.errorBgNotification,
                                color: theme.colors.error,
                                fontSize: theme.fonts.web.notification.size,
                                fontWeight: theme.fonts.web.notification.notificationCardWeight,
                                position: 'absolute',
                                top: '-10px',
                                left: '360px',
                            }}
                        >
                            Urgent
                        </div>

                    </div>
                )}

                {/* Main Content */}
                <div className="p-6">
                    <div className="flex flex-col gap-2">
                        {/* PO Number */}
                        <div className="flex flex-col gap-1">
                            <span
                                style={{
                                    color: theme.colors.notificationCardTextHeaderColor,
                                    fontSize: theme.fonts.web.body.size,
                                    fontWeight: theme.fonts.web.body.weight,
                                }}
                            >
                                PO: {poNumber}
                            </span>
                            <span
                                style={{
                                    color: theme.colors.notificationCardTextHeaderColor,
                                    fontSize: theme.fonts.web.body.size,
                                    fontWeight: '700',
                                }}
                            >
                                Ship-by-date: {shipByDate}
                            </span>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-2">
                            <span
                                style={{
                                    color: theme.colors.textSecondary,
                                    fontSize: theme.fonts.web.body.size,
                                }}
                            >
                                {fromLocation}
                            </span>
                            <ArrowRight className="w-4 h-4" style={{ color: theme.colors.textSecondary }} />
                            <span
                                style={{
                                    color: theme.colors.textSecondary,
                                    fontSize: theme.fonts.web.body.size,
                                }}
                            >
                                {toLocation}
                            </span>
                        </div>

                        {/* Action Required */}
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center justify-between"><div>
                                <span
                                    style={{
                                        color: theme.colors.textSecondary,
                                        fontSize: theme.fonts.web.body.size,
                                    }}
                                >
                                    Action Required:
                                </span>
                                <span
                                    style={{
                                        color: theme.colors.textPrimary,
                                        fontSize: theme.fonts.web.body.size,
                                        fontWeight: theme.fonts.web.body.weight,
                                    }}
                                >
                                    {actionRequired}
                                </span>
                            </div>
                                <CircleArrowRight className="w-5 h-5" style={{ color: theme.colors.textPrimary, height: '30px', width: '30px' }} />
                            </div>

                        </div>

                        {/* Request From */}
                        <span
                            style={{
                                color: theme.colors.textSecondary,
                                fontSize: theme.fonts.web.body.size,
                            }}
                        >
                            Request From: {requestFrom}
                        </span>

                        {/* Go to PO Button */}
                        <div>
                            <Button
                                onClick={onGoToPO}
                                className="w-fit mt-2"
                                style={{
                                    backgroundColor: theme.colors.primary,
                                    color: "white",
                                    fontSize: theme.fonts.web.body.size,
                                    fontWeight: theme.fonts.web.body.weight,
                                    padding: "8px 24px",
                                    minWidth: buttonWidth
                                }}
                            >
                                Go to PO
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default NotificationCard

