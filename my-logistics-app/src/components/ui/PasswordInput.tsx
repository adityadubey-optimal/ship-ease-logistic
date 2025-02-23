"use client";

import * as React from "react";
import { Eye, EyeOff } from "lucide-react";
import styled from "styled-components";

// Styled Label
const StyledLabel = styled.label`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
`;

// Container for the entire input component
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

// Wrapper to position the icon relative to the input
const InputWrapper = styled.div`
  position: relative;
`;

// Styled input element; uses dynamic props for error/success borders
const StyledInput = styled.input<{ $hasError?: boolean; $hasSuccess?: boolean }>`
  height: 3.5rem;
  border-radius: 1rem;
  border: 2px solid
    ${(props) =>
    props.$hasError ? "#fecaca" : props.$hasSuccess ? "#bbf7d0" : "#e5e1ff"};
  background-color: white;
  padding-left: 1rem;
  padding-right: 3rem;
  font-size: 1rem;

  &:focus-visible {
    outline: none;
    border-color: ${(props) =>
    props.$hasError ? "#fecaca" : props.$hasSuccess ? "#bbf7d0" : "#e5e1ff"};
  }
`;

// Icon positioned inside the input field
const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #6b7280;
  pointer-events: none;
`;

// Button for toggling password visibility
const ToggleButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #6b7280;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #374151;
  }
`;

// Error message styling
const ErrorMessage = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  color: #ef4444;
`;

// Success message styling
const SuccessMessage = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  color: #22c55e;
`;

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  success?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}

export default function PasswordInput({
  label = "Re-Type Password",
  error,
  success,
  onValueChange,
  className,
  ...props
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [value, setValue] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onValueChange?.(newValue);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container className={className}>
      {label && <StyledLabel>{label}</StyledLabel>}

      <InputWrapper>
        <StyledInput
          {...props}
          type={props.type === "password" && showPassword ? "text" : props.type}
          value={value}
          onChange={handleChange}
          $hasError={!!error}
          $hasSuccess={!!success}
          style={{ paddingLeft: "1rem", paddingRight: "3rem" }}
        />
        {props.type === "password" && (
          <ToggleButton type="button" onClick={togglePasswordVisibility}>
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            <span className="sr-only">
              {showPassword ? "Hide password" : "Show password"}
            </span>
          </ToggleButton>
        )}
      </InputWrapper>

      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && <SuccessMessage>{success}</SuccessMessage>}
    </Container>
  );
}