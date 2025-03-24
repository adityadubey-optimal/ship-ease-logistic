"use client"

import type React from "react"
import { useState } from 'react'
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
    LogOut,
    ClipboardCheck,
    Home,
    HelpCircle,
} from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
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
import CottonOn from "@/assets/cotton-on-logo-freelogovectors.net_ 1.svg"

interface HeaderProps {
    title?: string
    subtitle?: string
}


export function useMenuLinks() {

    const navigate = useNavigate()

    switch (true) {
        case location.pathname.startsWith("/buyer"):
            return (
                <div className="flex flex-col">
                    <MenuLink icon={FileText} label="View all urgent tasks" onClick={() => navigate("/buyer/urgentTask")} />
                    <MenuLink icon={FolderDot} label="Documentation Vault" onClick={() => navigate("/buyer/documentList")} />
                    <MenuLink icon={User} label="Profile" onClick={() => navigate("/buyer/profile")} />
                    <MenuLink icon={Settings} label="Settings" onClick={() => navigate("/buyer/settings")} />
                    <MenuLink icon={FileBarChart} label="Reports" onClick={() => navigate("/buyer/reports")} />
                </div>
            )

        case location.pathname.startsWith("/shipper"):
            return (
                <div className="flex flex-col">
                    <MenuLink icon={Home} label="Home" onClick={() => navigate("/shipper/home")} />
                    <MenuLink icon={ClipboardCheck} label="Booking Management" onClick={() => navigate("/shipper/booking_good_to_go")} />
                    <MenuLink icon={User} label="Profile" onClick={() => navigate("/shipper/profile")} />
                    <MenuLink icon={Settings} label="Settings" onClick={() => navigate("/shipper/settings")} />
                    <MenuLink icon={HelpCircle} label="Help Center" onClick={() => navigate("/shipper/help")} />
                </div>
            )

        case location.pathname.startsWith("/control-tower"):
            return (
                <div className="flex flex-col">
                    <MenuLink icon={Home} label="Dashboard" onClick={() => navigate("/control-tower/home")} />
                    <MenuLink icon={ClipboardCheck} label="Good-to-Go Bookings" onClick={() => navigate("/control-tower/bookingGoodToGo")} />
                    <MenuLink icon={FileBarChart} label="Reports" onClick={() => navigate("/control-tower/reports")} />
                    <MenuLink icon={User} label="Profile" onClick={() => navigate("/control-tower/profile")} />
                    <MenuLink icon={Settings} label="Settings" onClick={() => navigate("/control-tower/settings")} />
                </div>
            )

        case location.pathname.startsWith("/consignee"):
            return (
                <div className="flex flex-col">
                    <MenuLink icon={Home} label="Home" onClick={() => navigate("/consignee/countryByPort")} />
                    <MenuLink icon={FileText} label="Document Status" onClick={() => navigate("/consignee/documentList")} />
                    <MenuLink icon={ClipboardCheck} label="Booking Management" onClick={() => navigate("/consignee/bookingGoodToGo")} />
                    <MenuLink icon={User} label="Profile" onClick={() => navigate("/consignee/profile")} />
                    <MenuLink icon={Settings} label="Settings" onClick={() => navigate("/consignee/settings")} />
                </div>
            )

        case location.pathname.startsWith("/cfs-receiver"):
            return (
                <div className="flex flex-col">
                    <MenuLink icon={Home} label="Home" onClick={() => navigate("/cfs-receiver/home")} />
                    <MenuLink icon={ClipboardCheck} label="Booking Good-to-Go" onClick={() => navigate("/cfs-receiver/bookingGoodToGo")} />
                    <MenuLink icon={FolderDot} label="Shipping Information" onClick={() => navigate("/cfs-receiver/shippingInformation")} />
                    <MenuLink icon={User} label="Profile" onClick={() => navigate("/cfs-receiver/profile")} />
                    <MenuLink icon={Settings} label="Settings" onClick={() => navigate("/cfs-receiver/settings")} />
                </div>
            )

        default:
            return (
                <div className="flex flex-col">
                    <MenuLink icon={Home} label="Auth Home" onClick={() => navigate("/auth/home")} />
                    <MenuLink icon={User} label="Profile" onClick={() => navigate("/auth/profile")} />
                    <MenuLink icon={Settings} label="Settings" onClick={() => navigate("/auth/settings")} />
                </div>
            )
    }
}



export default function Header({ title = "Buyer", subtitle = "Vendor Ship-By-Date Overview" }: HeaderProps) {
    const { theme } = useTheme()
    const navigate = useNavigate()
    const [selectedImage, setSelectedImage] = useState<string>(CottonOn)

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
    const handleSelect = (image: string) => {
        setSelectedImage(image)
    }
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
                                    {/* <MenuLink icon={FileText} label="View all urgent tasks" />
                                    <MenuLink icon={FolderDot} label="Documentation Vault" />
                                    <MenuLink icon={User} label="Profile" />
                                    <MenuLink icon={Settings} label="Settings" />
                                    <MenuLink icon={FileBarChart} label="Reports" /> */}
                                    {useMenuLinks()}
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
                            {location.pathname.startsWith("/control-tower") ? <DropdownMenu>
                                <DropdownMenuTrigger asChild>

                                    <Button variant="icon" size="mobile" className="">
                                        <img src={selectedImage} alt="Selected" style={{ height: "30px", width: "100px" }} />
                                        <ChevronDown />
                                    </Button>


                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" style={{ width: "180px" }} className="bg-gray-200 text-black border-none">
                                    <DropdownMenuItem
                                        onClick={() => handleSelect(Digital)}
                                        className="hover:bg-gray-300 focus:bg-gray-300 cursor-pointer"
                                    >
                                        <img src={Digital} alt="Digital Optima" style={{ height: "30px", width: "100px" }} />
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator className="my-1 border-gray-400" />

                                    <DropdownMenuItem
                                        onClick={() => handleSelect(CottonOn)}
                                        className="hover:bg-gray-300 focus:bg-gray-300 cursor-pointer"
                                    >
                                        <img src={CottonOn} alt="Cotton On" style={{ height: "30px", width: "100px" }} />
                                    </DropdownMenuItem>
                                </DropdownMenuContent>


                            </DropdownMenu> : <img src={Digital} style={{ height: '30px', width: '100px' }} />}
                            {/* <img src={Digital} style={{ height: '30px', width: '100px' }} />
                            <img src={CottonOn} style={{ height: '30px', width: '100px' }} /> */}


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
    onClick,
}: {
    icon: React.ElementType
    label: string
    onClick: () => void
}) {
    return (
        <Button
            variant="icon"
            size="mobile"
            className="w-full h-auto py-3 px-4 justify-start gap-3 text-base font-normal bg-[#E6E6FF] hover:bg-[#D9D9FF] border-b border-[#D9D9FF] rounded-none"
            onClick={onClick}
        >
            <Icon style={{ width: "20px", height: "20px" }} />
            {label}
        </Button>
    )
}