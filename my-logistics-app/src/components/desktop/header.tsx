"use client"

import { Bell, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useTheme } from "@/context/ThemeContext"

export default function Header() {
    const { theme } = useTheme()
    return (
        <div className=" bg-[#E2E2FC] px-6 py-4 flex items-center gap-8 border-b border-[#E5E1FF]" style={{
            boxShadow: theme.baseShadows.card,
            borderRadius: theme.borderRadius.borderRadius,
            width: "calc(100% - 20px)",
            margin: "10px",
        }}>
            {/* Logo */}
            <div className="flex-shrink-0 w-64">
                <span className="text-[#FF0000] text-2xl font-bold whitespace-nowrap">COTTON:ON</span>
            </div>

            {/* Search Bar */}
            <div className="w-[320px] flex-shrink-0">
                <Input
                    type="text"
                    placeholder="Search"
                    className="w-full h-10 px-4 rounded-lg border-2 border-[#E5E1FF] focus:border-[#4318FF] focus:ring-1 focus:ring-[#4318FF]"
                />
            </div>

            {/* Title */}
            <div className="flex-shrink-0">
                <h1 className="text-xl font-semibold text-gray-700 whitespace-nowrap">Vendors Ship-By-Date Overview</h1>
            </div>

            {/* Spacer */}
            <div className="flex-grow" />

            {/* Action Icons */}
            <div className="flex items-center gap-4 flex-shrink-0">
                <button className="p-2 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                    <Bell className="w-5 h-5 text-gray-600" />
                    <span className="sr-only">Notifications</span>
                </button>
                <button className="p-2 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                    <Filter className="w-5 h-5 text-gray-600" />
                    <span className="sr-only">Filters</span>
                </button>
            </div>
        </div>
    )
}

