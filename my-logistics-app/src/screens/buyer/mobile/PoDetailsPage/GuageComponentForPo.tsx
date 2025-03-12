
import { useTheme } from "@/context/ThemeContext"
import { Card } from "@/components/ui/card"
import ShipDateHeader from "./CircularGuageHeader"
import ShipDateGauge from "@/components/mobile/shipDaysGauage"
import AcceptRejectButton from "./AcceptRejectButtonGuage"

export const GuageComponetForPo = () => {
    const { theme } = useTheme()

    const backgroundColor = theme.colors.dataTableBackground
    const textColor = "#1E1E1E"
    const fontSize = "16px"
    const fontWeight = "400"
    const actionButtonColor = "#FFE5E5"
    const actionButtonTextColor = "#1E1E1E"


    return (<div style={{ padding: '20px' }}>


        <Card style={{ boxShadow: theme.shadows.cardWithSpread, borderRadius: '10px' }}>



            <div className="" style={{ background: theme.colors.guageheaderColor, padding: '5px' }}>
                <ShipDateHeader
                    poShipDate="4 Mar 25"
                    requester="Vendor"
                    requestedShipDate="25 Mar 25"
                    styles={{
                        backgroundColor: theme.colors.guageheaderColor,
                        textColor: "#1E1E1E",
                        accentColor: "#002B5C",
                    }}
                />
                <div style={{ background: 'white' }}>
                    <div className="p-6" style={{ height: 'calc(300px)', display: 'flex', alignItems: 'center', }}>
                        <ShipDateGauge
                            size={200}
                            ringThickness={10}
                            pointerAngle={0} // 0 => pointer to the right (3 o'clock)
                            ringGradient="linear-gradient(to right, #4caf50, #ff9800)"
                            pointerColor="#00BFC2"
                            pointerHubRadius={14}
                            labelTop="Within 14 Days"
                            labelRight="More than 21 Days"
                            labelLeft="Within 7 Days"
                            labelBottom=""
                            bottomText="21 Days Delayed"
                            bottomTextSize="1.25rem"
                            bottomTextColor="#000"
                        />

                    </div>
                    <AcceptRejectButton />
                </div>
            </div>
        </Card>
    </div>

    )
}