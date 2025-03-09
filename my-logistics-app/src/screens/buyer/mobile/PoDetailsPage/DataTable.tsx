import DataChart from "@/components/desktop/dataChart"
import OrderHeader from "./OrderHeader"
import { useTheme } from "@/context/ThemeContext"
import { AcceptRejectButton } from './AcceptRejectButton'


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
            <OrderHeader

            />
            <DataChart />
            <AcceptRejectButton />
        </div>
    )
}