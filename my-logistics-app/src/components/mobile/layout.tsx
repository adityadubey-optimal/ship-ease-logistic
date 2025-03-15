"use client"

import type { ReactNode } from "react"
import { useState } from "react"
import Header from "./header"
import BottomNav from "./mobileNav"
import AiIcon from './AiIconComponent';

interface MobileLayoutProps {
    children: ReactNode
    title?: string
    subtitle?: string
    activeNavItem?: string
    showSelectAccont?: boolean
}

export default function MobileLayout({ children, title, subtitle, activeNavItem, showSelectAccont = false }: MobileLayoutProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <Header title={title} subtitle={subtitle} />

            {/* Main Content */}
            <main className="pb-16">
                <div className="">{children}</div>
            </main>

            {/* Bottom Navigation */}
            <BottomNav activeItem={activeNavItem} />

            <AiIcon />
        </div>
    )
}

