"use client"

import type React from "react"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Link } from "react-router-dom"
import GenericInput from "@/components/ui/InputField"
import { useTheme } from "../../../context/ThemeContext"

export default function SignupPageMobile() {
  const { theme } = useTheme()
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    password: "",
    confirmPassword: "",
    role: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [passwordMatch, setPasswordMatch] = useState<{
    error?: string
    success?: string
  }>({})

  const handleInputChange = (field: keyof typeof formData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    if (field === "password" || field === "confirmPassword") {
      if (field === "confirmPassword" && value) {
        if (value === formData.password) {
          setPasswordMatch({ success: "Password match!" })
        } else {
          setPasswordMatch({ error: "Password doesn't match" })
        }
      }
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  // Mobile-optimized styles
  const pageStyle: React.CSSProperties = {
    minHeight: "100vh",
    backgroundColor: theme.colors.background,
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    fontFamily: theme.fonts.family,
  }

  const headerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginBottom: "2rem",
  }

  const backButtonSpace: React.CSSProperties = {
    width: "24px",
    height: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }

  const logoStyle: React.CSSProperties = {
    color: "#FF0000",
    fontSize: theme.fonts.mobile.heading.size,
    fontWeight: theme.fonts.mobile.heading.weight,
  }

  const headingStyle: React.CSSProperties = {

    fontSize: theme.fonts.web.heading.size,
    fontWeight: theme.fonts.web.heading.weight,
    color: theme.colors.textSecondary,
    marginBottom: "2rem",
    textAlign: "center",

  }

  const formStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  }

  const selectStyle: React.CSSProperties = {
    width: "100%",
    height: "3rem",
    padding: "0 1rem",
    borderRadius: "1rem",
    border: `2px solid ${theme.colors.primary}`,
    backgroundColor: "white",
    // fontSize: theme.fonts.mobile.body.size,
    appearance: "none",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23666666'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 1rem center",
    backgroundSize: "1em",
    fontSize: theme.fonts.mobile.body.size,
    fontWeight: theme.fonts.mobile.body.weight,
  }

  const buttonStyle: React.CSSProperties = {
    width: "100%",
    height: "3rem",
    backgroundColor: theme.colors.primary,
    color: "white",
    border: "none",
    borderRadius: "2rem",
    fontSize: theme.fonts.mobile.signupPageLink.size,
    fontWeight: theme.fonts.mobile.signupPageLink.weight,
    marginTop: "1rem",
    marginBottom: "1rem",
  }

  const singUpLinkStyle: React.CSSProperties = {
    textAlign: "center",
    textDecoration: "none",
    fontSize: theme.fonts.mobile.signupPageLink.size,
    fontWeight: theme.fonts.mobile.signupPageLink.weight,
  }


  const linkTextStyle: React.CSSProperties = {
    textAlign: "center",
    fontSize: theme.fonts.mobile.body.size,
    marginBottom: "1rem",
  }

  const termsTextStyle: React.CSSProperties = {
    textAlign: "center",
    fontSize: theme.fonts.mobile.notification.size,
    color: theme.colors.textSecondary,
  }

  return (
    <div style={pageStyle}>
      {/* Header with back button space and logo */}
      <div style={headerStyle}>
        <div style={backButtonSpace}>{/* Space for back button SVG */}</div>
        <h1 style={logoStyle}>COTTON:ON</h1>
      </div>

      <h2 style={headingStyle}>Fill your details to sign-up</h2>

      <form onSubmit={handleSubmit} style={formStyle}>
        <GenericInput
          label="Name"
          placeholder="Enter Full Name"
          value={formData.name}
          setValue={handleInputChange("name")}
        />

        <GenericInput
          label="Company Name"
          placeholder="Enter Company Name"
          value={formData.companyName}
          setValue={handleInputChange("companyName")}
        />

        <GenericInput
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter Password"
          value={formData.password}
          setValue={handleInputChange("password")}
          icon={showPassword ? EyeOff : Eye}
          onIconClick={() => setShowPassword(!showPassword)}
        />

        <GenericInput
          label="Re-Type Password"
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Re-enter password"
          value={formData.confirmPassword}
          setValue={handleInputChange("confirmPassword")}
          icon={showConfirmPassword ? EyeOff : Eye}
          onIconClick={() => setShowConfirmPassword(!showConfirmPassword)}
          errorMessage={passwordMatch.error}
          successMessage={passwordMatch.success}
        />

        <div>
          <label
            style={{
              fontSize: theme.fonts.mobile.body.size,
              fontWeight: theme.fonts.mobile.body.weight,
              color: theme.colors.textPrimary,
              marginBottom: "0.5rem",
              display: "block",
            }}
          >
            Select Your Role
          </label>
          <select value={formData.role} onChange={(e) => handleInputChange("role")(e.target.value)} style={selectStyle}>
            <option value="">Select from the menu</option>q
            <option value="admin">Administrator</option>
            <option value="user">User</option>
            <option value="manager">Manager</option>
          </select>
        </div>


        <div style={singUpLinkStyle}>
          <span>Already have and account? </span>
          <Link to="/signin" style={{
            color: theme.colors.primary, fontSize: theme.fonts.mobile.signupPageLink.size,
            fontWeight: theme.fonts.mobile.signupPageLink.weight,
          }}>
            Sign-in
          </Link>
        </div>

        <button type="submit" style={buttonStyle}>
          Continue
        </button>

        <p style={termsTextStyle}>
          By continuing, you agree to{" "}
          <Link to="/terms" style={{ color: theme.colors.primary }}>
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/privacy" style={{ color: theme.colors.primary }}>
            Privacy Policy
          </Link>
        </p>
      </form>
    </div>
  )
}

