



// import { Card } from "@/components/ui/card"
// import { CircleAlert } from "lucide-react"
// import { useTheme } from "../../context/ThemeContext"

// interface StatusCardProps {
//   value: number
//   status: "success" | "warning" | "error"
//   title: string
//   isMobile: boolean
//   width?: string
//   widthError?: string
//   subtitle?: string
//   additionalInfo?: string
// }

// const StatusCard = ({ value, status, title, isMobile, subtitle, additionalInfo, width, widthError }: StatusCardProps) => {
//   const { theme } = useTheme()


//   const getStatusColors = (status: string) => {
//     switch (status) {
//       case "success":
//         return {
//           color: theme.colors.success,
//           background: theme.colors.successBg,
//           circleOpacity: "0.15",
//         }
//       case "warning":
//         return {
//           color: theme.colors.warning,
//           background: theme.colors.warningBg,
//           circleOpacity: "0.15",
//         }
//       case "error":
//         return {
//           color: theme.colors.error,
//           background: theme.colors.errorBg,
//           circleOpacity: "0.15",
//         }
//       default:
//         return {
//           color: theme.colors.primary,
//           background: theme.colors.cardBackground,
//           circleOpacity: "0.15",
//         }
//     }
//   }

//   const { color, background, circleOpacity } = getStatusColors(status)

//   return (
//     <Card
//       className="relative overflow-hidden"
//       style={{
//         backgroundColor: background,
//         borderRadius: "16px",
//         boxShadow: theme.shadows.cardWithSpread,
//         padding: "24px",
//         width: status === "error" ? widthError : width,
//         minHeight: "120px",
//       }}
//     >
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="flex items-center gap-6">
//           {/* Circle with Number */}
//           <div
//             className="relative flex-shrink-0"
//             style={{
//               width: "80px",
//               height: "80px",
//             }}
//           >
//             <svg width="100%" height="100%" viewBox="0 0 80 80">
//               <circle cx="40" cy="40" r={(isMobile ? theme.fonts.mobile.statusCircleRadius.radius : theme.fonts.web.statusCircleRadius.radius) || 36}
//                 fill="none" stroke={color} strokeWidth={isMobile ? theme.fonts.mobile.statusCircleStrokeWidth.strokeWidth : theme.fonts.mobile.statusCircleStrokeWidth.strokeWidth}
//                 opacity={circleOpacity} />
//               <circle
//                 cx="40"
//                 cy="40"
//                 r={(isMobile ? theme.fonts.mobile.statusCircleRadius.radius : theme.fonts.web.statusCircleRadius.radius) || 36}
//                 fill="none"
//                 stroke={color}
//                 strokeWidth={isMobile ? theme.fonts.mobile.statusCircleStrokeWidth.strokeWidth : theme.fonts.mobile.statusCircleStrokeWidth.strokeWidth}
//                 strokeLinecap="round"
//                 strokeDasharray={226}
//                 strokeDashoffset={226 - (226 * value) / 100}
//                 transform="rotate(-90 40 40)"
//               />
//             </svg>
//             <span
//               className="absolute inset-0 flex items-center justify-center"
//               style={{
//                 color: color,
//                 fontSize: isMobile ? theme.fonts.mobile.statusText.size : theme.fonts.web.statusText.size,
//                 fontWeight: isMobile ? theme.fonts.mobile.statusText.weight : theme.fonts.web.statusText.weight,
//                 fontFamily: theme.fonts.family,
//               }}
//             >
//               {value}
//             </span>
//           </div>

//           {/* Text Content */}
//           <div className="flex flex-col">
//             <span
//               style={{
//                 color: color,
//                 fontSize: isMobile ? theme.fonts.mobile.body.size : theme.fonts.web.body.size,
//                 fontWeight: isMobile ? theme.fonts.mobile.body.weight : theme.fonts.web.body.weight,
//                 lineHeight: "1.2",
//                 marginBottom: "4px",
//               }}
//             >
//               {title}
//             </span>
//             {subtitle && (
//               <span
//                 style={{
//                   color: "rgb(102, 102, 102)",
//                   fontSize: isMobile ? theme.fonts.mobile.body.size : theme.fonts.web.body.size,
//                   fontWeight: isMobile ? theme.fonts.mobile.body.weight : theme.fonts.web.body.weight,
//                 }}
//               >
//                 {subtitle}
//               </span>
//             )}
//           </div>
//         </div>

//         {additionalInfo && status === "error" && (
//           <div className="flex flex-col items-center justify-center">
//             <CircleAlert
//               style={{
//                 height: "50px",
//                 width: "50px",
//                 color: theme.colors.error,
//                 marginBottom: "8px",
//               }}
//             />
//             <span
//               style={{
//                 fontSize: isMobile ? theme.fonts.mobile.body.size : theme.fonts.web.body.size,
//                 fontWeight: isMobile ? theme.fonts.mobile.body.weight : theme.fonts.web.body.weight,
//                 textAlign: "center",
//                 color: theme.colors.textSecondary,
//               }}
//             >
//               {additionalInfo}
//             </span>
//           </div>
//         )}
//       </div>
//     </Card>
//   )
// }

// export default StatusCard


import { Card } from "@/components/ui/card"
import { CircleAlert } from "lucide-react"
import { useTheme } from "../../context/ThemeContext"

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

const StatusCard = ({ value, status, title, isMobile, subtitle, additionalInfo, width, widthError }: StatusCardProps) => {
  const { theme } = useTheme()

  // Get colors and opacity based on status using theme constants
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
          background: theme.colors.errorBg,
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


  // Get the radius and stroke width from theme (with a fallback)
  const radius = isMobile
    ? theme.fonts.mobile.statusCircleRadius.radius
    : theme.fonts.web.statusCircleRadius.radius || 36

  const strokeWidth = isMobile
    ? theme.fonts.mobile.statusCircleStrokeWidth.strokeWidth
    : theme.fonts.web.statusCircleStrokeWidth.strokeWidth || 6

  // Calculate circumference dynamically based on the radius
  const circumference = 2 * Math.PI * radius


  return (
    <Card
      className="relative overflow-hidden"
      style={{
        backgroundColor: background,
        borderRadius: "16px",
        boxShadow: theme.shadows.cardWithSpread,
        padding: isMobile ? "10px" : "24px",
        width: status === "error" ? widthError : width,
        minHeight: "120px",
        marginBottom: isMobile ? '0px' : '20px'
      }}
    >
      <div className={isMobile ? "flex" : "grid grid-cols-1 md:grid-cols-2 gap-6"}>
        <div className={isMobile ? "flex items-center gap-1" : "flex items-center gap-6"}>
          {/* Circle with Number */}
          <div
            className="relative flex-shrink-0"
            style={{
              width: "80px",
              height: "80px",
            }}
          >
            <svg width="100%" height="100%" viewBox="0 0 80 80">
              {/* Background circle */}
              <circle
                cx="40"
                cy="40"
                r={radius}
                fill="none"
                stroke={color}
                strokeWidth={strokeWidth}
                opacity={circleOpacity}
              />
              {/* Progress circle */}
              <circle
                cx="40"
                cy="40"
                r={radius}
                fill="none"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={circumference - (circumference * value) / 100}
                transform="rotate(-90 40 40)"
              />
            </svg>
            <span
              className="absolute inset-0 flex items-center justify-center"
              style={{
                color: color,
                fontSize: isMobile ? theme.fonts.mobile.statusText.size : theme.fonts.web.statusText.size,
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
              style={{
                color: color,
                fontSize: isMobile ? theme.fonts.mobile.body.size : theme.fonts.web.body.size,
                fontWeight: isMobile ? theme.fonts.mobile.body.weight : theme.fonts.web.body.weight,
                lineHeight: "1.2",
                marginBottom: "4px",
              }}
            >
              {title}
            </span>
            {subtitle && (
              <span
                style={{
                  color: "rgb(102, 102, 102)",
                  fontSize: isMobile ? theme.fonts.mobile.body.size : theme.fonts.web.body.size,
                  fontWeight: isMobile ? theme.fonts.mobile.body.weight : theme.fonts.web.body.weight,
                }}
              >
                {subtitle}
              </span>
            )}
          </div>
        </div>

        {additionalInfo && status === "error" && (
          <div className={isMobile ? "flex flex-col items-center justify-center" : "flex items-center justify-center"} style={{
            marginLeft: isMobile ? '20px' : '0px'
          }}>
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

