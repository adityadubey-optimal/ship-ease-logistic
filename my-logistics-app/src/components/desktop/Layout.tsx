"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/desktop/header"
import Sidebar from "@/components/desktop/sidebar"

interface DashboardLayoutProps {
    children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)

    return (
        <div className="min-h-screen bg-[#F8F7FF]">
            {/* Header */}
            <Header />

            {/* Main Layout */}
            <div className="flex h-[calc(100vh-73px)]">
                {/* Sidebar */}
                <div
                    className={`transition-all duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-64"}`}
                >
                    <Sidebar />
                </div>

                {/* Main Content */}
                <main className="flex-1 overflow-auto">
                    <div className="container mx-auto p-6">{children}</div>
                </main>
            </div>
        </div>
    )
}

