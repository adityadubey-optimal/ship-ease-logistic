
"use client"

import { useState } from "react"
import { Eye, EyeOff } from 'lucide-react'
import { Link } from "react-router-dom"
import GenericInput from "@/components/ui/InputField"
import { useTheme } from '../../../context/ThemeContext' // Adjust the import path as needed

export default function SignupPage() {
  const { theme } = useTheme()
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    password: "",
    confirmPassword: "",
    role: ""
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [passwordMatch, setPasswordMatch] = useState<{
    error?: string;
    success?: string;
  }>({})

  const handleInputChange = (field: keyof typeof formData) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))

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

  const pageStyle: React.CSSProperties = {
    minHeight: '100vh',
    backgroundColor: theme.colors.background,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: theme.fonts.family,
  }

  const contentStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '1200px',
    display: 'grid',
    gridTemplateColumns: '45% 55%',
    gap: '2rem',
    padding: '2rem',
  }

  const formContainerStyle: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: '1.5rem',
    padding: '2rem',
    boxShadow: theme.shadows.outer,
  }

  const headingStyle: React.CSSProperties = {
    fontSize: theme.fonts.web.heading.size,
    fontWeight: theme.fonts.web.heading.weight,
    color: theme.colors.textPrimary,
    marginBottom: '1.5rem',
  }

  const buttonStyle: React.CSSProperties = {
    width: '100%',
    height: '3.5rem',
    backgroundColor: theme.colors.primary,
    color: 'white',
    border: 'none',
    borderRadius: '2rem',
    fontSize: theme.fonts.web.body.size,
    fontWeight: theme.fonts.web.body.weight,
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  }

  const linkStyle: React.CSSProperties = {
    color: theme.colors.primary,
    textDecoration: 'none',
    fontWeight: theme.fonts.web.body.weight,
  }

  const labelStyle: React.CSSProperties = {
    fontSize: theme.fonts.web.secondaryHeading.size,
    fontWeight: theme.fonts.web.secondaryHeading.weight,
    color: theme.colors.textPrimary,
    marginBottom: '0.5rem',
    display: 'block',
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    height: '3.5rem',
    padding: '0 1rem',
    border: `2px solid ${theme.colors.primary}`,
    borderRadius: '0.75rem',
    fontSize: theme.fonts.web.body.size,
    fontWeight: theme.fonts.web.body.weight,
    backgroundColor: 'white',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  }

  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <div>
          <h1 style={{ ...headingStyle, color: '#FF0000' }}>COTTON:ON</h1>
        </div>
        <div style={formContainerStyle}>
          <h2 style={headingStyle}>Fill your details to sign-up</h2>
          <form onSubmit={handleSubmit}>
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
            <div style={{ marginBottom: '1rem' }}>
              <label style={labelStyle}>Select Your Role</label>
              <select
                value={formData.role}
                onChange={(e) => handleInputChange("role")(e.target.value)}
                style={{
                  ...inputStyle,
                  appearance: 'none',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23666666'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1rem center',
                  backgroundSize: '1em',
                }}
              >
                <option value="">Select from the menu</option>
                <option value="admin">Administrator</option>
                <option value="user">User</option>
                <option value="manager">Manager</option>
              </select>
            </div>
            <button type="submit" style={buttonStyle}>
              Continue
            </button>
          </form>
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <span>Already have an account? </span>
            <Link to="/signin" style={linkStyle}>Sign-in</Link>
          </div>
          <p style={{ textAlign: 'center', fontSize: theme.fonts.web.notification.size, marginTop: '1rem' }}>
            By continuing, you agree to{" "}
            <Link to="/terms" style={linkStyle}>Terms of Service</Link>{" "}
            and{" "}
            <Link to="/privacy" style={linkStyle}>Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  )

}

