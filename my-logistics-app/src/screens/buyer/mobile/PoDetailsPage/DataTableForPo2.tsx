import DataChart from "@/components/desktop/dataChart"
import ShipModeCard from "./OrderHeaderForPo2"
import { useTheme } from "@/context/ThemeContext"
import AcceptRejectButton from './AcceptRejectButtonGuage'


export const DataTableForPo = () => {
    const { theme } = useTheme()

    const orderDetails = {
        totalPoQuantity: 1545,
        totalPackedQuantity: 1545,
        netWeight: 1545,
        grossWeight: 1545,
        cartonQuantity: 20,
        cartonMeasurement: 20,
    }



    return (
        <div style={{ background: theme.colors.dataTableBackground }}>
            <ShipModeCard
                poShipMode="Ocean"
                requester="Vendor"
                requestedShipMode="Air"
                poQuantity={1593}
                airQuantity={1593}
                styles={{
                    backgroundColor: "#E2E2FC",
                    textColor: "#1E1E1E",
                    headingColor: "#4A4A4A",
                    valueColor: "#1E1E1E",
                    badgeColor: "#C7C7F9",
                    fontSize: {
                        heading: "0.8rem",
                        label: "0.6rem",
                        value: "1.5rem",
                    },
                    fontWeight: {
                        heading: "600",
                        label: "400",
                        value: "600",
                    },
                }}
            />
            <DataChart />
            <AcceptRejectButton />
        </div>
    )
}

export default DataTableForPo