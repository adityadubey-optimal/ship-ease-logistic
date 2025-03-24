"use client"

import type React from "react"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

interface ProfileFormProps {
    onClose?: () => void
    onSubmit?: (data: ProfileFormData) => void
    defaultValues?: Partial<ProfileFormData>
    styles?: {
        backgroundColor?: string
        textColor?: string
        inputBackground?: string
        buttonColor?: string
        buttonTextColor?: string
    }
}

interface ProfileFormData {
    name: string
    companyName: string
    country: string
    role: string
    email: string
    oldPassword: string
    newPassword: string
    reTypePassword: string
}

const roles = ["Administrator", "Buyer", "Vendor", "Manager", "Supervisor"]

const countries = [
    { code: "AU", name: "Australia", flag: "🇦🇺" },
    { code: "US", name: "United States", flag: "🇺🇸" },
    { code: "GB", name: "United Kingdom", flag: "🇬🇧" },
    { code: "CA", name: "Canada", flag: "🇨🇦" },
    // Add more countries as needed
]

function ProfileForm({ onClose, onSubmit, defaultValues = {}, styles = {} }: ProfileFormProps) {
    const [formData, setFormData] = useState<ProfileFormData>({
        name: defaultValues.name || "John Doe",
        companyName: defaultValues.companyName || "Acme Corp",
        country: defaultValues.country || "US",
        role: defaultValues.role || "Buyer",
        email: defaultValues.email || "john.doe@acmecorp.com",
        oldPassword: "",
        newPassword: "",
        reTypePassword: "",
    })

    const [showPasswords, setShowPasswords] = useState({
        old: false,
        new: false,
        reType: false,
    })

    const [errors, setErrors] = useState<Partial<ProfileFormData>>({})

    const handleInputChange = (field: keyof ProfileFormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
        // Clear error when user types
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: undefined }))
        }
    }

    const validateForm = () => {
        const newErrors: Partial<ProfileFormData> = {}

        if (!formData.name) newErrors.name = "Name is required"
        if (!formData.companyName) newErrors.companyName = "Company name is required"
        if (!formData.country) newErrors.country = "Country is required"
        if (!formData.role) newErrors.role = "Role is required"
        if (!formData.email) newErrors.email = "Email is required"
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format"

        if (formData.newPassword) {
            if (!formData.oldPassword) newErrors.oldPassword = "Old password is required"
            if (formData.newPassword !== formData.reTypePassword) {
                newErrors.reTypePassword = "Passwords do not match"
            }
            if (formData.newPassword.length < 8) {
                newErrors.newPassword = "Password must be at least 8 characters"
            }
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (validateForm()) {
            onSubmit?.(formData)
        }
    }

    const { backgroundColor = "white", textColor = "#1E1E1E", inputBackground = "white" } = styles

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                    <label className="text-sm font-medium" style={{ color: textColor }}>
                        Name
                    </label>
                    <Input
                        placeholder="Enter Full Name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        style={{ backgroundColor: inputBackground }}
                        className={cn(errors.name && "border-red-500")}
                    />
                    {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                </div>

                {/* Company Name */}
                <div className="space-y-2">
                    <label className="text-sm font-medium" style={{ color: textColor }}>
                        Company Name
                    </label>
                    <Input
                        placeholder="Company Name"
                        value={formData.companyName}
                        onChange={(e) => handleInputChange("companyName", e.target.value)}
                        style={{ backgroundColor: inputBackground }}
                        className={cn(errors.companyName && "border-red-500")}
                    />
                    {errors.companyName && <p className="text-sm text-red-500">{errors.companyName}</p>}
                </div>

                {/* Role */}
                <div className="space-y-2">
                    <label className="text-sm font-medium" style={{ color: textColor }}>
                        Select Your Role
                    </label>
                    <Select value={formData.role} onValueChange={(value) => handleInputChange("role", value)}>
                        <SelectTrigger className={cn(errors.role && "border-red-500")} style={{ backgroundColor: inputBackground }}>
                            <SelectValue placeholder="Select from the menu" />
                        </SelectTrigger>
                        <SelectContent>
                            {roles.map((role) => (
                                <SelectItem key={role} value={role}>
                                    {role}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {errors.role && <p className="text-sm text-red-500">{errors.role}</p>}
                </div>

                {/* Country */}
                <div className="space-y-2">
                    <label className="text-sm font-medium" style={{ color: textColor }}>
                        Country
                    </label>
                    <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                        <SelectTrigger
                            className={cn(errors.country && "border-red-500")}
                            style={{ backgroundColor: inputBackground }}
                        >
                            <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                            {countries.map((country) => (
                                <SelectItem key={country.code} value={country.code}>
                                    <div className="flex items-center gap-2">
                                        <span>{country.flag}</span>
                                        <span>{country.name}</span>
                                    </div>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {errors.country && <p className="text-sm text-red-500">{errors.country}</p>}
                </div>

                {/* Email */}
                <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium" style={{ color: textColor }}>
                        Email
                    </label>
                    <Input
                        type="email"
                        placeholder="Email Company Email ID for mail updates"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        style={{ backgroundColor: inputBackground }}
                        className={cn(errors.email && "border-red-500")}
                    />
                    {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                </div>
            </div>

            {/* Password Section */}
            <div className="space-y-6">
                <h3 className="text-xl font-semibold" style={{ color: textColor }}>
                    Update Password
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Old Password */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium" style={{ color: textColor }}>
                            Old Password
                        </label>
                        <div className="relative">
                            <Input
                                type={showPasswords.old ? "text" : "password"}
                                placeholder="Enter Old Password"
                                value={formData.oldPassword}
                                onChange={(e) => handleInputChange("oldPassword", e.target.value)}
                                style={{ backgroundColor: inputBackground }}
                                className={cn(errors.oldPassword && "border-red-500")}
                            />
                            <Button
                                type="button"
                                variant="icon"
                                size="mobile"
                                className="absolute right-2 top-1/2 -translate-y-1/2"
                                onClick={() => setShowPasswords((prev) => ({ ...prev, old: !prev.old }))}
                            >
                                {showPasswords.old ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </Button>
                        </div>
                        {errors.oldPassword && <p className="text-sm text-red-500">{errors.oldPassword}</p>}
                    </div>

                    {/* New Password */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium" style={{ color: textColor }}>
                            New Password
                        </label>
                        <div className="relative">
                            <Input
                                type={showPasswords.new ? "text" : "password"}
                                placeholder="Enter New Password"
                                value={formData.newPassword}
                                onChange={(e) => handleInputChange("newPassword", e.target.value)}
                                style={{ backgroundColor: inputBackground }}
                                className={cn(errors.newPassword && "border-red-500")}
                            />
                            <Button
                                type="button"
                                variant="icon"
                                size="mobile"
                                className="absolute right-2 top-1/2 -translate-y-1/2"
                                onClick={() => setShowPasswords((prev) => ({ ...prev, new: !prev.new }))}
                            >
                                {showPasswords.new ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </Button>
                        </div>
                        {errors.newPassword && <p className="text-sm text-red-500">{errors.newPassword}</p>}
                    </div>

                    {/* Re-Type Password */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium" style={{ color: textColor }}>
                            Re-Type Password
                        </label>
                        <div className="relative">
                            <Input
                                type={showPasswords.reType ? "text" : "password"}
                                placeholder="Re-enter password"
                                value={formData.reTypePassword}
                                onChange={(e) => handleInputChange("reTypePassword", e.target.value)}
                                style={{ backgroundColor: inputBackground }}
                                className={cn(errors.reTypePassword && "border-red-500")}
                            />
                            <Button
                                type="button"
                                variant="icon"
                                size="mobile"
                                className="absolute right-2 top-1/2 -translate-y-1/2"
                                onClick={() => setShowPasswords((prev) => ({ ...prev, reType: !prev.reType }))}
                            >
                                {showPasswords.reType ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </Button>
                        </div>
                        {errors.reTypePassword && <p className="text-sm text-red-500">{errors.reTypePassword}</p>}
                    </div>
                </div>
            </div>

            {/* Submit Button */}
            <Button type="submit" variant="primary" size="mobile" className="w-full">
                Update Profile
            </Button>
        </form>
    )
}



interface ProfileDialogProps {
    open: boolean;
    setOpen: (data: boolean) => void
    triggerText?: string
    defaultValues?: Partial<ProfileFormData>
    styles?: {
        backgroundColor?: string
        textColor?: string
        inputBackground?: string
        buttonColor?: string
        buttonTextColor?: string
    }
}

export default function ProfileDialog({ triggerText = "Edit Profile", defaultValues, styles, open, setOpen }: ProfileDialogProps) {

    const handleSubmit = (data: ProfileFormData) => {
        console.log("Form submitted:", data)
        // Here you would typically send the data to your backend
        setOpen(false)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="primary" size="desktop">
                    {triggerText}
                </Button>
            </DialogTrigger>
            <DialogContent className="w-full h-full"
                style={{
                    width: "90vw",
                    height: "90vh",
                    padding: "24px",
                    overflow: 'scroll',
                    backgroundColor: "white",
                    zIndex: 9999999999999
                }}>
                <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>

                </DialogHeader>
                <ProfileForm onSubmit={handleSubmit} defaultValues={defaultValues} styles={styles} />
            </DialogContent>
        </Dialog>
    )
}



