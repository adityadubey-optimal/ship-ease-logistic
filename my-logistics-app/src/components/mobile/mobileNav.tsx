"use client"

import React from "react"
import { Home, ListTodo, Settings, HelpCircle, CirclePlus } from "lucide-react"
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

export default function BottomNav({ activeItem = "home" }: BottomNavProps) {
    const navigate = useNavigate()
    const { theme } = useTheme()

    const navItems: NavItem[] = [
        {
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
        },
    ]

    return (
        <div
            className="fixed bottom-0 left-0 right-0 h-16 border-t bg-white"
            style={{ backgroundColor: "#D0D7FF", zIndex: 99999999999 }}
        >
            <nav
                className="h-full w-full flex items-center justify-between"
                style={{ position: "relative" }}
            >
                <Button
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
                {navItems.map((item) => (
                    <NavButton key={item.label} {...item} />
                ))}
            </nav>
        </div>
    )
}

function NavButton({ icon: Icon, label, isActive = false, onClick }: NavItem) {
    return (
        <div style={label === "invisible" ? { visibility: "hidden" } : {}}>
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
                <span className="text-xs font-normal">{label}</span>
            </Button>
        </div>
    )
}