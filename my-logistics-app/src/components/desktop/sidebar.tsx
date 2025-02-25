import { useLocation, Link } from 'react-router-dom'
import { Home, ShoppingCart, FileText, Settings, BarChart } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

const navItems = [
    { icon: Home, label: 'Dashboard', href: '/' },
    { icon: ShoppingCart, label: 'Purchase Orders', href: '/purchase-orders' },
    { icon: FileText, label: 'Documents', href: '/documents' },
    { icon: BarChart, label: 'Reports', href: '/reports' },
    { icon: Settings, label: 'Settings', href: '/settings' },
]

export default function Sidebar() {
    const { pathname } = useLocation()
    const { theme } = useTheme()
    return (
        <aside className="w-64 bg-[#E2E2FC] border-r border-[#E5E1FF] flex-shrink-0 h-full" style={{ margin: '10px', borderRadius: theme.borderRadius.borderRadius }}>
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
            <div className="absolute bottom-0 w-full p-4 border-t border-[#E5E1FF]">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                    <div>
                        <p className="font-medium">John Doe</p>
                        <p className="text-sm text-gray-500">Buyer</p>
                    </div>
                </div>
            </div>
        </aside>
    )
}
