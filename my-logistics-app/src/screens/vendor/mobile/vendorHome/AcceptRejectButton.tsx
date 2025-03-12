import { Button } from "@/components/ui/button"
import { useTheme } from "@/context/ThemeContext"

export default function AcceptRejectButton() {
    const { theme } = useTheme()

    const baseFontSize = 16
    const headingFontSize = 16
    return (
        <div style={{ display: 'flex', width: '100%', justifyContent: "flex-start", gap: '5px', alignItems: "center", flexDirection: "column", height: 'fit-content', padding: '1rem' }}>
            <div style={{ paddingBottom: '1rem', width: '100%' }}>
                <Button

                    size="desktop"

                    style={{ fontSize: `${baseFontSize}px`, width: '100%', fontWeight: '600', backgroundColor: theme.colors.success, color: 'white', padding: '0.5rem 2rem' }}
                >
                    Approve
                </Button></div>
            <div style={{ paddingBottom: '1rem', width: '100%' }}>
                <Button

                    size="desktop"

                    style={{ fontSize: `${baseFontSize}px`, width: '100%', fontWeight: '600', backgroundColor: theme.colors.error, color: 'white', padding: '0.5rem 2rem' }}
                >
                    Reject
                </Button>
            </div>
        </div>
    )
}