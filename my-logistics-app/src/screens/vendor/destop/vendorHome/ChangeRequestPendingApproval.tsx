"use client"

import React from "react"
import { ScrollableDataTable } from "@/components/ui/scrollable-ui"
import { Check } from "lucide-react"
import useResponsiveSize from "@/hooks/useResponsiveSize"

/** Minimal “Change Request” cell: just text. */
function ChangeRequestCell({ value }: { value: string }) {
    // No explicit font size/weight—allow the table's defaults to apply.
    return <span>{value}</span>
}

/** A pill for “Approved,” “Pending,” or “Rejected.” */
function StatusCell({ value }: { value: string }) {
    // Use simple background colors for the status pill
    let bgColor = "#ccc"
    if (value === "Approved") bgColor = "#00C851"   // green
    if (value === "Pending") bgColor = "#FF8C00"    // orange
    if (value === "Rejected") bgColor = "#FF4949"   // red

    return (
        <div
            style={{
                display: "inline-block",
                backgroundColor: bgColor,
                color: "#fff",
                borderRadius: "9999px",
                padding: "0.25rem 0.5rem",
                minWidth: "80px",
                textAlign: "center",
            }}
        >
            {value}
        </div>
    )
}

/** The Action cell: either “Reminder Sent” with a check icon or a “Send Reminder” button. */
function ActionCell({ value }: { value: string }) {
    if (value === "Reminder Sent") {
        return (
            <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                <Check size={14} />
                <span>Reminder Sent</span>
            </div>
        )
    }
    if (value === "Send Reminder") {
        return (
            <button
                style={{
                    backgroundColor: "#2563EB",
                    color: "#fff",
                    border: "none",
                    borderRadius: "9999px",
                    padding: "0.25rem 0.75rem",
                    cursor: "pointer",
                }}
                onClick={() => {
                    console.log("Send Reminder clicked!")
                }}
            >
                Send Reminder
            </button>
        )
    }
    // Fallback if needed
    return <span>{value}</span>
}

/** 
 * A parent component demonstrating usage of ScrollableDataTable 
 * for PO#, Brand, Ship-by-Date, Change Request, Status, Action.
 */
export default function PurchaseOrderTableExample() {
    // Example data
    const data = [
        {
            id: 1,
            poNumber: "2846395275",
            brand: "Brand",
            shipByDate: "4 Mar 2025",
            changeRequest: "Quantity Pending Approval",
            status: "Approved",
            action: "Reminder Sent",
        },
        {
            id: 2,
            poNumber: "2846395275",
            brand: "Brand",
            shipByDate: "4 Mar 2025",
            changeRequest: "Ship-by-Date Pending Approval",
            status: "Pending",
            action: "Send Reminder",
        },
        {
            id: 3,
            poNumber: "2846395275",
            brand: "Brand",
            shipByDate: "4 Mar 2025",
            changeRequest: "Ship-by-Date Pending Approval",
            status: "Rejected",
            action: "Send Reminder",
        },
    ]

    // Define columns, customizing “Change Request,” “Status,” and “Action.”
    const columns = [
        {
            header: "PO#",
            accessor: "poNumber",
            width: "120px",
        },
        {
            header: "Brand",
            accessor: "brand",
            width: "80px",
        },
        {
            header: "Ship-by-Date",
            accessor: "shipByDate",
            width: "120px",
        },
        {
            header: "Change Request",
            accessor: "changeRequest",
            width: "200px",
            renderCell: (value: any) => <ChangeRequestCell value={value} />,
        },
        {
            header: "Status",
            accessor: "status",
            width: "120px",
            renderCell: (value: any) => <StatusCell value={value} />,
        },
        {
            header: "Action",
            accessor: "action",
            width: "140px",
            renderCell: (value: any) => <ActionCell value={value} />,
        },
    ]

    const rowFontSize = useResponsiveSize(10, 15)
    const headerFontSize = useResponsiveSize(10, 16)

    return (
        <div style={{ padding: "1rem" }}>
            <ScrollableDataTable
                columns={columns as any}
                data={data}
                selectable
                showActions={false} // we already have a custom “Action” column
                getRowId={(row) => row.id}
                height="auto"
                width="100%"
                tableStyles={{
                    headerFontSize: `${headerFontSize}px`,
                    headerFontWeight: "600",
                    rowFontSize: `${rowFontSize}px`,
                    rowFontWeight: "400",
                    svgSize: "1.2rem",
                    checkboxSize: "1.1rem",

                }}
            />
        </div>
    )
}