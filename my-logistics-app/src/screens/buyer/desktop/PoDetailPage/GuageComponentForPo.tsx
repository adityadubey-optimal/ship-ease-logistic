import CircleGauge from "@/components/mobile/shipDaysGauage"

import { useTheme } from "@/context/ThemeContext"
import { Button } from "@/components/ui/button"
import GuageComponentHeader from "./GiageComponentHeader"
import { Card } from "@/components/ui/card"
import ShipDateHeader from "./CircleGuageHeader"
import AcceptRejectButton from './AcceptRejectButton'

export const GuageComponetForPo = () => {
    const { theme } = useTheme()

    const backgroundColor = theme.colors.dataTableBackground
    const textColor = "#1E1E1E"
    const fontSize = "16px"
    const fontWeight = "400"
    const actionButtonColor = "#FFE5E5"
    const actionButtonTextColor = "#1E1E1E"


    return (<div style={{ padding: '20px', backgroundColor: theme.colors.dataTableBackground, borderRadius: '25px' }}>

        <GuageComponentHeader

            onAction={() => console.log("Action clicked")}
            styles={{
                backgroundColor: theme.colors.dataTableBackground,
                textColor: "#1E1E1E",
                fontSize: "16px",
                fontWeight: "400",
                actionButtonColor: "#FFE5E5",
                actionButtonTextColor: "#1E1E1E",
            }}
        />
        <div style={{ padding: '20px', background: theme.colors.dataTableBackground, borderRadius: '10px' }}>
            <Card style={{ boxShadow: theme.shadows.cardWithSpread, borderRadius: '10px' }}>



                <div className="" style={{ background: theme.colors.guageheaderColor, borderRadius: '10px' }}>
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
                    <div className="p-6" style={{ background: 'white', height: 'calc(300px + 10rem)', display: 'flex', alignItems: 'center', }}>
                        <CircleGauge
                            size={300}
                            ringThickness={20}
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

                </div>
            </Card>
        </div>
        <AcceptRejectButton />
    </div>

    )
}