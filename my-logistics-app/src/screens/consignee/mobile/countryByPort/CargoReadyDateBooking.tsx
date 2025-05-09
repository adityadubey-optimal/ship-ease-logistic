import DataChart from "@/components/desktop/dataChart"
import OrderHeader from "./CargoReadyBookingHeader"
import { useTheme } from "@/context/ThemeContext"


export const DataTableForPo = ({ showDetailedPackingList = false }: { showDetailedPackingList?: boolean }) => {
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
        <div style={{ background: theme.colors.secondary, borderRadius: '35px' }}>

            <OrderHeader
                poNumber="2846395275"
                buyer="Sample Buyer"
                brand="Sample Brand"
                productName="Men's Long Sleeve Shirt 100% Cotton"
                color="Navy"

                colors={["Navy", "Black", "White", "Red"]}
                orderDetails={orderDetails}
                onAction={() => console.log("Action clicked")}
                ActionButtonText={`Action Required, Approve Ship-By-Date`}
                styles={{
                    backgroundColor: theme.colors.secondary,
                    textColor: "#1E1E1E",
                    fontSize: "16px",
                    fontWeight: "400",
                    actionButtonColor: "#FFE5E5",
                    actionButtonTextColor: "#1E1E1E",
                }}
            />

            <DataChart actionFlag="ship_by_date_booking" />
        </div>
    )
}