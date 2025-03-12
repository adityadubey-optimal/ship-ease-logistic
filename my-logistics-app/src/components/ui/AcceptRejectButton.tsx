// import { Button } from "@/components/ui/button"
// import { useTheme } from "@/context/ThemeContext"

// export default function AcceptRejectButton({onApproveClick, }) {
//     const { theme } = useTheme()

//     const baseFontSize = 16
//     const headingFontSize = 16
//     return (
//         <div style={{ display: 'flex', justifyContent: "center", gap: '25px', alignItems: "center", flexDirection: "row", height: 'fit-content', padding: '1rem', width: '80%' }}>
//             <div style={{ paddingBottom: '1rem', width: '40%' }}>
//                 <Button

//                     size="desktop"

//                     style={{ fontSize: `${baseFontSize}px`, width: '100%', fontWeight: '600', backgroundColor: theme.colors.success, color: 'white', padding: '0.5rem 2rem' }}
//                 >
//                     Approve
//                 </Button></div>
//             <div style={{ paddingBottom: '1rem', width: '40%' }}>
//                 <Button

//                     size="desktop"

//                     style={{ fontSize: `${baseFontSize}px`, width: '100%', fontWeight: '600', backgroundColor: theme.colors.error, color: 'white', padding: '0.5rem 2rem' }}
//                 >
//                     Reject
//                 </Button>
//             </div>
//         </div>
//     )
// }

import { Button } from "@/components/ui/button"
import { useTheme } from "@/context/ThemeContext"

interface AcceptRejectButtonProps {
    onApproveClick?: () => void
    onRejectClick?: () => void
}

/**
 * Displays two buttons side-by-side: "Approve" and "Reject."
 * The parent can pass callbacks to handle each action.
 */
export default function AcceptRejectButton({
    onApproveClick,
    onRejectClick,
}: AcceptRejectButtonProps) {
    const { theme } = useTheme()

    const baseFontSize = 16

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                gap: "25px",
                alignItems: "center",
                flexDirection: "row",
                height: "fit-content",
                padding: "1rem",
                width: "80%",
            }}
        >
            <div style={{ paddingBottom: "1rem", width: "40%" }}>
                <Button
                    size="desktop"
                    style={{
                        fontSize: `${baseFontSize}px`,
                        width: "100%",
                        fontWeight: "600",
                        backgroundColor: theme.colors.success,
                        color: "white",
                        padding: "0.5rem 2rem",
                    }}
                    onClick={onApproveClick}
                >
                    Approve
                </Button>
            </div>

            <div style={{ paddingBottom: "1rem", width: "40%" }}>
                <Button
                    size="desktop"
                    style={{
                        fontSize: `${baseFontSize}px`,
                        width: "100%",
                        fontWeight: "600",
                        backgroundColor: theme.colors.error,
                        color: "white",
                        padding: "0.5rem 2rem",
                    }}
                    onClick={onRejectClick}
                >
                    Reject
                </Button>
            </div>
        </div>
    )
}