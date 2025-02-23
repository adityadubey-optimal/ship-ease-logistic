"use client"

import type React from "react"

import { Menu, Search, X, FileText, FolderDot, User, Settings, FileBarChart, Bell, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "@/context/ThemeContext"

interface HeaderProps {
    title?: string
    subtitle?: string
}

export default function Header({ title = "Buyer", subtitle = 'Vendor Ship-By-Date Overview' }: HeaderProps) {
    const { theme } = useTheme()
    return (
        <header className="bg-white border-b">
            {/* Title Section */}
            <div className="px-1 py-2">
                <div className="flex items-center gap-3">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="icon" size="mobile" className="shrink-0" style={{
                                height: '50px',
                                width: '50px'
                            }}>
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0">
                            <SheetHeader className="p-4 border-b">
                                <div className="flex items-center justify-between">
                                    <SheetTitle className="text-2xl font-bold">Menu</SheetTitle>
                                    <SheetTrigger asChild>
                                        <Button variant="icon" size="mobile" className="h-8 w-8">
                                            <X className="h-5 w-5" />
                                        </Button>
                                    </SheetTrigger>
                                </div>
                            </SheetHeader>

                            {/* Menu Items */}
                            <div className="flex flex-col">
                                <MenuLink icon={FileText} label="View all urgent tasks" />
                                <MenuLink icon={FolderDot} label="Documentation Vault" />
                                <MenuLink icon={User} label="Profile" />
                                <MenuLink icon={Settings} label="Settings" />
                                <MenuLink icon={FileBarChart} label="Reports" />
                            </div>

                            {/* Footer Links */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between text-sm border-t">
                                <Button variant="icon" size="mobile" className="h-auto p-0 text-xs">
                                    User Agreement
                                </Button>
                                <Button variant="icon" size="mobile" className="h-auto p-0 text-xs">
                                    Privacy Policy
                                </Button>
                                <Button variant="icon" size="mobile" className="h-auto p-0 text-xs">
                                    Terms of Service
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                    <div className="text-xl font-bold text-[#FF0000]">COTTON:ON</div>
                    {subtitle && <h1 className="text-lg font-semibold mt-2">{subtitle}</h1>}

                </div>
            </div>

            {/* Search Section */}
            <div className="px-4 pb-3">
                <div className="relative" style={{
                    display: 'flex'
                }}>

                    <Input placeholder="Search..." className="pl-8 h-9" style={{ borderColor: theme.colors.borderColor }} />
                    <div className="flex items-center gap-4 flex-shrink-0">
                        <button className="p-2 bg-white rounded-lg hover:bg-gray-50 transition-colors" style={{
                            border: '1px solid',
                            borderColor: theme.colors.borderColor
                        }}>
                            <Bell className="w-5 h-5 text-gray-600" />
                            <span className="sr-only">Notifications</span>
                        </button>
                        <button className="p-2 bg-white rounded-lg hover:bg-gray-50 transition-colors" style={{
                            border: '1px solid',
                            borderColor: theme.colors.borderColor
                        }} >
                            <Filter className="w-5 h-5 text-gray-600" />
                            <span className="sr-only">Filters</span>
                        </button>
                    </div>
                </div>

            </div>
        </header>
    )
}

function MenuLink({
    icon: Icon,
    label,
}: {
    icon: React.ElementType
    label: string
}) {
    return (
        <Button
            variant="icon"
            size="mobile"
            className="w-full h-auto py-3 px-4 justify-start gap-3 text-base font-normal bg-[#E6E6FF] hover:bg-[#D9D9FF] border-b border-[#D9D9FF] rounded-none"
        >
            <Icon className="h-5 w-5" />
            {label}
        </Button>
    )
}
