import DataChart from "@/components/desktop/dataChart"
import PackingListSummary from "./OrderHeader"
import { useTheme } from "@/context/ThemeContext"
import { Button } from "@/components/ui/button"


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
        <div style={{ background: theme.colors.dataTableBackground, borderRadius: '30px' }}>
            <PackingListSummary
                totalQuantity={1545}
                cartonQuantity={20}
                netWeight="Kgs"
                grossWeight="kgs"
                cartonMeasurement=""
                styles={{
                    backgroundColor: "#E2E2FC",
                    textColor: "#1E1E1E",
                    headingColor: "#1E1E1E",
                    subheadingColor: "#4A4A4A",
                    labelColor: "#4A4A4A",
                    valueColor: "#1E1E1E",
                    fontSize: {
                        heading: "1.5rem",
                        subheading: "1rem",
                        label: "1rem",
                        value: "1rem",
                    },
                    fontWeight: {
                        heading: "600",
                        subheading: "400",
                        label: "500",
                        value: "400",
                    },
                    padding: "1.5rem",
                    borderRadius: "30px",
                }}
            />
            <DataChart />
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '80%', display: 'flex', justifyContent: 'center', paddingBottom: '1rem' }}>

                    <Button className="w-fit mt-2" style={{
                        backgroundColor: theme.colors.primary,
                        color: "white",
                        fontSize: "0.8rem",
                        fontWeight: theme.fonts.mobile.body.weight,
                        padding: "8px 24px", width: '100%'

                    }}>
                        Import Selected PO's
                    </Button>
                </div>
            </div>
        </div>
    )
}