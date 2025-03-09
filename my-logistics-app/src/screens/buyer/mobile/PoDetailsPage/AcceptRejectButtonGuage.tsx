import { Button } from "@/components/ui/button"
import { useTheme } from "@/context/ThemeContext"

export default function AcceptRejectButton() {
    const { theme } = useTheme()

    const baseFontSize = 16
    const headingFontSize = 16
    return (
        <div style={{ display: 'flex', justifyContent: "space-around", alignItems: "center", flexDirection: "row", height: 'fit-content' }}>
            <div style={{ width: '40%', paddingBottom: '1rem' }}>
                <Button

                    size="desktop"

                    style={{ fontSize: `${baseFontSize}px`, width: '100%', fontWeight: '600', backgroundColor: theme.colors.success, color: 'white', padding: '5px 15px' }}
                >
                    Approve
                </Button></div>
            <div style={{ width: '40%', paddingBottom: '1rem' }}>
                <Button

                    size="desktop"

                    style={{ fontSize: `${baseFontSize}px`, width: '100%', fontWeight: '600', backgroundColor: theme.colors.error, color: 'white', padding: '5px 15px' }}
                >
                    Reject
                </Button>
            </div>
        </div>
    )
}