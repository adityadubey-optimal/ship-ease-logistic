"use client"

import React from "react"
import { Home, ListTodo, Settings, HelpCircle, CirclePlus, ClipboardCheck, ListChecks } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/context/ThemeContext"
import { useNavigate } from "react-router-dom"

interface NavItem {
    icon: React.ElementType
    label: string
    onClick: () => void
    isActive?: boolean
}

interface BottomNavProps {
    activeItem?: string
}

function getNavItems(content: Partial<NavItem[]>, { activeItem = "home" }: Partial<BottomNavProps> = {}) {
    const navigate = useNavigate()
    switch (true) {
        case location.pathname.startsWith("/auth"):
            // content = <div>Auth Routes Component</div>
            return [
                {
                    icon: Home,
                    label: "Auth Home",
                    isActive: activeItem === "authHome",
                    onClick: () => {
                        console.log("Navigating to Auth Home")
                        navigate("/auth/home")
                    },
                },
            ]
            break
        case location.pathname.startsWith("/buyer"):
            return [{
                icon: Home,
                label: "Home",
                isActive: activeItem === "home",
                onClick: () => {
                    console.log("testing Home")
                    navigate("/buyer/home")
                },
            },
            {
                icon: ListTodo,
                label: "Tasks",
                isActive: activeItem === "tasks",
                onClick: () => {
                    console.log("testing Tasks")
                    navigate("/buyer/urgentTask")
                },
            },
            {
                icon: ListTodo,
                label: "invisible",
                isActive: activeItem === "tasks",
                onClick: () => {
                    console.log("testing invisible")
                },
            },
            {
                icon: Settings,
                label: "Settings",
                isActive: activeItem === "settings",
                onClick: () => {
                    console.log("testing Settings")
                    navigate("buyer/settings")
                },
            },
            {
                icon: HelpCircle,
                label: "Help",
                isActive: activeItem === "help",
                onClick: () => {
                    console.log("testing Help")
                    navigate("buyer/help")
                },
            },]
            break
        case location.pathname.startsWith("/shipper"):
            return [{
                icon: Home,
                label: "Home",
                isActive: activeItem === "home",
                onClick: () => {
                    console.log("testing Home")
                    navigate("/shipper/home")
                },
            },
            {
                icon: ClipboardCheck,
                label: "Book",
                isActive: activeItem === "tasks",
                onClick: () => {
                    console.log("testing Tasks")
                    navigate("/shipper/cargo_ready_date")
                },
            },
            {
                icon: ListTodo,
                label: "invisible",
                isActive: activeItem === "tasks",
                onClick: () => {
                    console.log("shipper invisible")
                },
            },
            {
                icon: Settings,
                label: "Settings",
                isActive: activeItem === "settings",
                onClick: () => {
                    console.log("testing Settings")
                    navigate("shipper/settings")
                },
            },
            {
                icon: HelpCircle,
                label: "Help",
                isActive: activeItem === "help",
                onClick: () => {
                    console.log("testing Help")
                    navigate("shipper/help")
                },
            },]
            break
        // content = <div>Shipper Routes Component</div>

        case location.pathname.startsWith("/control-tower"):
            return [{
                icon: Home,
                label: "Home",
                isActive: activeItem === "home",
                onClick: () => {
                    console.log("testing Home")
                    navigate("/control-tower/home")
                },
            },
            {
                icon: ClipboardCheck,
                label: "Good to-go Bookings",
                isActive: activeItem === "tasks",
                onClick: () => {
                    console.log("testing Tasks")
                    navigate("/control-tower/bookingGoodToGo")
                },
            },
            {
                icon: ListTodo,
                label: "invisible",
                isActive: activeItem === "tasks",
                onClick: () => {
                    console.log("shipper invisible")
                },
            },
            {
                icon: Settings,
                label: "Settings",
                isActive: activeItem === "settings",
                onClick: () => {
                    console.log("testing Settings")
                    navigate("/control-tower/settings")
                },
            },
            {
                icon: HelpCircle,
                label: "Help",
                isActive: activeItem === "help",
                onClick: () => {
                    console.log("testing Help")
                    navigate("/control-tower/help")
                },
            },]
            // content = <div>Control Tower Routes Component</div>
            break
        case location.pathname.startsWith("/consignee"):
            return [{
                icon: Home,
                label: "Home",
                isActive: activeItem === "home",
                onClick: () => {
                    console.log("testing Home")
                    navigate("/consignee/countryByPort")
                },
            },
            {
                icon: ClipboardCheck,
                label: "Good to-go Bookings",
                isActive: activeItem === "tasks",
                onClick: () => {
                    console.log("testing Tasks")
                    navigate("/consignee/bookingGoodToGo")
                },
            },
            {
                icon: ListTodo,
                label: "invisible",
                isActive: activeItem === "tasks",
                onClick: () => {
                    console.log("shipper invisible")
                },
            },
            {
                icon: Settings,
                label: "Settings",
                isActive: activeItem === "settings",
                onClick: () => {
                    console.log("testing Settings")
                    navigate("/consignee/settings")
                },
            },
            {
                icon: HelpCircle,
                label: "Help",
                isActive: activeItem === "help",
                onClick: () => {
                    console.log("testing Help")
                    navigate("/consignee/help")
                },
            },]
            // content = <div>Consignee Routes Component</div>
            break
        case location.pathname.startsWith("/cfs-receiver"):
            return [
                {
                    icon: Home,
                    label: "CFS Receiver",
                    isActive: activeItem === "home",
                    onClick: () => {
                        console.log("Navigating to CFS Receiver Home")
                        navigate("/cfs-receiver/home")
                    },
                },
                {
                    icon: ClipboardCheck,
                    label: "Good to-go Bookings",
                    isActive: activeItem === "tasks",
                    onClick: () => {
                        console.log("testing Tasks")
                        navigate("/cfs-receiver/bookingGoodToGo")
                    },
                },
                {
                    icon: ListTodo,
                    label: "invisible",
                    isActive: activeItem === "tasks",
                    onClick: () => {
                        console.log("shipper invisible")
                    },
                },
                {
                    icon: Settings,
                    label: "Settings",
                    isActive: activeItem === "settings",
                    onClick: () => {
                        console.log("testing Settings")
                        navigate("/cfs-receiver/settings")
                    },
                },
                {
                    icon: HelpCircle,
                    label: "Help",
                    isActive: activeItem === "help",
                    onClick: () => {
                        console.log("testing Help")
                        navigate("/cfs-receiver/help")
                    },
                },
            ]
            // content = <div>CFS Receiver Routes Component</div>
            break
        default:
            return [
                {
                    icon: Home,
                    label: "Default Home",
                    isActive: activeItem === "home",
                    onClick: () => {
                        console.log("Navigating to Default Home")
                        navigate("/auth/home")
                    },
                },
            ]
            // content = <div>Default Auth Routes Component</div>
            break
    }
}

function getSpecialButton() {
    const { theme } = useTheme()

    const navigate = useNavigate()
    switch (true) {
        case location.pathname.startsWith("/buyer"):
            return <Button
                className="text-white p-0 rounded-lg flex flex-col items-center justify-center"
                style={{
                    backgroundColor: theme.colors.primary,
                    width: "80px",
                    height: "100%",
                    borderRadius: theme.borderRadius.borderRadius,
                    position: "absolute",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
                onClick={() => {
                    navigate("/buyer/poReconcilation")
                }}
            >
                <CirclePlus className="h-5 w-5" style={{ height: "25px", width: "25px" }} />
                <span style={{ fontSize: "0.75rem", fontWeight: "700" }}>Add PO</span>
            </Button>

        case location.pathname.startsWith("/shipper"):
            return <Button
                className="text-white p-0 rounded-lg flex flex-col items-center justify-center"
                style={{
                    backgroundColor: theme.colors.primary,
                    width: "80px",
                    height: "100%",
                    borderRadius: theme.borderRadius.borderRadius,
                    position: "absolute",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
                onClick={() => {
                    navigate("/shipper/booking_good_to_go")
                }}
            >
                <CirclePlus className="h-5 w-5" style={{ height: "25px", width: "25px" }} />
                <span style={{ fontSize: "0.75rem", fontWeight: "700" }}>Book</span>
            </Button>
            break;
        case location.pathname.startsWith("/control-tower"):
            return <Button
                className="text-white p-0 rounded-lg flex flex-col items-center justify-center"
                style={{
                    backgroundColor: theme.colors.primary,
                    width: "80px",
                    height: "100%",
                    borderRadius: theme.borderRadius.borderRadius,
                    position: "absolute",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
                onClick={() => {
                    navigate("/control-tower/documentList")
                }}
            >
                <ListChecks className="h-5 w-5" style={{ height: "25px", width: "25px" }} />
                <span style={{ fontSize: "0.75rem", fontWeight: "700" }}>Status</span>
            </Button>
            break;
        case location.pathname.startsWith("/consignee"):
            return <Button
                className="text-white p-0 rounded-lg flex flex-col items-center justify-center"
                style={{
                    backgroundColor: theme.colors.primary,
                    width: "80px",
                    height: "100%",
                    borderRadius: theme.borderRadius.borderRadius,
                    position: "absolute",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
                onClick={() => {
                    navigate("/consignee/documentList")
                }}
            >
                <ListChecks className="h-5 w-5" style={{ height: "25px", width: "25px" }} />
                <span style={{ fontSize: "0.75rem", fontWeight: "700" }}>Status</span>
            </Button>
            break;
        case location.pathname.startsWith("/cfs-receiver"):
            return <Button
                className="text-white p-0 rounded-lg flex flex-col items-center justify-center"
                style={{
                    backgroundColor: theme.colors.primary,
                    width: "80px",
                    height: "100%",
                    borderRadius: theme.borderRadius.borderRadius,
                    position: "absolute",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
                onClick={() => {
                    navigate("/cfs-receiver/scan")
                }}
            >
                <CirclePlus className="h-5 w-5" style={{ height: "25px", width: "25px" }} />
                <span style={{ fontSize: "0.75rem", fontWeight: "700" }}>Scan</span>
            </Button>
            break;
        default:
            return <Button
                className="text-white p-0 rounded-lg flex flex-col items-center justify-center"
                style={{
                    backgroundColor: theme.colors.primary,
                    width: "80px",
                    height: "100%",
                    borderRadius: theme.borderRadius.borderRadius,
                    position: "absolute",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
                onClick={() => {
                    navigate("/buyer/poReconcilation")
                }}
            >
                <CirclePlus className="h-5 w-5" style={{ height: "25px", width: "25px" }} />
                <span style={{ fontSize: "0.75rem", fontWeight: "700" }}>Add PO</span>
            </Button>
            break;
    }


}

export default function BottomNav({ activeItem = "home" }: BottomNavProps) {
    const navigate = useNavigate()
    const { theme } = useTheme()


    let content: Partial<NavItem[]> = []
    content = getNavItems(content, {}) || []



    return (
        <div
            className="fixed bottom-0 left-0 right-0 h-16 border-t bg-white"
            style={{ backgroundColor: "#D0D7FF", zIndex: 99999999999 }}
        >

            <nav
                className="h-full w-full flex items-center justify-between"
                style={{ position: "relative", justifyContent: 'space-around' }}
            >
                {getSpecialButton()}

                {content.map((item: any) => (
                    <NavButton key={item.label} {...item} />
                ))}
            </nav>
        </div>
    )
}

function NavButton({ icon: Icon, label, isActive = false, onClick }: NavItem) {
    return (
        <div style={label === "invisible" ? { visibility: "hidden" } : { width: '65px', display: 'flex', alignItems: 'center' }}>
            <Button
                variant="icon"
                size="mobile"
                className={`flex-1 flex flex-col h-auto gap-1 px-2 ${isActive ? "text-primary" : ""}`}
                onClick={onClick}
                style={{
                    flex: "1 1 auto",
                    minWidth: 0,
                }}
            >
                <Icon className="h-5 w-5" />
                <span className="text-xs font-normal" style={{ fontSize: '10px', lineHeight: '10px' }}>{label}</span>
            </Button>
        </div>
    )
}