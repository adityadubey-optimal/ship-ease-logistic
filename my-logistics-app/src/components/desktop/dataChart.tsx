

"use client"

import { useState } from "react"
import { ScrollableDataTable } from "@/components/ui/scrollable-ui"

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
    lastUpdated: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString().split("T")[0],
})

export default function ExampleScrollableTable() {
    const [tableData, setTableData] = useState<ProductData[]>(Array(20).fill(null).map(generateRandomData))

    const handleRowChange = (updatedRow: ProductData) => {
        setTableData((prevData) => prevData.map((row) => (row.id === updatedRow.id ? updatedRow : row)))
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Product Inventory</h1>
            <ScrollableDataTable
                columns={columns as any}
                data={tableData}
                height="400px"
                width="100%"
                tableStyles={{
                    headerFontSize: '1.1rem',
                    headerFontWeight: '600',
                    rowFontSize: '0.9rem',
                    rowFontWeight: '400',
                    svgSize: '1.2rem',
                    checkboxSize: '1.1rem',
                }}
                onApprove={(row: any) => console.log("Approve", row)}
                onReject={(row: any) => console.log("Reject", row)}
                onRowChange={handleRowChange}
            />
        </div>
    )
}

