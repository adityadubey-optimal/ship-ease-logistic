"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
// or wherever you import your Shadcn dialog from
import { Button } from "@/components/ui/button"
import React from "react"
import DocumentList from "./DocumentationListUpload"

import { ThemedSonnerToaster } from "@/components/ui/toasterComponent"
import { useTheme } from "@/context/ThemeContext"
import DocumentHeader from "@/components/desktop/sectionHeader"
import scanIcon from '@/assets/Scanning QR code.svg';
import { SSCCLabelForm } from "@/components/ui/CrearLabelForm"
import { toast } from "sonner"
import useResponsiveSize from "@/hooks/useResponsiveSize"
import AcceptRejectButton from "../ui/AcceptRejectButton"
import OrderHeader from "@/components/desktop/DataTableInfoSection"
import OrderHeaderMobile from "@/components/mobile/requestByAirOrderHEader"
import DataChart from "@/components/desktop/dataChart"
import { useIsMobile } from "@/hooks/useMobile"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"

interface DocumentsDialogExampleProps {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}






export function RequestByAir({ open, setOpen }: DocumentsDialogExampleProps) {
    const { theme } = useTheme()
    const isMobile = useIsMobile()
    const orderDetails = {
        totalPoQuantity: 1545,
        totalPackedQuantity: 1545,
        netWeight: 1545,
        grossWeight: 1545,
        cartonQuantity: 20,
        cartonMeasurement: 20,
    }
    return isMobile ? (<>

        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent
                className="sm:max-w-full w-[90%] h-[90%] overflow-auto"
                style={{
                    backgroundColor: theme.colors.thertiary,
                    borderRadius: 25,
                    display: 'flex',
                    flexDirection: 'column',
                    zIndex: 999999999999,
                    padding: '1rem 0rem 0 0'
                }}
            >
                {/* You can add a top bar or anything you wish */}

                <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="px-4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h1 className="text-2xl font-bold mb-4" style={{ fontSize: '1rem' }}>PO: 23423423545</h1>
                        <h2 className="text-lg font-medium mb-4" style={{ fontSize: `${useResponsiveSize(0.75, 1.7)}rem`, fontWeight: 500, color: theme.colors.calenderHeader }}>
                            Select Air Quantities for Air Shipment Request
                        </h2>
                    </div>
                    <div className="" style={{ width: '100%', backgroundColor: theme.colors.secondary, borderRadius: "25px" }}>
                        <div style={{ borderRadius: '25px', }}>
                            <OrderHeaderMobile
                                totalQuantity={1545}
                                cartonQuantity={20}
                                netWeight="Kgs"
                                grossWeight="kgs"
                                cartonMeasurement=""
                                styles={{

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
                    <div className="flex gap-4 p-4 justify-center" style={{ width: '100%' }}>
                        <AcceptRejectButton />
                    </div>
                </div>


            </DialogContent>
        </Dialog >

        {/* Place your ThemedToaster at root level so the toasts can appear */}
        < ThemedSonnerToaster toastBgColor="#333" toastTextColor="#fff" position="top-right" />
    </>
    ) : (
        <>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent
                    className="sm:max-w-full w-[90%] h-[90%] overflow-auto"
                    style={{
                        backgroundColor: theme.colors.thertiary,
                        borderRadius: 25,
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    {/* You can add a top bar or anything you wish */}

                    <div className="flex-1 flex flex-col items-center justify-center px-4">
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <h1 className="text-2xl font-bold mb-4">PO: 23423423545</h1>
                            <h2 className="text-lg font-medium mb-4" style={{ fontSize: `${useResponsiveSize(1.3, 1.7)}rem`, fontWeight: 500, color: theme.colors.calenderHeader }}>
                                Select Air Quantities for Air Shipment Request
                            </h2>
                        </div>
                        <div className="p-4" style={{ width: '80%' }}>
                            <div style={{ background: theme.colors.guageheaderColor, borderRadius: '25px' }}>
                                <OrderHeader
                                    poNumber="2846395275"
                                    buyer="Sample Buyer"
                                    brand="Sample Brand"
                                    productName="Men's Long Sleeve Shirt 100% Cotton"
                                    color="Navy"
                                    showActionButton={false}
                                    colors={["Navy", "Black", "White", "Red"]}
                                    orderDetails={orderDetails}
                                    onAction={() => console.log("Action clicked")}
                                    ActionButtonText={`Action Required, Approve Ship-By-Date`}
                                    styles={{
                                        backgroundColor: theme.colors.guageheaderColor,
                                        textColor: "#1E1E1E",
                                        fontSize: "16px",
                                        fontWeight: "400",
                                        actionButtonColor: "#FFE5E5",
                                        actionButtonTextColor: "#1E1E1E",
                                    }}
                                    showBrand={false}
                                    showBuyer={false}
                                    showPo={false}
                                    selectionLabelText={'Select Color'}
                                    selectionLabelStyle={{
                                        fontSize: '1rem',
                                        fontWeight: 650
                                    }}
                                />
                                <DataChart />
                            </div>

                        </div>
                        <div className="flex gap-4 p-4 justify-center" style={{ width: '100%' }}>
                            <AcceptRejectButton />
                        </div>
                    </div>


                </DialogContent>
            </Dialog >

            {/* Place your ThemedToaster at root level so the toasts can appear */}
            < ThemedSonnerToaster toastBgColor="#333" toastTextColor="#fff" position="top-right" />
        </>
    )
}