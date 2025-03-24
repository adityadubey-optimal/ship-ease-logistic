"use client"

import type React from "react"
import {
    Menu,
    Search,
    X,
    FileText,
    FolderDot,
    User,
    Settings,
    FileBarChart,
    Bell,
    Filter,
    ChevronDown,
    LogOut
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useTheme } from "@/context/ThemeContext"
import useResponsiveSize from "@/hooks/useResponsiveSize"
import { useIsMobile } from "@/hooks/useMobile"
import Digital from '@/assets/Digital.png';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useNavigate } from "react-router-dom"

interface HeaderProps {
    title?: string
    subtitle?: string
}

export default function Header({ title = "Buyer", subtitle = "Vendor Ship-By-Date Overview" }: HeaderProps) {
    const { theme } = useTheme()
    const navigate = useNavigate()

    // Define font and icon size variables (responsive)
    const titleFontSize = '1.25rem'     // Title font size for "COTTON:ON"
    const titleFontWeight = "700"
    const subtitleFontSize = '1.05rem'   // Subtitle under the title
    const subtitleFontWeight = "600"

    const menuButtonSize = useResponsiveSize(50, 50) + "px"     // Menu button (square) size
    const menuIconSize = useResponsiveSize(20, 20) + "px"         // Menu icon size

    const searchInputHeight = "2.5rem"                            // Fixed height for search input
    const searchInputPadding = "1rem"                           // Left padding for search input

    const actionIconSize = useResponsiveSize(20, 20) + "px"       // Size for bell and filter icons

    return (
        <header className="bg-white border-b">
            {/* Title Section */}
            <div style={{}}>
                <div className="flex items-center gap-3" style={{
                    justifyContent: 'space-between',

                }}>
                    <div style={{
                        display: "flex",
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Sheet >
                            <SheetTrigger asChild>
                                <Button
                                    variant="icon"
                                    size="mobile"
                                    className="shrink-0"
                                    style={{
                                        height: menuButtonSize,
                                        width: menuButtonSize,
                                    }}
                                >
                                    <Menu style={{ height: menuIconSize, width: menuIconSize }} />
                                    <span className="sr-only">Open menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0" style={{ zIndex: '99999999999999' }}>
                                <SheetHeader className="p-4 border-b">
                                    <div className="flex items-center justify-between">
                                        <SheetTitle className="text-2xl font-bold">Menu</SheetTitle>
                                        <SheetTrigger asChild>
                                            <Button variant="icon" size="mobile" className="h-8 w-8">
                                                <X style={{ height: menuIconSize, width: menuIconSize }} />
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

                                <div className="absolute bottom-16 left-0 right-0 p-4 border-t">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <Avatar className="h-10 w-10">
                                            <AvatarImage src={''} alt={''} />
                                            <AvatarFallback>{'TN'}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium truncate">testName</p>
                                            <p className="text-xs text-gray-500 truncate">test@gmail.com</p>
                                        </div>
                                    </div>
                                    <Button
                                        // variant="destructive"
                                        className="w-full flex  gap-2"
                                        onClick={() => { navigate('/auth/login') }}
                                    >
                                        <LogOut size={16} />
                                        <span>Logout</span>
                                    </Button>
                                </div>


                            </SheetContent>
                        </Sheet>
                        <div>
                            <img src={Digital} style={{ height: '30px', width: '100px' }} />
                        </div>

                    </div>
                    {subtitle && (
                        <h1 className="text-lg font-semibold mt-2" style={{ fontSize: subtitleFontSize, fontWeight: subtitleFontWeight, width: '150px', lineHeight: '15px', textAlign: 'end', marginRight: '1rem' }}>
                            {subtitle}
                        </h1>
                    )}
                </div>
            </div>

            {/* Search Section */}
            <div className="">

                <div className="relative flex items-center" style={{ justifyContent: 'center' }}>
                    {/* Input Container (65%) */}
                    <div style={{ width: "60%" }}>
                        <Input
                            placeholder="Search..."
                            className="border-2 focus:outline-none"
                            style={{
                                height: searchInputHeight,
                                paddingLeft: searchInputPadding,
                                borderColor: theme.colors.borderColor,
                                borderRadius: "5px",
                                border: `0.5px solid ${theme.colors.primary}`,
                            }}
                            onFocus={(e) => {
                                e.currentTarget.style.setProperty("--tw-ring-color", "transparent", "important")
                                e.currentTarget.style.setProperty("--tw-ring-offset-width", "0px", "important")
                                e.currentTarget.style.outline = "none"
                                e.currentTarget.style.boxShadow = "none"
                            }}
                            onBlur={(e) => {
                                e.currentTarget.style.setProperty("--tw-ring-color", theme.colors.borderColor, "important")
                                e.currentTarget.style.setProperty("--tw-ring-offset-width", "0px", "important")
                                e.currentTarget.style.outline = ""
                                e.currentTarget.style.boxShadow = ""
                            }}
                        />
                    </div>

                    {/* Icons Container (25%) */}
                    <div style={{ width: "30%" }} className="flex flex-wrap items-center justify-end gap-2">
                        <button
                            className="p-2 bg-white rounded-lg hover:bg-gray-50 transition-colors"
                            style={{
                                border: "1px solid",
                                borderColor: theme.colors.borderColor,
                                height: "40px",
                                width: "40px",
                            }}
                        >
                            <Bell style={{ width: "20px", height: "20px", color: "gray" }} />
                            <span className="sr-only">Notifications</span>
                        </button>
                        <button
                            className="p-2 bg-white rounded-lg hover:bg-gray-50 transition-colors"
                            style={{
                                border: "1px solid",
                                borderColor: theme.colors.borderColor,
                                height: "40px",
                                width: "40px",
                            }}
                        >
                            <Filter style={{ width: "20px", height: "20px", color: "gray" }} />
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
            <Icon style={{ width: "20px", height: "20px" }} />
            {label}
        </Button>
    )
}