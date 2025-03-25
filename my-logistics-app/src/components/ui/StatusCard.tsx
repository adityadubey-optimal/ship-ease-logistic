

import { Card } from "@/components/ui/card"
import { CircleAlert } from "lucide-react"
import { useTheme } from "../../context/ThemeContext"
import useResponsiveSize from "@/hooks/useResponsiveSize" // your responsive hook

interface StatusCardProps {
  value: number
  status: "success" | "warning" | "error"
  title: string
  isMobile: boolean
  width?: string
  widthError?: string
  subtitle?: string
  additionalInfo?: string
}

const StatusCard = ({
  value,
  status,
  title,
  isMobile,
  subtitle,
  additionalInfo,
  width,
  widthError,
}: StatusCardProps) => {
  const { theme } = useTheme()

  // Get colors based on status
  const getStatusColors = (status: string) => {
    switch (status) {
      case "success":
        return {
          color: theme.colors.success,
          background: theme.colors.successBg,
          circleOpacity: "0.15",
        }
      case "warning":
        return {
          color: theme.colors.warning,
          background: theme.colors.warningBg,
          circleOpacity: "0.15",
        }
      case "error":
        return {
          color: theme.colors.error,
          background: theme.colors.errorBgNotification,
          circleOpacity: "0.15",
        }
      default:
        return {
          color: theme.colors.primary,
          background: theme.colors.cardBackground,
          circleOpacity: "0.15",
        }
    }
  }

  const { color, background, circleOpacity } = getStatusColors(status)

  // Responsive text sizes
  const titleTextFontSize = useResponsiveSize(17, 25) // title text: 17px to 25px
  const subtitleTextFontSize = useResponsiveSize(14, 18) // subtitle text: 14px to 18px
  const circleNumberFontSize = useResponsiveSize(27, 54) // number inside circle: 27px to 54px

  // Responsive dimensions for the card and circle container.
  const cardHeight = useResponsiveSize(100, 180)           // Card height from 100px to 220px
  // If you wish the card width to be determined by props, leave those as-is.
  // For the circle container, we make it responsive:
  const circleContainerSize = useResponsiveSize(80, 100)     // Circle container from 80px to 100px
  const circlePadding = useResponsiveSize(4, 6)              // Padding to determine circle radius
  const fixedRadius = circleContainerSize / 2 - circlePadding // Compute circle radius from container size
  const strokeWidth = useResponsiveSize(6, 8)                // Stroke width responsive from 6px to 8px

  // Calculate circumference dynamically based on the fixed radius.
  const circumference = 2 * Math.PI * fixedRadius

  return (
    <Card
      className="relative overflow-hidden"
      style={{
        backgroundColor: background,
        borderRadius: "16px",
        boxShadow: theme.shadows.cardWithSpread,
        padding: isMobile ? "10px" : "24px",
        width: status === "error" ? widthError : width,
        minWidth: isMobile ? "180px" : "220px",
        minHeight: `${cardHeight}px`,
        marginBottom: isMobile ? "0px" : "20px",
      }}
    >
      <div className={isMobile ? "flex" : "grid grid-cols-1 md:grid-cols-2 gap-6"}>
        <div className={isMobile ? "flex items-center gap-1" : "flex items-center gap-6"}>
          {/* Circle with Number */}
          <div
            className="relative flex-shrink-0"
            style={{
              width: `${circleContainerSize}px`,
              height: `${circleContainerSize}px`,
            }}
          >
            <svg
              width="100%"
              height="100%"
              viewBox={`0 0 ${circleContainerSize} ${circleContainerSize}`}
            >
              {/* Background circle */}
              <circle
                cx={circleContainerSize / 2}
                cy={circleContainerSize / 2}
                r={fixedRadius}
                fill="none"
                stroke={color}
                strokeWidth={strokeWidth}
                opacity={circleOpacity}
              />
              {/* Progress circle */}
              <circle
                cx={circleContainerSize / 2}
                cy={circleContainerSize / 2}
                r={fixedRadius}
                fill="none"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={circumference - (circumference * value) / 100}
                transform={`rotate(-90 ${circleContainerSize / 2} ${circleContainerSize / 2})`}
              />
            </svg>
            <span
              className="absolute inset-0 flex items-center justify-center"
              style={{
                color: color,
                fontSize: `${circleNumberFontSize}px`,
                fontWeight: isMobile ? theme.fonts.mobile.statusText.weight : theme.fonts.web.statusText.weight,
                fontFamily: theme.fonts.family,
              }}
            >
              {value}
            </span>
          </div>

          {/* Text Content */}
          <div className="flex flex-col">
            <span
              style={isMobile ? {
                color: color,
                fontSize: `${titleTextFontSize}px`,
                fontWeight: isMobile ? theme.fonts.mobile.body.weight : theme.fonts.web.body.weight,
                lineHeight: "1.2",
                marginBottom: "4px",
              } : {
                color: color,
                fontSize: `${titleTextFontSize}px`,
                fontWeight: isMobile ? theme.fonts.mobile.body.weight : theme.fonts.web.body.weight,
                lineHeight: "1.2",
                marginBottom: "4px",
                width: '75px'
              }}
            >
              {title}
            </span>
            {subtitle && (
              <span
                style={{
                  color: "rgb(102, 102, 102)",
                  fontSize: `${subtitleTextFontSize}px`,
                  fontWeight: isMobile ? theme.fonts.mobile.body.weight : theme.fonts.web.body.weight,
                }}
              >
                {subtitle}
              </span>
            )}
          </div>
        </div>

        {additionalInfo && status === "error" && (
          <div
            className={isMobile ? "flex flex-col items-center justify-center" : "flex items-center justify-center"}
            style={{
              marginLeft: isMobile ? "20px" : "0px",
              flexDirection: "column",
              backgroundColor: theme.colors.statusCardErrorBackground,
              borderRadius: "9px",

            }}
          >
            <CircleAlert
              style={{
                height: "50px",
                width: "50px",
                color: theme.colors.error,
                marginBottom: "8px",
              }}
            />
            <span
              style={{
                fontSize: isMobile ? theme.fonts.mobile.body.size : theme.fonts.web.body.size,
                fontWeight: isMobile ? theme.fonts.mobile.body.weight : theme.fonts.web.body.weight,
                textAlign: "center",
                color: theme.colors.textSecondary,
                width: '135px'
              }}
            >
              {additionalInfo}
            </span>
          </div>
        )}
      </div>
    </Card>
  )
}

export default StatusCard