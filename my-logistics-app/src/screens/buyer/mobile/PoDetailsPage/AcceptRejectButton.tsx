import { Button } from "@/components/ui/button"
import { useTheme } from "@/context/ThemeContext"

export function AcceptRejectButton() {
    const { theme } = useTheme()

    const baseFontSize = 16
    const headingFontSize = 16
    return (
        <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", flexDirection: "column", height: 'fit-content' }}>
            <div style={{ width: '90%', paddingBottom: '1rem' }}>
                <Button

                    size="desktop"

                    style={{ fontSize: `${baseFontSize}px`, width: '100%', fontWeight: '600', backgroundColor: theme.colors.success, color: 'white', padding: '5px 15px' }}
                >
                    Approve All
                </Button></div>
            <div style={{ width: '90%', paddingBottom: '1rem' }}>
                <Button

                    size="desktop"

                    style={{ fontSize: `${baseFontSize}px`, width: '100%', fontWeight: '600', backgroundColor: theme.colors.error, color: 'white', padding: '5px 15px' }}
                >
                    Reject All
                </Button>
            </div>
        </div>
    )
}