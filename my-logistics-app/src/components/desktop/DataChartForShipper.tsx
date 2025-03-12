// "use client"

// import { useState } from "react"
// import { ScrollableDataTable } from "@/components/ui/scrollable-ui"
// import GenericInput from "../ui/InputField"
// import { Button } from "../ui/button"
// import { useTheme } from "@/context/ThemeContext"
// import useResponsiveSize from "@/hooks/useResponsiveSize"
// import { ConfirmModal } from "../shared/ConfirmRejectModal"
// import { CheckCircle, XCircle } from "lucide-react"
// import { useIsMobile } from "@/hooks/useMobile"
// import { CargoDateModal } from "./CargoDateModal"
// import { SelectionMode } from "@/components/ui/calenderProps"
// import { CargoDateModalMultipalPO } from "@/components/desktop/CargoDateModalMultiplePo"
// import { DocumentsDialogExample } from "@/components/desktop/uploadDocumentModal"
// import { CreateLabelModalComponent } from "./CreateLabalComponentDesktop"
// import { RequestByAir } from "./RequestByAirComponent"
// import { UploadPackingListModal } from "./UploadPackinstListModal"

// /** For each row, we track which documents are present via booleans. */
// interface DocumentsStatus {
//     commInvoice: boolean
//     marksNumbers: boolean
//     bookingConfirm: boolean
// }

// interface POData {
//     ssccLabel: string
//     poNumber: string
//     brand: string
//     shipByDate: string
//     mode: string
//     pod: string
//     totalQuantity: number
//     documents: DocumentsStatus

//     // The table also expects row-level methods for Approve/Reject/etc.
//     onApprove?: (data: any) => void
//     onReject?: (data: any) => void
//     View?: (data: any) => void
//     Download?: (data: any) => void
//     SubmitDocs?: (data: any) => void
//     PrintSSCC?: (data: any) => void
//     RequestAirShipment?: (data: any) => void
//     UploadPackingList?: (data: any) => void
//     BookCargo?: (data: any) => void
// }

// /** Renders 3 circles: green if doc is present, gray if not. */
// function DocumentsCell({ docs }: { docs: DocumentsStatus }) {
//     const circleStyle = (isPresent: boolean): React.CSSProperties => ({
//         width: "10px",
//         height: "10px",
//         borderRadius: "50%",
//         backgroundColor: isPresent ? "green" : "gray",
//     })

//     return (
//         <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
//             <div style={circleStyle(docs.commInvoice)} title="Comm. Invoice" />
//             <div style={circleStyle(docs.marksNumbers)} title="Marks & Numbers" />
//             <div style={circleStyle(docs.bookingConfirm)} title="Booking Confirm" />
//         </div>
//     )
// }
// interface ExampleScrollableTableProps {
//     showActions?: boolean;
//     showTotals?: boolean;
//     height?: string;
//     customActions?: () => React.ReactElement | null;
//     actionFlag?: string;
//     customStyle?: React.CSSProperties;
//     customContainerStyle?: React.CSSProperties;
// }

// /**
//  * ExampleScrollableTable with:
//  * - "SSCC Label" as the first (fixed) column
//  * - "Documents" column showing 3 circle indicators
//  * - The rest of your original table logic
//  */
// export default function ExampleScrollableTable({
//     showActions = true,
//     showTotals = true,
//     height = "400px",
//     customActions = () => null,
//     actionFlag,
//     customStyle,
//     customContainerStyle,
// }: ExampleScrollableTableProps) {
//     const { theme } = useTheme()
//     const isMobile = useIsMobile()

//     // Example data with new "documents" property
//     const [tableData, setTableData] = useState<POData[]>([
//         {
//             ssccLabel: "SSCC-001",
//             poNumber: "2846395275",
//             brand: "Brand",
//             shipByDate: "4 Mar 2025",
//             mode: "Sea",
//             pod: "AU-MEL",
//             totalQuantity: 5678,
//             documents: { commInvoice: true, marksNumbers: true, bookingConfirm: false },
//         },
//         {
//             ssccLabel: "SSCC-002",
//             poNumber: "2846395275",
//             brand: "Brand",
//             shipByDate: "4 Mar 2025",
//             mode: "Sea",
//             pod: "SG-SIN",
//             totalQuantity: 5678,
//             documents: { commInvoice: true, marksNumbers: false, bookingConfirm: true },
//         },
//         {
//             ssccLabel: "SSCC-003",
//             poNumber: "2846395275",
//             brand: "Brand",
//             shipByDate: "4 Mar 2025",
//             mode: "Sea",
//             pod: "SG-SIN",
//             totalQuantity: 5678,
//             documents: { commInvoice: false, marksNumbers: false, bookingConfirm: false },
//         },
//         {
//             ssccLabel: "SSCC-004",
//             poNumber: "2846395275",
//             brand: "Brand",
//             shipByDate: "4 Mar 2025",
//             mode: "Sea",
//             pod: "SG-SIN",
//             totalQuantity: 5678,
//             documents: { commInvoice: true, marksNumbers: true, bookingConfirm: true },
//         },
//         {
//             ssccLabel: "SSCC-005",
//             poNumber: "2846395275",
//             brand: "Brand",
//             shipByDate: "4 Mar 2025",
//             mode: "Sea",
//             pod: "SG-SIN",
//             totalQuantity: 5678,
//             documents: { commInvoice: true, marksNumbers: false, bookingConfirm: false },
//         },
//         {
//             ssccLabel: "SSCC-006",
//             poNumber: "2846395275",
//             brand: "Brand",
//             shipByDate: "4 Mar 2025",
//             mode: "Sea",
//             pod: "SG-SIN",
//             totalQuantity: 5678,
//             documents: { commInvoice: false, marksNumbers: true, bookingConfirm: false },
//         },
//         {
//             ssccLabel: "SSCC-007",
//             poNumber: "2846395275",
//             brand: "Brand",
//             shipByDate: "4 Mar 2025",
//             mode: "Sea",
//             pod: "SG-SIN",
//             totalQuantity: 5678,
//             documents: { commInvoice: true, marksNumbers: true, bookingConfirm: false },
//         },
//         {
//             ssccLabel: "SSCC-008",
//             poNumber: "2846395275",
//             brand: "Brand",
//             shipByDate: "4 Mar 2025",
//             mode: "Sea",
//             pod: "SG-SIN",
//             totalQuantity: 5678,
//             documents: { commInvoice: false, marksNumbers: false, bookingConfirm: true },
//         },
//     ])

//     // For row selection
//     const [selectedRows, setSelectedRows] = useState<any[]>([])

//     // Confirm/Reject modals
//     const [showAcceptModel, setShowAcceptModel] = useState(false)
//     const [showRejectModel, setShowRejectModel] = useState(false)
//     const [openedRow, setOpenedRow] = useState<any>(null)

//     // Example usage of the cargo booking / documents modals
//     const [isBookCargoModalOpen, setIsBookCargoModalOpen] = useState(false)
//     const [isMultiplBookingModalOpen, setIsMultiplBookingModalOpen] = useState(false)
//     const [selectionMode, setSelectionMode] = useState<SelectionMode>("range")
//     const [isDocumentListupload, setIsDocumentListupload] = useState(false)
//     const [isCreateLabelModalComponent, setIsCreateLabelModalComponent] = useState(false)
//     const [isRequestAir, setIsrequestAir] = useState(false)
//     const [uploadPackinglistModal, setUploadPackinglistModal] = useState(false)

//     // The table calls this when a row is updated
//     const handleRowChange = (updatedRow: POData) => {
//         setTableData((prevData) =>
//             prevData.map((row) =>
//                 row.ssccLabel === updatedRow.ssccLabel ? updatedRow : row
//             )
//         )
//     }

//     // For responsive fonts
//     const rowFontSize = useResponsiveSize(10, 15)
//     const headerFontSize = useResponsiveSize(10, 16)

//     // Example totals row
//     const totals = {
//         totalQuantity: 5678 * 8, // e.g. sum for demonstration
//     }

//     // Example date arrays
//     const availableDates = [
//         new Date(2025, 1, 10),
//         new Date(2025, 1, 11),
//         new Date(2025, 1, 12),
//         new Date(2025, 1, 15),
//         new Date(2025, 1, 16),
//         new Date(2025, 1, 17),
//         new Date(2025, 1, 18),
//         new Date(2025, 1, 21),
//         new Date(2025, 1, 22),
//         new Date(2025, 1, 24),
//         new Date(2025, 1, 25),
//         new Date(2025, 1, 26),
//     ]

//     const blockedDates = [
//         new Date(2025, 1, 13),
//         new Date(2025, 1, 14),
//         new Date(2025, 1, 19),
//         new Date(2025, 1, 20),
//         new Date(2025, 1, 23),
//         new Date(2025, 1, 27),
//         new Date(2025, 1, 28),
//     ]

//     // Table columns: SSCC Label is fixed, plus Documents column with custom cell
//     const columns = [
//         {
//             header: "SSCC Label",
//             accessor: "ssccLabel",
//             width: "130px",
//             fixed: true,
//         },
//         {
//             header: "PO#",
//             accessor: "poNumber",
//             width: "120px",
//         },
//         {
//             header: "Brand",
//             accessor: "brand",
//             width: "100px",
//         },
//         {
//             header: "Ship-by-Date",
//             accessor: "shipByDate",
//             width: "120px",
//         },
//         {
//             header: "Mode",
//             accessor: "mode",
//             width: "100px",
//         },
//         {
//             header: "POD",
//             accessor: "pod",
//             width: "100px",
//         },
//         {
//             header: "Total Quantity",
//             accessor: "totalQuantity",
//             width: "120px",
//         },
//         {
//             header: "Documents",
//             accessor: "documents",
//             width: "180px",
//             renderCell: (value: DocumentsStatus) => <DocumentsCell docs={value} />,
//         },
//     ]

//     const onSelectionChange = (selected: POData[]) => {
//         setSelectedRows(selected)
//     }

//     return (
//         <div
//             className="p-6"
//             style={
//                 isMobile
//                     ? {
//                         borderRadius: "15px",
//                         paddingTop: "0px",
//                         ...customContainerStyle,
//                     }
//                     : {
//                         borderRadius: "15px",
//                         ...customContainerStyle,
//                     }
//             }
//         >
//             <ScrollableDataTable
//                 columns={columns as any}
//                 data={tableData.map((row: POData) => ({
//                     ...row,
//                     onApprove: (r: any) => {
//                         console.log("onApprove", r)
//                         setOpenedRow(r)
//                         setShowAcceptModel(true)
//                     },
//                     onReject: (r: any) => {
//                         console.log("onReject", r)
//                         setOpenedRow(r)
//                         setShowRejectModel(true)
//                     },
//                     View: (r: any) => {
//                         console.log("View", r)
//                         setOpenedRow(r)
//                     },
//                     Download: (r: any) => {
//                         console.log("Download", r)
//                         setOpenedRow(r)
//                     },
//                     SubmitDocs: (r: any) => {
//                         console.log("SubmitDocs", r)
//                         setOpenedRow(r)
//                         setIsDocumentListupload(true)
//                     },
//                     PrintSSCC: (r: any) => {
//                         console.log("PrintSSCC", r)
//                         setOpenedRow(r)
//                         setIsCreateLabelModalComponent(true)
//                     },
//                     RequestAirShipment: (r: any) => {
//                         console.log("RequestAirShipment", r)
//                         setOpenedRow(r)
//                         setIsrequestAir(true)
//                     },
//                     UploadPackingList: (r: any) => {
//                         console.log("UploadPackingList", r)
//                         setOpenedRow(r)
//                         setUploadPackinglistModal(true)
//                     },
//                     BookCargo: (r: any) => {
//                         console.log("BookCargo", r)
//                         setOpenedRow(r)
//                         if (selectedRows.length > 1) {
//                             setIsMultiplBookingModalOpen(true)
//                         } else {
//                             setIsBookCargoModalOpen(true)
//                         }
//                     },
//                 }))}
//                 height={height}
//                 width="100%"
//                 showActions={showActions}
//                 showTotals={showTotals}
//                 totalsData={totals}
//                 onSelectionChange={onSelectionChange}
//                 tableStyles={{
//                     headerFontSize: `${headerFontSize}px`,
//                     headerFontWeight: "600",
//                     rowFontSize: `${rowFontSize}px`,
//                     rowFontWeight: "400",
//                     svgSize: "1.2rem",
//                     checkboxSize: "1.1rem",
//                     ...customStyle,
//                 }}
//                 actionFlag={actionFlag}
//                 onRowChange={handleRowChange}
//                 customActions={customActions}
//                 customEditComponent={(value, row, column, onSave, onCancel) => {
//                     const [editVal, setEditVal] = useState(String(value))
//                     return (
//                         <div className="flex items-center space-x-2">
//                             <GenericInput
//                                 autoFocus
//                                 value={editVal}
//                                 onChange={(e) => setEditVal(e.target.value)}
//                                 onBlur={() => onSave(editVal)}
//                                 type={column.type === "number" ? "number" : "text"}
//                                 className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                 isForDataTable
//                             />
//                         </div>
//                     )
//                 }}
//             />

//             {/* Confirm (Approve) modal */}
//             {showAcceptModel && (
//                 <ConfirmModal
//                     showModal={showAcceptModel}
//                     title="Are you sure you want to approve this request?"
//                     onClose={() => setShowAcceptModel(false)}
//                     description="This action cannot be undone."
//                     confirmLabel="Approve"
//                     confirmVariant="approve"
//                     onConfirm={(comment) => console.log("Approved with comment:", comment)}
//                     headerIcon={<CheckCircle className="h-6 w-6 text-green-600" />}
//                 />
//             )}

//             {/* Reject modal */}
//             {showRejectModel && (
//                 <ConfirmModal
//                     showModal={showRejectModel}
//                     onClose={() => setShowRejectModel(false)}
//                     title="Are you sure you want to reject this request?"
//                     description="This action cannot be undone."
//                     confirmLabel="Reject"
//                     confirmVariant="reject"
//                     isReject
//                     onConfirm={(comment) => console.log("Rejected with comment:", comment)}
//                     headerIcon={<XCircle className="h-6 w-6 text-red-600" />}
//                 />
//             )}

//             {/* Single “Book Cargo” modal */}
//             {isBookCargoModalOpen && (
//                 <CargoDateModal
//                     isOpen={isBookCargoModalOpen}
//                     onClose={() => setIsBookCargoModalOpen(false)}
//                     onConfirm={(date: any) => {
//                         console.log("Selected date:", date)
//                         setIsBookCargoModalOpen(false)
//                     }}
//                     poNumber="284639525"
//                     mode={selectionMode}
//                     availableDates={availableDates}
//                     blockedDates={blockedDates}
//                 />
//             )}

//             {/* Multiple “Book Cargo” modal */}
//             {isMultiplBookingModalOpen && (
//                 <CargoDateModalMultipalPO
//                     isOpen={isMultiplBookingModalOpen}
//                     onClose={() => setIsMultiplBookingModalOpen(false)}
//                     onConfirm={(date: any) => {
//                         console.log("Selected date:", date)
//                         setIsMultiplBookingModalOpen(false)
//                     }}
//                     poNumber="284639525"
//                     mode={selectionMode}
//                     availableDates={availableDates}
//                     blockedDates={blockedDates}
//                 />
//             )}

//             {/* Upload Documents */}
//             {isDocumentListupload && (
//                 <DocumentsDialogExample
//                     open={isDocumentListupload}
//                     setOpen={setIsDocumentListupload}
//                 />
//             )}

//             {/* Create SSCC Label */}
//             {isCreateLabelModalComponent && (
//                 <CreateLabelModalComponent
//                     open={isCreateLabelModalComponent}
//                     setOpen={setIsCreateLabelModalComponent}
//                 />
//             )}

//             {/* Request by Air */}
//             {isRequestAir && (
//                 <RequestByAir open={isRequestAir} setOpen={setIsrequestAir} />
//             )}

//             {/* Upload Packing List */}
//             {uploadPackinglistModal && (
//                 <UploadPackingListModal
//                     open={uploadPackinglistModal}
//                     setOpen={setUploadPackinglistModal}
//                 />
//             )}
//         </div>
//     )
// }


"use client"

import { useState } from "react"
import { ScrollableDataTable } from "@/components/ui/scrollable-ui"
// Make sure this is your updated ScrollableDataTable 
// that supports `showDocumentsSubcolumns` prop.
import GenericInput from "../ui/InputField"
import { Button } from "../ui/button"
import { useTheme } from "@/context/ThemeContext"
import useResponsiveSize from "@/hooks/useResponsiveSize"
import { ConfirmModal } from "../shared/ConfirmRejectModal"
import { CheckCircle, XCircle } from "lucide-react"
import { useIsMobile } from "@/hooks/useMobile"
import { CargoDateModal } from "./CargoDateModal"
import { SelectionMode } from "@/components/ui/calenderProps"
import { CargoDateModalMultipalPO } from "@/components/desktop/CargoDateModalMultiplePo"
import { DocumentsDialogExample } from "@/components/desktop/uploadDocumentModal"
import { CreateLabelModalComponent } from "./CreateLabalComponentDesktop"
import { RequestByAir } from "./RequestByAirComponent"
import { UploadPackingListModal } from "./UploadPackinstListModal"

/** For each row, we track which documents are present via booleans. */
interface DocumentsStatus {
    commInvoice: boolean
    marksNumbers: boolean
    bookingConfirm: boolean
}

interface POData {
    ssccLabel: string
    poNumber: string
    brand: string
    shipByDate: string
    mode: string
    pod: string
    totalQuantity: number
    documents: DocumentsStatus

    // Row-level methods for Approve/Reject, etc.
    onApprove?: (data: any) => void
    onReject?: (data: any) => void
    View?: (data: any) => void
    Download?: (data: any) => void
    SubmitDocs?: (data: any) => void
    PrintSSCC?: (data: any) => void
    RequestAirShipment?: (data: any) => void
    UploadPackingList?: (data: any) => void
    BookCargo?: (data: any) => void
}

/** Example parent component that uses the multi‐row “Documents” header. */
export default function ExampleScrollableTableWithSubcolumns() {
    const { theme } = useTheme()
    const isMobile = useIsMobile()

    // Example data
    const [tableData, setTableData] = useState<POData[]>([
        {
            ssccLabel: "SSCC-001",
            poNumber: "2846395275",
            brand: "Brand",
            shipByDate: "4 Mar 2025",
            mode: "Sea",
            pod: "AU-MEL",
            totalQuantity: 5678,
            documents: { commInvoice: true, marksNumbers: true, bookingConfirm: false },
        },
        {
            ssccLabel: "SSCC-002",
            poNumber: "2846395275",
            brand: "Brand",
            shipByDate: "4 Mar 2025",
            mode: "Sea",
            pod: "SG-SIN",
            totalQuantity: 5678,
            documents: { commInvoice: true, marksNumbers: false, bookingConfirm: true },
        },
        // ... more rows ...
    ])

    // Example “selection” & “modal” states
    const [selectedRows, setSelectedRows] = useState<any[]>([])
    const [showAcceptModel, setShowAcceptModel] = useState(false)
    const [showRejectModel, setShowRejectModel] = useState(false)
    const [openedRow, setOpenedRow] = useState<any>(null)

    const [isBookCargoModalOpen, setIsBookCargoModalOpen] = useState(false)
    const [isMultiplBookingModalOpen, setIsMultiplBookingModalOpen] = useState(false)
    const [selectionMode, setSelectionMode] = useState<SelectionMode>("range")
    const [isDocumentListupload, setIsDocumentListupload] = useState(false)
    const [isCreateLabelModalComponent, setIsCreateLabelModalComponent] = useState(false)
    const [isRequestAir, setIsrequestAir] = useState(false)
    const [uploadPackinglistModal, setUploadPackinglistModal] = useState(false)

    // Called when a row is updated
    const handleRowChange = (updatedRow: POData) => {
        setTableData((prev) =>
            prev.map((row) => (row.ssccLabel === updatedRow.ssccLabel ? updatedRow : row))
        )
    }

    // For responsive font sizes
    const rowFontSize = useResponsiveSize(10, 15)
    const headerFontSize = useResponsiveSize(10, 16)

    // Example totals row
    const totals = {
        totalQuantity: 5678 * 2, // sum for demonstration
    }

    // Example columns (notice we do NOT have a "Documents" column, 
    // because we’re showing them as sub‐columns instead):
    const columns = [
        {
            header: "SSCC Label",
            accessor: "ssccLabel",
            width: "130px",
            fixed: true,
        },
        {
            header: "PO#",
            accessor: "poNumber",
            width: "120px",
        },
        {
            header: "Brand",
            accessor: "brand",
            width: "100px",
        },
        {
            header: "Ship-by-Date",
            accessor: "shipByDate",
            width: "120px",
        },
        {
            header: "Mode",
            accessor: "mode",
            width: "100px",
        },
        {
            header: "POD",
            accessor: "pod",
            width: "100px",
        },
        {
            header: "Total Quantity",
            accessor: "totalQuantity",
            width: "120px",
        },
        // Notice: we do NOT add a { header: "Documents", ... } here,
        // because the multi‐row approach will handle that.
    ]

    // For the table’s selection callback
    const onSelectionChange = (selected: POData[]) => {
        setSelectedRows(selected)
    }

    return (
        <div className="p-6" style={{ borderRadius: "15px" }}>
            <ScrollableDataTable
                columns={columns as any}
                data={tableData.map((row: POData) => ({
                    ...row,
                    onApprove: (r: any) => {
                        console.log("Approved", r)
                        setOpenedRow(r)
                        setShowAcceptModel(true)
                    },
                    onReject: (r: any) => {
                        console.log("Rejected", r)
                        setOpenedRow(r)
                        setShowRejectModel(true)
                    },
                    View: (r: any) => {
                        console.log("View", r)
                        setOpenedRow(r)
                    },
                    Download: (r: any) => {
                        console.log("Download", r)
                        setOpenedRow(r)
                    },
                    SubmitDocs: (r: any) => {
                        console.log("SubmitDocs", r)
                        setOpenedRow(r)
                        setIsDocumentListupload(true)
                    },
                    PrintSSCC: (r: any) => {
                        console.log("PrintSSCC", r)
                        setOpenedRow(r)
                        setIsCreateLabelModalComponent(true)
                    },
                    RequestAirShipment: (r: any) => {
                        console.log("RequestAirShipment", r)
                        setOpenedRow(r)
                        setIsrequestAir(true)
                    },
                    UploadPackingList: (r: any) => {
                        console.log("UploadPackingList", r)
                        setOpenedRow(r)
                        setUploadPackinglistModal(true)
                    },
                    BookCargo: (r: any) => {
                        console.log("BookCargo", r)
                        setOpenedRow(r)
                        if (selectedRows.length > 1) {
                            setIsMultiplBookingModalOpen(true)
                        } else {
                            setIsBookCargoModalOpen(true)
                        }
                    },
                }))}
                // Table styling & behavior
                height="400px"
                width="100%"
                showActions={true}
                showTotals={true}
                totalsData={totals}
                onSelectionChange={onSelectionChange}
                onRowChange={handleRowChange}
                // Pass the new prop "showDocumentsSubcolumns" => true
                showDocumentsSubcolumns={true}
                tableStyles={{
                    headerFontSize: `${headerFontSize}px`,
                    headerFontWeight: "600",
                    rowFontSize: `${rowFontSize}px`,
                    rowFontWeight: "400",
                    svgSize: "1.2rem",
                    checkboxSize: "1.1rem",
                }}
            // You can pass "actionFlag", "customActions", etc. as needed
            />

            {/* Approve modal */}
            {showAcceptModel && (
                <ConfirmModal
                    showModal={showAcceptModel}
                    title="Approve?"
                    onClose={() => setShowAcceptModel(false)}
                    description="Confirm approval?"
                    confirmLabel="Approve"
                    confirmVariant="approve"
                    onConfirm={(comment) => console.log("Approved with comment:", comment)}
                    headerIcon={<CheckCircle className="h-6 w-6 text-green-600" />}
                />
            )}

            {/* Reject modal */}
            {showRejectModel && (
                <ConfirmModal
                    showModal={showRejectModel}
                    onClose={() => setShowRejectModel(false)}
                    title="Reject?"
                    description="Confirm rejection?"
                    confirmLabel="Reject"
                    confirmVariant="reject"
                    isReject
                    onConfirm={(comment) => console.log("Rejected with comment:", comment)}
                    headerIcon={<XCircle className="h-6 w-6 text-red-600" />}
                />
            )}

            {/* Book Cargo (single) */}
            {isBookCargoModalOpen && (
                <CargoDateModal
                    isOpen={isBookCargoModalOpen}
                    onClose={() => setIsBookCargoModalOpen(false)}
                    onConfirm={(date: any) => {
                        console.log("Selected date:", date)
                        setIsBookCargoModalOpen(false)
                    }}
                    poNumber="284639525"
                    mode={selectionMode}
                    availableDates={[new Date()]} // example
                    blockedDates={[]}
                />
            )}

            {/* Book Cargo (multiple) */}
            {isMultiplBookingModalOpen && (
                <CargoDateModalMultipalPO
                    isOpen={isMultiplBookingModalOpen}
                    onClose={() => setIsMultiplBookingModalOpen(false)}
                    onConfirm={(date: any) => {
                        console.log("Selected date:", date)
                        setIsMultiplBookingModalOpen(false)
                    }}
                    poNumber="284639525"
                    mode={selectionMode}
                    availableDates={[new Date()]}
                    blockedDates={[]}
                />
            )}

            {/* Upload Docs */}
            {isDocumentListupload && (
                <DocumentsDialogExample
                    open={isDocumentListupload}
                    setOpen={setIsDocumentListupload}
                />
            )}

            {/* Create SSCC Label */}
            {isCreateLabelModalComponent && (
                <CreateLabelModalComponent
                    open={isCreateLabelModalComponent}
                    setOpen={setIsCreateLabelModalComponent}
                />
            )}

            {/* Request by Air */}
            {isRequestAir && (
                <RequestByAir open={isRequestAir} setOpen={setIsrequestAir} />
            )}

            {/* Upload Packing List */}
            {uploadPackinglistModal && (
                <UploadPackingListModal
                    open={uploadPackinglistModal}
                    setOpen={setUploadPackinglistModal}
                />
            )}
        </div>
    )
}