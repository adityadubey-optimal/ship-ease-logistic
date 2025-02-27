"use client"

import { Bell, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useTheme } from "@/context/ThemeContext"

export default function Header({ pageName = 'Vendors Ship-By-Date Overview' }) {
    const { theme } = useTheme()

    const baseInputStyle: React.CSSProperties = {
        width: '100%',
        backgroundColor: 'white',
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
        border: `1px solid ${theme.colors.primary}`,
        borderRadius: theme.borderRadius.borderRadius,
        height: '3rem',
        padding: '0 3rem 0 1.25rem', // Extra right padding for icon
        fontSize: theme.fonts.web.authPage.inputFont.size,
        fontWeight: theme.fonts.web.authPage.inputFont.weight,
    }

    return (
        <div className=" bg-[#E2E2FC] px-6 py-4 flex items-center gap-8 border-b border-[#E5E1FF]" style={{
            boxShadow: theme.baseShadows.card,
            borderRadius: theme.borderRadius.borderRadius,
            width: "calc(100% - 20px)",
            margin: "10px",
        }}>
            {/* Logo */}
            <div className="flex-shrink-0 w-64">
                <span className="text-[#FF0000] text-2xl font-bold whitespace-nowrap" style={{ fontSize: '2rem' }}>COTTON:ON</span>
            </div>

            {/* Search Bar */}
            <div className="w-[320px] flex-shrink-0">
                <Input
                    type="text"
                    placeholder="Search"
                    className="w-full h-10 px-4 rounded-lg border-2 border-[#E5E1FF] focus:border-[#4318FF] focus:ring-1 focus:ring-[#4318FF]"
                    style={baseInputStyle}
                />
            </div>

            <div className="flex-grow" />

            {/* Title */}
            <div className="flex-shrink-0">
                <h1 className="text-xl font-semibold text-gray-700 whitespace-nowrap" style={{ fontSize: '1.75rem' }}>{pageName}</h1>
            </div>



            {/* Action Icons */}
            <div className="flex items-center gap-4 flex-shrink-0">
                <button className="p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                    <Bell className="w-8 h-8 text-gray-600" />
                    <span className="sr-only">Notifications</span>
                </button>
                <button className="p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                    <Filter className="w-8 h-8 text-gray-600" />
                    <span className="sr-only">Filters</span>
                </button>
            </div>
        </div>
    )
}

