"use client"

import type React from "react"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Link } from "react-router-dom"
import GenericInput from "@/components/ui/InputField"
import { useTheme } from "../../../context/ThemeContext"
import logoImage from '@assets/Group 134@2x.png'

export default function SigninPageMobile() {
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

  const relativeContainerStyle: React.CSSProperties = {
    position: "relative",
    height: "200px", // Adjust this value as needed
    // Optionally, add overflow hidden if you want to crop parts of the image
    overflow: "hidden",
  }

  // Logo image style: absolutely positioned within the relative container
  const backgroudImageStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    // Set a fixed width or adjust as needed
    width: "100vw",
    height: "auto",
    zIndex: 10, // Ensure the logo overlaps other content
  }


  // Mobile-optimized styles using theme
  const pageStyle: React.CSSProperties = {
    minHeight: "100vh",
    backgroundColor: theme.colors.background,
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column",
    fontFamily: theme.fonts.family,
  }

  const logoStyle: React.CSSProperties = {
    color: "#FF0000",
    fontSize: "42px",
    fontWeight: theme.fonts.mobile.heading.weight,
    marginBottom: "2rem",
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
    gap: "1rem",
    width: "100%",
  }

  const linkContainerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "0.5rem",
    marginBottom: "2rem",

  }
  const singUpLinkStyle: React.CSSProperties = {
    color: theme.colors.primary,
    textDecoration: "none",
    fontSize: theme.fonts.mobile.signupPageLink.size,
    fontWeight: theme.fonts.mobile.signupPageLink.weight,
  }

  const linkStyle: React.CSSProperties = {
    color: theme.colors.primary,
    textDecoration: "none",
    fontSize: theme.fonts.mobile.heading.size,
    fontWeight: theme.fonts.mobile.heading.weight,
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
    cursor: "pointer",
    marginTop: "1rem",
    marginBottom: "1rem",
  }

  const signupTextStyle: React.CSSProperties = {
    textAlign: "center",
    fontSize: theme.fonts.mobile.signupPageLink.size,
    fontWeight: theme.fonts.mobile.signupPageLink.weight,
    marginBottom: "1rem",
  }

  const termsTextStyle: React.CSSProperties = {
    textAlign: "center",
    fontSize: theme.fonts.mobile.notification.size,
    color: theme.colors.textSecondary,
    padding: "0 1rem",
  }

  return (
    <div style={pageStyle}>
      {/* Logo */}
      <h1 style={logoStyle}>COTTON:ON</h1>
      <div style={relativeContainerStyle}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            clipPath: "inset(0 0 0 0)", // This is a full rectangle
          }}
        >
          <img src={logoImage} style={backgroudImageStyle}></img>
        </div>
      </div>
      {/* Main Content */}
      <div>
        <h2 style={headingStyle}>
          To get started,
          <br />
          please sign-in
        </h2>

        <form onSubmit={handleSubmit} style={formStyle}>
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

          {/* Sign Up Link */}
          <div style={signupTextStyle}>
            <span>New to the portal? </span>
            <Link to="/signup" style={singUpLinkStyle}>
              Sign-up
            </Link>
          </div>

          {/* Submit Button */}
          <button type="submit" style={buttonStyle}>
            Continue
          </button>

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
  )
}

