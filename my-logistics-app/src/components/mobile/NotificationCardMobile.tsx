// import { CircleArrowRight, ArrowRight } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { useTheme } from "../../context/ThemeContext"

// interface NotificationCardProps {
//     poNumber: string
//     shipByDate: string
//     fromLocation: string
//     toLocation: string
//     actionRequired: string
//     requestFrom: string
//     onGoToPO?: () => void
//     urgent?: boolean
// }

// const NotificationCard = ({
//     poNumber,
//     shipByDate,
//     fromLocation,
//     toLocation,
//     actionRequired,
//     requestFrom,
//     onGoToPO,
//     urgent = false,
// }: NotificationCardProps) => {
//     const { theme } = useTheme()
//     const CardWidth = '350px'
//     const numericCardWidth = parseFloat(CardWidth); // extracts 460 as a number
//     const buttonWidth: string = (numericCardWidth / 2.5) + "px"; // calculates and adds the "px" unit

//     return (
//         <div style={{ paddingTop: '10px', width: '100%' }}>
//             <Card
//                 className="relative"
//                 style={{
//                     width: CardWidth,
//                     backgroundColor: theme.colors.cardBackground,
//                     borderRadius: "16px",
//                     border: '2px solid #ffffff',
//                     marginRight: '5px',

//                 }}
//             >
//                 {/* Urgent Badge */}
//                 {urgent && (
//                     <div style={{

//                     }}>

//                         <div
//                             className="w-fit px-5 py-1 rounded-full"
//                             style={{
//                                 backgroundColor: theme.colors.errorBgNotification,
//                                 color: theme.colors.error,
//                                 fontSize: theme.fonts.mobile.notification.size,
//                                 fontWeight: theme.fonts.mobile.notification.notificationCardWeight,
//                                 position: 'absolute',
//                                 top: '-10px',
//                                 left: '240px',
//                             }}
//                         >
//                             Urgent
//                         </div>

//                     </div>
//                 )}

//                 {/* Main Content */}
//                 <div className="p-6">
//                     <div className="flex flex-col gap-2">
//                         {/* PO Number */}
//                         <div className="flex flex-col gap-1">
//                             <span
//                                 style={{
//                                     color: theme.colors.textPrimary,
//                                     fontSize: theme.fonts.mobile.body.size,
//                                     fontWeight: theme.fonts.mobile.body.weight,
//                                 }}
//                             >
//                                 PO: {poNumber}
//                             </span>
//                             <span
//                                 style={{
//                                     color: theme.colors.textPrimary,
//                                     fontSize: theme.fonts.mobile.body.size,
//                                     fontWeight: theme.fonts.mobile.body.weight,
//                                 }}
//                             >
//                                 Ship-by-date: {shipByDate}
//                             </span>
//                         </div>

//                         {/* Location */}
//                         <div className="flex items-center gap-2">
//                             <span
//                                 style={{
//                                     color: theme.colors.textSecondary,
//                                     fontSize: theme.fonts.mobile.body.size,
//                                 }}
//                             >
//                                 {fromLocation}
//                             </span>
//                             <ArrowRight className="w-4 h-4" style={{ color: theme.colors.textSecondary }} />
//                             <span
//                                 style={{
//                                     color: theme.colors.textSecondary,
//                                     fontSize: theme.fonts.mobile.body.size,
//                                 }}
//                             >
//                                 {toLocation}
//                             </span>
//                         </div>

//                         {/* Action Required */}
//                         <div className="flex flex-col gap-1">
//                             <div className="flex items-center justify-between"><div>
//                                 <span
//                                     style={{
//                                         color: theme.colors.textSecondary,
//                                         fontSize: theme.fonts.mobile.body.size,
//                                     }}
//                                 >
//                                     Action Required:
//                                 </span>
//                                 <span
//                                     style={{
//                                         color: theme.colors.textPrimary,
//                                         fontSize: theme.fonts.mobile.body.size,
//                                         fontWeight: theme.fonts.mobile.body.weight,
//                                     }}
//                                 >
//                                     {actionRequired}
//                                 </span>
//                             </div>
//                                 <CircleArrowRight className="w-5 h-5" style={{ color: theme.colors.textPrimary, height: '20px', width: '20px' }} />
//                             </div>

//                         </div>

//                         {/* Request From */}
//                         <span
//                             style={{
//                                 color: theme.colors.textSecondary,
//                                 fontSize: theme.fonts.mobile.body.size,
//                             }}
//                         >
//                             Request From: {requestFrom}
//                         </span>

//                         {/* Go to PO Button */}
//                         <div>
//                             <Button
//                                 onClick={onGoToPO}
//                                 className="w-fit mt-2"
//                                 style={{
//                                     backgroundColor: theme.colors.primary,
//                                     color: "white",
//                                     fontSize: theme.fonts.mobile.body.size,
//                                     fontWeight: theme.fonts.mobile.body.weight,
//                                     padding: "8px 24px",
//                                     minWidth: buttonWidth
//                                 }}
//                             >
//                                 Go to PO
//                             </Button>
//                         </div>
//                     </div>
//                 </div>
//             </Card>
//         </div>
//     )
// }

// export default NotificationCard


"use client"

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

export default function NotificationCard({
    poNumber,
    shipByDate,
    fromLocation,
    toLocation,
    actionRequired,
    requestFrom,
    onGoToPO,
    urgent = false,
}: NotificationCardProps) {
    const { theme } = useTheme()
    const CardWidth = "100%"
    const numericCardWidth = parseFloat(CardWidth)
    // const buttonWidth: string = (numericCardWidth / 2.5) + "px"
    const buttonWidth: string = "35%"


    // Consolidate all style references here for easy control
    const styleVars = {
        card: {
            width: CardWidth,
            backgroundColor: theme.colors.cardBackground,
            borderRadius: "16px",
            border: "2px solid #ffffff",
            marginRight: "5px",
        },
        urgentBadge: {
            backgroundColor: theme.colors.errorBgNotification,
            color: theme.colors.error,
            fontSize: "10px",
            fontWeight: theme.fonts.mobile.notification.notificationCardWeight,
            position: "absolute" as const,
            top: "-10px",
            left: "70%",
        },
        poNumberText: {
            color: theme.colors.notificationCardTextHeaderColor,
            fontSize: '0.75rem',
            fontWeight: theme.fonts.mobile.body.weight,
        },
        shipByDateText: {
            color: theme.colors.notificationCardTextHeaderColor,
            fontSize: '0.75rem',
            fontWeight: theme.fonts.mobile.body.weight,
        },
        locationText: {
            color: theme.colors.textSecondary,
            fontSize: theme.fonts.mobile.body.size,
        },
        actionLabel: {
            color: theme.colors.textSecondary,
            fontSize: theme.fonts.mobile.body.size,
        },
        actionRequiredText: {
            color: theme.colors.textPrimary,
            fontSize: "0.8rem",
            fontWeight: theme.fonts.mobile.body.weight,
        },
        requestFromText: {
            color: theme.colors.textSecondary,
            fontSize: theme.fonts.mobile.body.size,
        },
        goToPoButton: {
            backgroundColor: theme.colors.primary,
            color: "white",
            fontSize: "0.8rem",
            fontWeight: theme.fonts.mobile.body.weight,
            padding: "8px 24px",
            minWidth: buttonWidth,

        },
    }

    return (
        <div style={{ paddingTop: "15px", width: "100%" }}>
            <Card className="relative" style={styleVars.card}>
                {/* Urgent Badge */}
                {urgent && (
                    <div>
                        <div className="w-fit px-5 py-1 rounded-full" style={styleVars.urgentBadge}>
                            Urgent
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="" style={{ padding: '10px 15px' }}>
                    <div className="flex flex-col gap-2">
                        {/* PO Number */}
                        <div className="flex flex-col gap-1">
                            <span style={styleVars.poNumberText}>PO: {poNumber}</span>
                            <span style={styleVars.shipByDateText}>Ship-by-date: {shipByDate}</span>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-2">
                            <span style={styleVars.locationText}>{fromLocation}</span>
                            <ArrowRight className="w-4 h-4" style={{ color: theme.colors.textSecondary }} />
                            <span style={styleVars.locationText}>{toLocation}</span>
                        </div>

                        {/* Action Required */}
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center justify-between">
                                <div>
                                    <span style={styleVars.actionLabel}>Action Required:</span>
                                    <span style={styleVars.actionRequiredText}> {actionRequired}</span>
                                </div>
                                <CircleArrowRight
                                    className="w-5 h-5"
                                    style={{ color: theme.colors.textPrimary, height: "25px", width: "25px" }}
                                />
                            </div>
                        </div>

                        {/* Request From */}
                        <span style={styleVars.requestFromText}>Request From: {requestFrom}</span>

                        {/* Go to PO Button */}
                        <div>
                            <Button onClick={onGoToPO} className="w-fit mt-2" style={styleVars.goToPoButton}>
                                Go to PO
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}