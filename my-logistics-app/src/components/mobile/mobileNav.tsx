"use client"

import React from "react"
import { Home, ListTodo, Settings, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavItem {
    icon: React.ElementType
    label: string
    isActive?: boolean
}

interface BottomNavProps {
    activeItem?: string
}

export default function BottomNav({ activeItem = "home" }: BottomNavProps) {
    const navItems: NavItem[] = [
        { icon: Home, label: "Home", isActive: activeItem === "home" },
        { icon: ListTodo, label: "Tasks", isActive: activeItem === "tasks" },
        { icon: Settings, label: "Settings", isActive: activeItem === "settings" },
        { icon: HelpCircle, label: "Help", isActive: activeItem === "help" },
    ]

    return (
        <div className="fixed bottom-0 left-0 right-0 h-16 border-t bg-white px-4">
            <nav className="h-full max-w-md mx-auto flex items-center justify-between">
                {navItems.map((item, index) => {
                    // Add gap in the middle for the Add PO button
                    if (index === 2) {
                        return (
                            <React.Fragment key="gap">
                                <div className="w-16" />
                                <NavButton {...item} />
                            </React.Fragment>
                        )
                    }
                    return <NavButton key={item.label} {...item} />
                })}
            </nav>
        </div>
    )
}

function NavButton({ icon: Icon, label, isActive = false }: NavItem) {
    return (
        <Button
            variant="icon"
            size="mobile"
            className={`flex flex-col h-auto gap-1 px-2 ${isActive ? "text-primary" : ""}`}
        >
            <Icon className="h-5 w-5" />
            <span className="text-xs font-normal">{label}</span>
        </Button>
    )
}

