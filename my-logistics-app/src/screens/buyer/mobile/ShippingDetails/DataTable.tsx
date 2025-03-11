import DataChart from "@/components/desktop/dataChart"
import PackingListSummary from "./OrderHeader"
import { useTheme } from "@/context/ThemeContext"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"


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
        <div style={{}}>
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
                        heading: "0.9rem",
                        subheading: "0.75rem",
                        label: "0.8rem",
                        value: "0.8rem",
                    },
                    fontWeight: {
                        heading: "600",
                        subheading: "300",
                        label: "700",
                        value: "700",
                    },
                    padding: "1.5rem",

                }}
            />
            <div style={{ background: theme.colors.secondary }}>
                <div className="p-4" style={{}}>
                    <label className="text-sm font-semibold" style={{ fontSize: '0.8rem', fontWeight: '600' }}>Select An Option</label>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="icon"      // or a custom variant
                                size="desktop"
                                className="flex items-center justify-between gap-2 px-4 py-2"
                                style={{
                                    borderRadius: "9999px",   // pill shape
                                    backgroundColor: theme.colors.guageheaderColor,
                                    color: "#000",
                                    marginTop: '30px',
                                    width: '100%'
                                }}
                            >
                                <span>{"Navy"}</span>
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent
                            align="end"
                            className="bg-white text-black border-none"
                            style={{
                                borderRadius: "0.5rem",
                                overflow: "hidden",
                                minWidth: "160px",
                            }}
                        >
                            {['Navy'].map((opt) => (
                                <DropdownMenuItem
                                    key={opt}
                                    onClick={() => { }}
                                    className="cursor-pointer hover:bg-gray-100 focus:bg-gray-100"
                                >
                                    {opt}
                                </DropdownMenuItem>
                            ))}

                            {/* Example separator + an extra item */}
                            <DropdownMenuSeparator className="my-1 border-gray-300" />
                            <DropdownMenuItem
                                onClick={() => { }}
                                className="cursor-pointer hover:bg-gray-100 focus:bg-gray-100"
                            >
                                Custom
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <DataChart />


            </div>

        </div>
    )
}