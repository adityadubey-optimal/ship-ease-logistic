"use client"

import { Button } from "@/components/ui/button"

interface ActionButtonProps {
    onAction?: () => void
    loading?: boolean
    className?: string
}

export default function ActionButton({ onAction, loading = false, className }: ActionButtonProps) {
    return (
        <Button
            variant="primary"
            size="desktop"
            className={`relative bg-[#FFE5E5] hover:bg-[#FFD6D6] text-[#1E1E1E] ${className}`}
            onClick={onAction}
            disabled={loading}
        >
            <div className="flex items-center gap-3">
                {/* Icon placeholder - replace with your SVG */}
                <div className="w-8 h-8 relative">
                    {/* Your SVG will go here */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        {loading ? <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-500" /> : null}
                    </div>
                </div>

                <span className="text-lg font-semibold">Action Required: Approve Quantity Variation</span>
            </div>
        </Button>
    )
}

