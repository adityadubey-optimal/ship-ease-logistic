"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
// or wherever you import your Shadcn dialog from
import { Button } from "@/components/ui/button"
import React from "react"
import DocumentList from "./DocumentationListUpload"

import { ThemedSonnerToaster } from "@/components/ui/toasterComponent"
import { useTheme } from "@/context/ThemeContext"
import DocumentHeader from "@/components/desktop/sectionHeader"
import DOcumentHeaderMobile from '@/components/mobile/sectionHeaderMobile'
import scanIcon from '@/assets/Scanning QR code.svg';
import { SSCCLabelForm } from "@/components/ui/CrearLabelForm"
import { toast } from "sonner"
import useResponsiveSize from "@/hooks/useResponsiveSize"
import AcceptRejectButton from "../ui/AcceptRejectButton"
import OrderHeader from "@/components/desktop/DataTableInfoSection"
import DataChart from "@/components/desktop/dataChart"
import Box from "@/assets/box.svg"
import { DataTableForPo } from "@/components/desktop/DataTableForSkuDesktop"
import { DataTableForPoMobile } from "@/components/mobile/DataTableForSkuMobile"
import { useIsMobile } from "@/hooks/useMobile"


interface DocumentsDialogExampleProps {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    showDownloadButton?: boolean
}






export function UploadPackingListModal({ open, setOpen }: DocumentsDialogExampleProps) {
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
    return isMobile ? (
        <>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent
                    className="sm:max-w-full w-[90%] h-[90%] overflow-auto"
                    style={{
                        backgroundColor: theme.colors.thertiary,
                        borderRadius: 25,
                        display: 'flex',
                        flexDirection: 'column',
                        zIndex: 9999999999,
                    }}
                >
                    {/* You can add a top bar or anything you wish */}

                    <div className="flex-1 flex flex-col items-center justify-center px-4">
                        <section className="mb-8" style={{ width: '85vw' }}>
                            <DOcumentHeaderMobile
                                Icon={<img src={Box} alt="Ship illustration" className="w-10 h-10 object-contain" style={{ height: '3.5rem', width: '3.5rem   ' }} />}
                                title="SKU Packing List"
                                subtitle="Packing list as uploaded by the vendor"
                                showSeeMore={false}
                                onSeeMoreClick={() => console.log('See More clicked')}
                                containerStyle={{ borderRadius: '35px' }}
                            />
                            <DataTableForPoMobile />
                        </section>





                        <section className="mb-8" style={{ width: '85vw' }}>

                            <DataTableForPoMobile showDetailedPackingList={true} />
                        </section>
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
                        flexDirection: 'column',
                        zIndex: 9999999999,
                    }}
                >
                    {/* You can add a top bar or anything you wish */}

                    <div className="flex-1 flex flex-col items-center justify-center px-4">
                        <section className="mb-8">
                            <DocumentHeader
                                Icon={<img src={Box} alt="Ship illustration" className="w-10 h-10 object-contain" style={{ height: '3.5rem', width: '3.5rem   ' }} />}
                                title="SKU Packing List"
                                subtitle="Packing list as uploaded by the vendor"
                                showSeeMore={false}
                                onSeeMoreClick={() => console.log('See More clicked')}
                                containerStyle={{ borderRadius: '35px' }}
                            />
                            <DataTableForPo />
                        </section>





                        <section className="mb-8">

                            <DataTableForPo showDetailedPackingList={true} />
                        </section>
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