
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { Home, LayoutList, File, ClipboardList, Settings, Menu, HelpCircle } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import { useState, useEffect } from 'react'
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
                    icon: Home,
                    label: "Home",
                    href: "/shipper/home",
                    isActive: activeItem === "home",
                    onClick: () => navigate("/shipper/home"),
                },
                {
                    icon: Home,
                    label: "Accept-Ship-By-Date",
                    href: "/shipper/cargo_ready_date",
                    isActive: activeItem === "cargo_ready_date",
                    onClick: () => navigate("/shipper/cargo_ready_date"),
                },
                {
                    icon: Home,
                    label: "Shipper Home",
                    href: "/shipper/booking_good_to_go",
                    isActive: activeItem === "booking_good_to_go",
                    onClick: () => navigate("/shipper/booking_good_to_go"),
                },
            ]
        case pathname.startsWith("/control-tower"):
            return [
                {
                    icon: Home,
                    label: "Tower Dashboard",
                    href: "/control-tower/dashboard",
                    isActive: activeItem === "dashboard",
                    onClick: () => navigate("/control-tower/dashboard"),
                },
            ]
        case pathname.startsWith("/consignee"):
            return [
                {
                    icon: Home,
                    label: "Consignee Home",
                    href: "/consignee/home",
                    isActive: activeItem === "home",
                    onClick: () => navigate("/consignee/home"),
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
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                            <div>
                                <p className="font-medium">John Doe</p>
                                <p className="text-sm text-gray-500">Buyer</p>
                            </div>
                        </div>
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
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                                    <div>
                                        <p className="font-medium">John Doe</p>
                                        <p className="text-sm text-gray-500">Buyer</p>
                                    </div>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            )}

            {opnProfile && <ProfileDialog open={opnProfile} setOpen={setOpenProfile} />}
        </>
    )
}