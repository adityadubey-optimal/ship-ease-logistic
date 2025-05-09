
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { Home, LayoutList, File, ClipboardList, CircleCheck, Settings, Menu, Globe, HelpCircle, Files, TextSearch, Clipboard, LogOut } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetClose } from '@/components/ui/sheet'
import ProfileDialog from '../ui/profilePage'

// A simple hook to get window size
function useWindowSize() {
    const [windowSize, setWindowSize] = useState<{ width?: number; height?: number }>({ width: undefined, height: undefined });
    useEffect(() => {
        function handleResize() {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        }
        window.addEventListener("resize", handleResize);
        handleResize(); // set initial size
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}
interface NavItem {
    icon: React.ElementType
    label: string
    href?: string
    onClick?: () => void
    isActive?: boolean
}


const navItems = [
    { icon: Home, label: 'Dashboard', href: '/buyer/home' },
    { icon: LayoutList, label: 'View All Urgent Tasks', href: '/buyer/urgentTask' },
    { icon: File, label: 'Documentation Vault', href: '/buyer/documentList' },
    { icon: ClipboardList, label: 'Reports', href: '/reports' },
    { icon: Settings, label: 'Settings', href: '/settings' },
]
function getNavItems(
    pathname: string,
    navigate: ReturnType<typeof useNavigate>,
    activeItem: string = "home"
): NavItem[] {
    switch (true) {
        case pathname.startsWith("/auth"):
            return [
                {
                    icon: Home,
                    label: "Auth Home",
                    href: "/auth/home",
                    isActive: activeItem === "authHome",
                    onClick: () => navigate("/auth/home"),
                },
            ]
        case pathname.startsWith("/buyer"):
            return [
                {
                    icon: Home,
                    label: "Dashboard",
                    href: "/buyer/home",
                    isActive: activeItem === "dashboard",
                    onClick: () => navigate("/buyer/home"),
                },
                {
                    icon: LayoutList,
                    label: "View All Urgent Tasks",
                    href: "/buyer/urgentTask",
                    isActive: activeItem === "orders",
                    onClick: () => navigate("/buyer/urgentTask"),
                },
                {
                    icon: File,
                    label: "Documentation Vault",
                    href: "/buyer/documentList",
                    isActive: activeItem === "documentList",
                    onClick: () => navigate("/buyer/documentList"),
                },
                {
                    icon: ClipboardList,
                    label: "Reports",
                    href: "/buyer/reports",
                    isActive: activeItem === "reports",
                    onClick: () => navigate("/buyer/reports"),
                },
                {
                    icon: Settings,
                    label: "Settings",
                    href: "/buyer/settings",
                    isActive: activeItem === "settings",
                    onClick: () => navigate("/buyer/settings"),
                },
                {
                    icon: HelpCircle,
                    label: "Help",
                    href: "/buyer/help",
                    isActive: activeItem === "help",
                    onClick: () => navigate("/buyer/help"),
                },
            ]
        case pathname.startsWith("/shipper"):
            return [

                {
                    icon: Files,
                    label: "Accept-Ship-By-Date",
                    href: "/shipper/home",
                    isActive: activeItem === "cargo_ready_date",
                    onClick: () => navigate("/shipper/home"),
                },
                {
                    icon: TextSearch,
                    label: "Book Cargo Ready Date",
                    href: "/shipper/cargo_ready_date",
                    isActive: activeItem === "cargo_ready_date",
                    onClick: () => navigate("/shipper/cargo_ready_date"),
                },
                {
                    icon: TextSearch,
                    label: "Good-to-go Bookings",
                    href: "/shipper/booking_good_to_go",
                    isActive: activeItem === "booking_good_to_go",
                    onClick: () => navigate("/shipper/booking_good_to_go"),
                },

                {
                    icon: ClipboardList,
                    label: "Reports",
                    href: "/buyer/reports",
                    isActive: activeItem === "reports",
                    onClick: () => navigate("/buyer/reports"),
                },
                {
                    icon: Settings,
                    label: "Settings",
                    href: "/buyer/settings",
                    isActive: activeItem === "settings",
                    onClick: () => navigate("/buyer/settings"),
                },

            ]
        case pathname.startsWith("/control-tower"):

            return [
                {
                    icon: Home,
                    label: "Home",
                    href: "/control-tower/home",
                    isActive: activeItem === "home",
                    onClick: () => navigate("/control-tower/home"),
                },
                {
                    icon: Globe,
                    label: "Country By Port of loading Status",
                    href: "/control-tower/countryByPort",
                    isActive: activeItem === "cargo_ready_date",
                    onClick: () => navigate("/control-tower/countryByPort"),
                },
                {
                    icon: TextSearch,
                    label: "Good-To-Go Shipments",
                    href: "/control-tower/bookingGoodToGo",
                    isActive: activeItem === "booking_good_to_go",
                    onClick: () => navigate("/control-tower/bookingGoodToGo"),
                },
                {
                    icon: Clipboard,
                    label: "Document Status",
                    href: "/control-tower/documentList",
                    isActive: activeItem === "booking_good_to_go",
                    onClick: () => navigate("/control-tower/documentList"),
                },
                {
                    icon: ClipboardList,
                    label: "Reports",
                    href: "/control-tower/reports",
                    isActive: activeItem === "reports",
                    onClick: () => navigate("/control-tower/reports"),
                },
                {
                    icon: Settings,
                    label: "Settings",
                    href: "/control-tower/settings",
                    isActive: activeItem === "settings",
                    onClick: () => navigate("/control-tower/settings"),
                },

            ]
        case pathname.startsWith("/consignee"):
            return [
                {
                    icon: Home,
                    label: "Home",
                    href: "/consignee/countryByPort",
                    isActive: activeItem === "home",
                    onClick: () => navigate("/consignee/countryByPort"),
                },
                {
                    icon: CircleCheck,
                    label: "Good-to-go Shipments",
                    href: "/consignee/bookingGoodToGo",
                    isActive: activeItem === "bookingGoodToGo",
                    onClick: () => navigate("/consignee/bookingGoodToGo"),
                },
                {
                    icon: Clipboard,
                    label: "Document Status",
                    href: "/consignee/documentList",
                    isActive: activeItem === "documentList",
                    onClick: () => navigate("/consignee/documentList"),
                },

                {
                    icon: ClipboardList,
                    label: "Reports",
                    href: "/buyer/reports",
                    isActive: activeItem === "reports",
                    onClick: () => navigate("/buyer/reports"),
                },
                {
                    icon: Settings,
                    label: "Settings",
                    href: "/buyer/settings",
                    isActive: activeItem === "settings",
                    onClick: () => navigate("/buyer/settings"),
                },

            ]
        case pathname.startsWith("/cfs-receiver"):
            return [
                {
                    icon: Home,
                    label: "CFS Receiver",
                    href: "/cfs-receiver/home",
                    isActive: activeItem === "home",
                    onClick: () => navigate("/cfs-receiver/home"),
                },
                {
                    icon: CircleCheck,
                    label: "Good-to-go Shipments",
                    href: "/cfs-receiver/bookingGoodToGo",
                    isActive: activeItem === "bookingGoodToGo",
                    onClick: () => navigate("/consignee/bookingGoodToGo"),
                },
                {
                    icon: Clipboard,
                    label: "Document Status",
                    href: "/cfs-receiver/shippingInformation",
                    isActive: activeItem === "documentList",
                    onClick: () => navigate("/consignee/documentList"),
                },

                {
                    icon: ClipboardList,
                    label: "Reports",
                    href: "/cfs-receiver/reports",
                    isActive: activeItem === "reports",
                    onClick: () => navigate("/buyer/reports"),
                },
                {
                    icon: Settings,
                    label: "Settings",
                    href: "/cfs-receiver/settings",
                    isActive: activeItem === "settings",
                    onClick: () => navigate("/buyer/settings"),
                },
            ]
        default:
            return [
                {
                    icon: Home,
                    label: "Default Home",
                    href: "/auth/home",
                    isActive: activeItem === "home",
                    onClick: () => navigate("/auth/home"),
                },
            ]
    }
}

export default function Sidebar() {
    const { pathname } = useLocation()
    const location = useLocation()
    const navigate = useNavigate()
    const { theme } = useTheme()
    const { width } = useWindowSize()
    const [opnProfile, setOpenProfile] = useState(false)
    const navItems = getNavItems(location.pathname, navigate, "home")

    // We'll show the static sidebar only if the width is 1200px or more.
    const isHamburger = width !== undefined && width < 1200

    const handleLogout = () => {

        console.log("Logging out...")
        // Default logout behavior - redirect to login page
        navigate("/auth/login")

    }

    // User profile section with logout button
    const UserProfileSection = () => (
        <div className="w-full">
            <div className="flex items-center space-x-3 mb-3 cursor-pointer" onClick={() => setOpenProfile(true)}>
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-sm text-gray-500">Buyer</p>
                </div>
            </div>
            <Button
                onClick={handleLogout}
                className="w-full flex gap-2  hover:bg-grey text-black"
                style={{ borderRadius: "6px", justifyContent: 'flex-start' }}
            >
                <LogOut size={16} />
                <span>Logout</span>
            </Button>
        </div>
    )

    return (
        <>
            {/* Static Sidebar for screens 1200px and larger */}
            {!isHamburger && (
                <aside
                    className="w-64 bg-[#E2E2FC] border-r border-[#E5E1FF] flex-shrink-0 h-full"
                    style={{
                        margin: '10px',
                        borderRadius: theme.borderRadius.borderRadius,
                    }}
                >
                    <div className="p-4 space-y-4">
                        <nav className="space-y-1">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href
                                return (<Link
                                    key={item.label}
                                    to={item.href!}
                                    onClick={item.onClick}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.75rem",
                                        padding: "0.5rem 1rem",
                                        borderRadius: "8px",
                                        backgroundColor: isActive ? theme.colors.primary : "transparent",
                                        color: isActive ? "white" : "#333",
                                        textDecoration: "none",
                                        marginBottom: "0.5rem",
                                    }}
                                >
                                    <item.icon className="w-5 h-5" />
                                    <span>{item.label}</span>
                                </Link>)
                            })}
                        </nav>
                    </div>
                    <div className="absolute bottom-0 w-full p-4 border-t border-[#E5E1FF]" onClick={() => {
                        setOpenProfile(true)
                    }}>
                        {/* <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                            <div>
                                <p className="font-medium">John Doe</p>
                                <p className="text-sm text-gray-500">Buyer</p>
                            </div>
                        </div> */}
                        <UserProfileSection />
                    </div>
                </aside>
            )}

            {/* Hamburger menu (Sheet) for screens smaller than 1200px */}
            {isHamburger && (
                <div className="p-2">
                    <Sheet>
                        <SheetTrigger asChild>
                            <button className="p-2 rounded-md bg-gray-200 hover:bg-gray-300">
                                <Menu className="w-6 h-6" />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-64" style={{ borderRadius: theme.borderRadius.borderRadius }}>
                            <SheetHeader>
                                <SheetTitle>Menu</SheetTitle>
                                <SheetClose />
                            </SheetHeader>
                            <div className="p-4 space-y-4">
                                <nav className="space-y-1">
                                    {navItems.map((item) => {
                                        const isActive = pathname === item.href
                                        return (<Link
                                            key={item.label}
                                            to={item.href!}
                                            onClick={item.onClick}
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "0.75rem",
                                                padding: "0.5rem 1rem",
                                                borderRadius: "8px",
                                                backgroundColor: isActive ? theme.colors.primary : "transparent",
                                                color: isActive ? "white" : "#333",
                                                textDecoration: "none",
                                                marginBottom: "0.5rem",
                                            }}
                                        >
                                            <item.icon className="w-5 h-5" />
                                            <span>{item.label}</span>
                                        </Link>)
                                    }
                                    )}
                                </nav>
                            </div>
                            <div className="absolute bottom-0 w-full p-4 border-t border-[#E5E1FF]" onClick={() => {
                                setOpenProfile(true)
                            }}>
                                {/* <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                                    <div>
                                        <p className="font-medium">John Doe</p>
                                        <p className="text-sm text-gray-500">Buyer</p>
                                    </div>
                                </div> */}

                                <UserProfileSection />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            )}

            {opnProfile && <ProfileDialog open={opnProfile} setOpen={setOpenProfile} />}
        </>
    )
}