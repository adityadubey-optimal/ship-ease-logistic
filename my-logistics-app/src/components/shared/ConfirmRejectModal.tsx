"use client"

import * as React from "react"
import { CheckCircle, XCircle } from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import useResponsiveSize from "@/hooks/useResponsiveSize"
import { useTheme } from "@/context/ThemeContext"

interface ConfirmModalProps {
    /** Controls whether the dialog is shown. If true, the dialog is open. */
    showModal: boolean
    /** Called when the user closes the dialog (e.g., clicks "Cancel" or outside). */
    onClose: () => void

    /** The text shown in the header, e.g. "Are you sure you want to approve this request?" */
    title?: string
    /** Additional description text, e.g. "This action cannot be undone." */
    description?: string

    /** Label for the confirmation button, e.g. "Approve" or "Reject" */
    confirmLabel?: string
    /** The variant for the confirmation button, e.g. "approve", "reject", "primary", or "icon" */
    confirmVariant?: "approve" | "reject" | "primary" | "icon"

    /** Callback when the user confirms the action. Receives the comment string. */
    onConfirm: (comment: string) => void

    /** Optional: Provide an initial comment or other defaults. */
    initialComment?: string

    /** Optional icon to display in the header, e.g. CheckCircle or XCircle. */
    headerIcon?: React.ReactNode

    isReject?: boolean
}

export function ConfirmModal({
    showModal,
    onClose,
    title = "Are you sure you want to proceed?",
    description = "This action cannot be undone.",
    confirmLabel = "Confirm",
    confirmVariant = "primary",
    onConfirm,
    initialComment = "",
    headerIcon,
    isReject = false,
}: ConfirmModalProps) {
    const { theme } = useTheme()
    const [comment, setComment] = React.useState(initialComment)

    // Sync internal comment state if initialComment changes externally
    React.useEffect(() => {
        setComment(initialComment)
    }, [initialComment])

    // We rely on showModal from the parent; no internal trigger here.
    // If the user closes the dialog, we call onClose to inform the parent.
    const handleChange = (open: boolean) => {
        if (!open) {
            onClose()
        }
    }

    // Font sizes
    const baseFontSize = useResponsiveSize(14, 18)
    const headingFontSize = useResponsiveSize(16, 22)

    const handleConfirm = () => {
        onConfirm(comment)
        onClose() // close the dialog from the parent
    }

    return (
        <Dialog open={showModal} onOpenChange={handleChange}>
            <DialogContent
                className="sm:max-w-lg"
                style={{
                    fontSize: `${baseFontSize}px`,
                    zIndex: 99999999999,
                }}
            >
                <DialogHeader>
                    <DialogTitle style={{ fontSize: `${headingFontSize}px`, fontWeight: 600 }}>
                        <div className="flex items-center gap-2">
                            {headerIcon || <CheckCircle className="h-6 w-6 text-green-600" />}
                            {title}
                        </div>
                    </DialogTitle>
                    <DialogDescription className="mt-1">
                        {description}
                    </DialogDescription>
                </DialogHeader>

                {/* Comments Section */}
                <div className="mt-4">
                    <label
                        htmlFor="confirm-comments"
                        className="block mb-1 font-semibold"
                        style={{ fontSize: `${baseFontSize}px` }}
                    >
                        Comments
                    </label>
                    <Textarea
                        id="confirm-comments"
                        placeholder="Please share the reason for this request"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="mt-1"
                        style={{ fontSize: `${baseFontSize}px` }}
                    />
                </div>

                {/* Footer Actions */}
                <DialogFooter className="mt-4">

                    <Button
                        variant={confirmVariant}
                        size="desktop"
                        onClick={handleConfirm}
                        style={isReject ? { fontSize: `${baseFontSize}px`, backgroundColor: theme.colors.error, color: 'white', padding: `${useResponsiveSize(10, 15)}px ${useResponsiveSize(15, 25)}px` } : { fontSize: `${baseFontSize}px`, backgroundColor: theme.colors.success, color: 'white', padding: `${useResponsiveSize(10, 15)}px ${useResponsiveSize(15, 25)}px` }}
                    >
                        {confirmLabel}
                    </Button>


                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}