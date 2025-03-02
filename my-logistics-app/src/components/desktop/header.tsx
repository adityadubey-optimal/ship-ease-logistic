
import useResponsiveSize from '../../hooks/useResponsiveSize'
"use client"

import { useState, useEffect } from "react";
import { Bell, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/context/ThemeContext";



export default function Header({ pageName = 'Vendors Ship-By-Date Overview' }) {
    const { theme } = useTheme();

    // Compute responsive sizes (these values are in rem units)
    const logoFontSize = useResponsiveSize(1.25, 2); // Logo font scales from 1.5rem (min) to 2rem (max)
    const titleFontSize = useResponsiveSize(1, 1.75); // Header title scales from 1.5rem to 1.75rem
    const inputFontSize = useResponsiveSize(0.75, 1.125); // Input font scales from 0.9rem to 1.125rem
    // Adjust input style with the computed responsive font size.
    const baseInputStyle = {
        width: '100%',
        backgroundColor: 'white',
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
        border: `1px solid ${theme.colors.primary}`,
        borderRadius: theme.borderRadius.borderRadius,
        height: '3rem',
        padding: '0 3rem 0 1.25rem', // Extra right padding for the icon
        fontSize: `${inputFontSize}rem`,
        fontWeight: theme.fonts.web.authPage.inputFont.weight,
    };

    return (
        <div
            className="bg-[#E2E2FC] px-6 py-4 flex flex-nowrap items-center gap-4 border-b border-[#E5E1FF]"
            style={{
                boxShadow: theme.baseShadows.card,
                borderRadius: theme.borderRadius.borderRadius,
                width: "calc(100% - 20px)",
                margin: "10px",
            }}
        >
            {/* Logo */}
            <div className="flex-shrink-0">
                <span
                    className="text-[#FF0000] font-bold whitespace-nowrap"
                    style={{ fontSize: `${logoFontSize}rem` }}
                >
                    COTTON:ON
                </span>
            </div>

            {/* Search Bar */}
            <div className="flex-shrink-0" style={{ width: '320px' }}>
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
                <h1
                    className="whitespace-nowrap"
                    style={{
                        fontSize: `${titleFontSize}rem`,
                        fontWeight: 600,
                        color: theme.colors.textPrimary,
                    }}
                >
                    {pageName}
                </h1>
            </div>

            {/* Action Icons */}
            <div className="flex items-center gap-4 flex-shrink-0">
                <button className="p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                    <Bell className="w-8 h-8 text-gray-600" style={{ height: `${useResponsiveSize(1, 2)}rem`, width: `${useResponsiveSize(1, 2)}rem` }} />
                    <span className="sr-only">Notifications</span>
                </button>
                <button className="p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors">
                    <Filter className="w-8 h-8 text-gray-600" style={{ height: `${useResponsiveSize(1, 2)}rem`, width: `${useResponsiveSize(1, 2)}rem` }} />
                    <span className="sr-only">Filters</span>
                </button>
            </div>
        </div>
    );
}

