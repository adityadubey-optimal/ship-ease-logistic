
import { useLocation, Link } from 'react-router-dom'
import { Home, LayoutList, File, ClipboardList, Settings, Menu } from 'lucide-react'
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

const navItems = [
    { icon: Home, label: 'Dashboard', href: '/buyer/home' },
    { icon: LayoutList, label: 'View All Urgent Tasks', href: '/buyer/urgentTask' },
    { icon: File, label: 'Documentation Vault', href: '/buyer/documentList' },
    { icon: ClipboardList, label: 'Reports', href: '/reports' },
    { icon: Settings, label: 'Settings', href: '/settings' },
]

export default function Sidebar() {
    const { pathname } = useLocation()
    const { theme } = useTheme()
    const { width } = useWindowSize()
    const [opnProfile, setOpenProfile] = useState(false)

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
                                return (
                                    <Link
                                        key={item.href}
                                        to={item.href}
                                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                            ? 'bg-[#4318FF] text-white'
                                            : 'text-gray-700 hover:bg-gray-100'
                                            }`}
                                    >
                                        <item.icon className="w-5 h-5" />
                                        <span>{item.label}</span>
                                    </Link>
                                )
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
                                        return (
                                            <Link
                                                key={item.href}
                                                to={item.href}
                                                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                                    ? 'bg-[#4318FF] text-white'
                                                    : 'text-gray-700 hover:bg-gray-100'
                                                    }`}
                                            >
                                                <item.icon className="w-5 h-5" />
                                                <span>{item.label}</span>
                                            </Link>
                                        )
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
                        </SheetContent>
                    </Sheet>
                </div>
            )}

            {opnProfile && <ProfileDialog open={opnProfile} setOpen={setOpenProfile} />}
        </>
    )
}