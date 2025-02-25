"use client"

import type React from "react"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Link } from "react-router-dom"
import GenericInput from "@/components/ui/InputField"
import { useTheme } from "../../../context/ThemeContext"
import logoImage from '@assets/Group 134@2x.png'
export default function SigninPage() {
  const { theme } = useTheme()
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false)

  const handleInputChange = (field: keyof typeof formData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  // Styles using theme
  const pageStyle: React.CSSProperties = {
    minHeight: "100vh",
    backgroundColor: theme.colors.background,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: theme.fonts.family,
  }

  const contentStyle: React.CSSProperties = {
    width: "100%",

    display: "grid",
    gridTemplateColumns: "45% 55%",
    gap: "2rem",
    padding: "2rem",
    height: '100vh'
  }

  const formContainerStyle: React.CSSProperties = {
    backgroundColor: "white",
    borderRadius: "1.5rem",
    padding: "2rem",
    boxShadow: theme.shadows.outer,
    maxWidth: '620px',
    position: 'relative',

    maxHeight: '600px',
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)"
  }

  const headingStyle: React.CSSProperties = {
    fontSize: theme.fonts.web.heading.size,
    fontWeight: theme.fonts.web.heading.weight,
    color: theme.colors.textPrimary,
    marginBottom: "1.5rem",
  }

  const buttonStyle: React.CSSProperties = {
    width: "100%",
    height: "3.5rem",
    backgroundColor: theme.colors.primary,
    color: "white",
    border: "none",
    borderRadius: "2rem",
    fontSize: theme.fonts.web.body.size,
    fontWeight: theme.fonts.web.body.weight,
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  }

  const linkContainerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1rem",
  }

  const linkStyle: React.CSSProperties = {
    color: theme.colors.primary,
    textDecoration: "none",
    fontSize: theme.fonts.web.body.size,
    fontWeight: theme.fonts.web.body.weight,
  }

  const signupTextStyle: React.CSSProperties = {
    textAlign: "center",
    marginTop: "1rem",
    fontSize: theme.fonts.web.body.size,
  }

  const termsTextStyle: React.CSSProperties = {
    textAlign: "center",
    fontSize: theme.fonts.web.notification.size,
    marginTop: "1rem",
    color: theme.colors.textSecondary,
  }

  // Logo image style: absolutely positioned within the relative container
  const backgroudImageStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    // Set a fixed width or adjust as needed
    width: "100%",
    height: "auto",
    zIndex: 10, // Ensure the logo overlaps other content
    objectFit: 'cover',
  }

  const relativeContainerStyle: React.CSSProperties = {
    position: "relative",
    height: "80%", // Adjust this value as needed
    // Optionally, add overflow hidden if you want to crop parts of the image
    overflow: "hidden",
  }

  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        {/* Left Column - Logo */}
        <div>
          <h1 style={{ ...headingStyle, color: "#FF0000", fontSize: "42px" }}>COTTON:ON</h1>
          <div style={relativeContainerStyle}>

            <img src={logoImage} style={backgroudImageStyle}></img>

          </div>
        </div>

        {/* Right Column - Form */}
        <div style={formContainerStyle}>
          <h2 style={headingStyle}>To get started, please sign-in</h2>
          <form onSubmit={handleSubmit}>
            <GenericInput
              label="User name"
              placeholder="Enter User Name"
              value={formData.username}
              setValue={handleInputChange("username")}
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

            {/* Forgot Username/Password Links */}
            <div style={linkContainerStyle}>
              <Link to="/forgot-username" style={linkStyle}>
                Forgot Username
              </Link>
              <Link to="/forgot-password" style={linkStyle}>
                Forgot Password
              </Link>
            </div>

            {/* Submit Button */}
            <button type="submit" style={buttonStyle}>
              Continue
            </button>

            {/* Sign Up Link */}
            <div style={signupTextStyle}>
              <span>New to the portal? </span>
              <Link to="/signup" style={linkStyle}>
                Sign-up
              </Link>
            </div>

            {/* Terms and Privacy */}
            <p style={termsTextStyle}>
              By continuing, you agree to{" "}
              <Link to="/terms" style={linkStyle}>
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" style={linkStyle}>
                Privacy Policy
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

