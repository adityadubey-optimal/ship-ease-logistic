

"use client"

import { useState } from "react"
import { ScrollableDataTable } from "@/components/ui/scrollable-ui"
import GenericInput from "../ui/InputField"
import { Button } from "../ui/button"
import { useTheme } from "@/context/ThemeContext"
import useResponsiveSize from "@/hooks/useResponsiveSize"
import { ConfirmModal } from "../shared/ConfirmRejectModal"
import { CheckCircle, XCircle } from 'lucide-react'
import { useIsMobile } from "@/hooks/useMobile"

interface ProductData {
    id: number
    size: string
    poQuantity: number
    vendorQuantity: number
    variation: number
    status: "approved" | "pending"
    sku: string
    color: string
    material: string
    weight: number
    price: number
    inStock: boolean
    lastUpdated: string
    onApprove?: (data: any) => void
    onReject?: (data: any) => void
}

const columns = [
    { header: "ID", accessor: "id", width: "80px", fixed: true },
    { header: "Size", accessor: "size", width: "80px", fixed: true, editable: true, type: 'text' },
    { header: "PO Quantity", accessor: "poQuantity", width: "120px", editable: true, type: 'number' },
    { header: "Vendor Quantity", accessor: "vendorQuantity", width: "150px", editable: true, type: 'number' },
    { header: "Variation", accessor: "variation", width: "100px" },
    { header: "SKU", accessor: "sku", width: "150px", editable: true, type: 'text' },
    { header: "Color", accessor: "color", width: "100px", editable: true, type: 'text' },
    { header: "Material", accessor: "material", width: "120px", editable: true, type: 'text' },
    { header: "Weight (g)", accessor: "weight", width: "120px", editable: true, type: 'number' },
    { header: "Price ($)", accessor: "price", width: "100px", editable: true, type: 'number' },
    { header: "In Stock", accessor: "inStock", width: "100px", editable: true, type: 'boolean' },
    { header: "In Stock", accessor: "inStock", width: "100px", editable: true, type: 'boolean' },
    { header: "Last Updated", accessor: "lastUpdated", width: "150px", editable: true, type: 'text' },
]

// Function to generate random product data
const generateRandomData = (): ProductData => ({
    id: Math.floor(Math.random() * 1000) + 1,
    size: ["XS", "S", "M", "L", "XL"][Math.floor(Math.random() * 5)],
    poQuantity: Math.floor(Math.random() * 1000) + 100,
    vendorQuantity: Math.floor(Math.random() * 1000) + 100,
    variation: Math.floor(Math.random() * 10),
    status: Math.random() > 0.5 ? "approved" : "pending",
    sku: `SKU-${Math.random().toString(36).substr(2, 9)}`,
    color: ["Red", "Blue", "Green", "Yellow", "Black"][Math.floor(Math.random() * 5)],
    material: ["Cotton", "Polyester", "Wool", "Silk", "Linen"][Math.floor(Math.random() * 5)],
    weight: Math.floor(Math.random() * 500) + 100,
    price: Math.floor(Math.random() * 100) + 20,
    inStock: Math.random() > 0.3,
    lastUpdated: new Date(Date.now() - Math.floor(Math.random() * 10000000000))
        .toISOString()
        .split("T")[0]

})

export default function ExampleScrollableTable({ showActions = true, showTotals = true }) {
    const { theme } = useTheme()
    const isMobile = useIsMobile()
    // Generate 20 rows of product data using the generateRandomData function
    const [tableData, setTableData] = useState<ProductData[]>(
        Array(20)
            .fill(null)
            .map(generateRandomData)
    )
    const [showAcceptModel, setShowAcceptModel] = useState(false)
    const [showRejectModel, setShowRejectModel] = useState(false)
    const [openedRow, setOpenedRow] = useState(null)
    const handleRowChange = (updatedRow: ProductData) => {
        setTableData((prevData) =>
            prevData.map((row) => (row.id === updatedRow.id ? updatedRow : row))
        )
    }

    const rowFontSize = useResponsiveSize(14, 18)
    const headerFontSize = useResponsiveSize(16, 22)
    const totals = {
        poQuantity: 1545,
        vendorQuantity: 1593,
        variation: 3,
        // ... etc for any numeric columns
    }


    return (
        <div className="p-6" style={isMobile ? {
            borderRadius: "15px",
            paddingTop: '0px'
        } : {

            // background: theme.colors.dataTableBackground, 
            borderRadius: "15px",

        }}>
            {/* <h1 className="text-2xl font-bold mb-4">Product Inventory</h1> */}
            <ScrollableDataTable
                columns={columns as any}
                data={tableData.map((data: any) => {
                    return {
                        ...data, onApprove: (row: any) => {
                            console.log('onApprovedsfsdfsfsdfsdfsdfs', row)
                            setOpenedRow(row)
                            setShowAcceptModel(true)
                        },
                        onReject: (row: any) => {
                            console.log('onRejectsdfsdfsdfsdfsdfds', row)
                            setOpenedRow(row)

                            setShowRejectModel(true)

                        }
                    }
                })}
                height="400px"
                width="100%"
                showActions={showActions}
                showTotals={showTotals}
                totalsData={totals}
                tableStyles={{
                    headerFontSize: `${headerFontSize}px`,
                    headerFontWeight: "600",
                    rowFontSize: `${rowFontSize}px`,
                    rowFontWeight: "400",
                    svgSize: "1.2rem",
                    checkboxSize: "1.1rem",
                }}

                onRowChange={handleRowChange}
                customEditComponent={(value, row, column, onSave, onCancel) => {
                    // Define a custom editor component for the cell
                    const CustomEditor = () => {
                        const [editVal, setEditVal] = useState(String(value))
                        return (
                            <div className="flex items-center space-x-2">
                                <GenericInput
                                    autoFocus
                                    value={editVal}
                                    onChange={(e) => setEditVal(e.target.value)}
                                    onBlur={() => onSave(editVal)}
                                    type={column.type === "number" ? "number" : "text"}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    isForDataTable
                                />


                            </div>
                        )
                    }
                    return <CustomEditor />
                }}
            />

            {showAcceptModel && (
                <ConfirmModal
                    showModal={showAcceptModel}
                    title="Are you sure you want to approve this request?"
                    onClose={() => setShowAcceptModel(false)}

                    description="This action cannot be undone."
                    confirmLabel="Approve"
                    confirmVariant="approve"
                    onConfirm={(comment) => console.log("Approved with comment:", comment)}
                    headerIcon={<CheckCircle className="h-6 w-6 text-green-600" />}
                />
            )}

            {showRejectModel && (
                <ConfirmModal
                    showModal={showRejectModel}
                    onClose={() => setShowRejectModel(false)}
                    title="Are you sure you want to reject this request?"
                    description="This action cannot be undone."
                    confirmLabel="Reject"
                    confirmVariant="reject"
                    isReject
                    onConfirm={(comment) => console.log("Rejected with comment:", comment)}
                    headerIcon={<XCircle className="h-6 w-6 text-red-600" />}
                />
            )}
        </div>
    )
}