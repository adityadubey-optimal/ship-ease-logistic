"use client"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface QuantityRow {
    size: string
    poQuantity: number
    vendorQuantity: number
    variation: number
    status: "approved" | "pending"
}

export function QuantityTable() {
    const data: QuantityRow[] = [
        { size: "XS", poQuantity: 134, vendorQuantity: 136, variation: 2, status: "approved" },
        { size: "S", poQuantity: 145, vendorQuantity: 149, variation: 3, status: "approved" },
        { size: "M", poQuantity: 678, vendorQuantity: 678, variation: 0, status: "approved" },
        { size: "L", poQuantity: 432, vendorQuantity: 471, variation: 9, status: "pending" },
        { size: "XL", poQuantity: 89, vendorQuantity: 90, variation: 1, status: "approved" },
        { size: "XXL", poQuantity: 67, vendorQuantity: 69, variation: 3, status: "approved" },
    ]

    const totalRow = {
        size: "Total",
        poQuantity: 1545,
        vendorQuantity: 1593,
        variation: 3,
        status: "approved",
    }

    return (
        <div className="w-full overflow-x-auto rounded-lg">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-[#E2E2FC]">
                        <th className="p-2 text-left">
                            <input type="checkbox" className="rounded border-gray-300" />
                        </th>
                        <th className="p-2 text-left font-semibold" style={{
                            fontSize: '10px',
                            fontWeight: '600'
                        }}>Size</th>
                        <th className="p-2 text-left font-semibold" style={{
                            fontSize: '10px',
                            fontWeight: '600'
                        }}>PO Quantity</th>
                        <th className="p-2 text-left font-semibold" style={{
                            fontSize: '10px',
                            fontWeight: '600'
                        }}>Vendor Packed Quantity</th>
                        <th className="p-2 text-left font-semibold" style={{
                            fontSize: '10px',
                            fontWeight: '600'
                        }}>Quantity Variation</th>
                        <th className="p-2 text-right font-semibold" style={{
                            fontSize: '10px',
                            fontWeight: '600'
                        }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={row.size} className="border-b border-gray-100 bg-white">
                            <td className="p-2">
                                <input type="checkbox" className="rounded border-gray-300" />
                            </td>
                            <td className="p-2">{row.size}</td>
                            <td className="p-2">{row.poQuantity}</td>
                            <td className="p-2">{row.vendorQuantity}</td>
                            <td className="p-2">
                                <span className={row.variation > 3 ? "text-red-500" : "text-green-500"}>{row.variation}%</span>
                            </td>
                            <td className="p-2 text-right">
                                {row.status === "approved" ? (
                                    <span className="px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm">Approved</span>
                                ) : (
                                    <div className="flex gap-2 justify-end">
                                        <Button variant="icon" size="mobile" className="h-8 w-8 bg-red-100 hover:bg-red-200">
                                            <X className="h-4 w-4 text-red-600" />
                                        </Button>
                                        <Button variant="icon" size="mobile" className="h-8 w-8 bg-green-100 hover:bg-green-200">
                                            <Check className="h-4 w-4 text-green-600" />
                                        </Button>
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                    <tr className="border-t border-gray-200 bg-white font-semibold">
                        <td className="p-2">
                            <input type="checkbox" className="rounded border-gray-300" disabled />
                        </td>
                        <td className="p-2">{totalRow.size}</td>
                        <td className="p-2">{totalRow.poQuantity}</td>
                        <td className="p-2">{totalRow.vendorQuantity}</td>
                        <td className="p-2">
                            <span className="text-green-500">{totalRow.variation}%</span>
                        </td>
                        <td className="p-2"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

