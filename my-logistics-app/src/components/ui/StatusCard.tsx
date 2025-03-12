



// // // import { Card } from "@/components/ui/card"
// // // import { CircleAlert } from "lucide-react"
// // // import { useTheme } from "../../context/ThemeContext"

// // // interface StatusCardProps {
// // //   value: number
// // //   status: "success" | "warning" | "error"
// // //   title: string
// // //   isMobile: boolean
// // //   width?: string
// // //   widthError?: string
// // //   subtitle?: string
// // //   additionalInfo?: string
// // // }

// // // const StatusCard = ({ value, status, title, isMobile, subtitle, additionalInfo, width, widthError }: StatusCardProps) => {
// // //   const { theme } = useTheme()


// // //   const getStatusColors = (status: string) => {
// // //     switch (status) {
// // //       case "success":
// // //         return {
// // //           color: theme.colors.success,
// // //           background: theme.colors.successBg,
// // //           circleOpacity: "0.15",
// // //         }
// // //       case "warning":
// // //         return {
// // //           color: theme.colors.warning,
// // //           background: theme.colors.warningBg,
// // //           circleOpacity: "0.15",
// // //         }
// // //       case "error":
// // //         return {
// // //           color: theme.colors.error,
// // //           background: theme.colors.errorBg,
// // //           circleOpacity: "0.15",
// // //         }
// // //       default:
// // //         return {
// // //           color: theme.colors.primary,
// // //           background: theme.colors.cardBackground,
// // //           circleOpacity: "0.15",
// // //         }
// // //     }
// // //   }

// // //   const { color, background, circleOpacity } = getStatusColors(status)

// // //   return (
// // //     <Card
// // //       className="relative overflow-hidden"
// // //       style={{
// // //         backgroundColor: background,
// // //         borderRadius: "16px",
// // //         boxShadow: theme.shadows.cardWithSpread,
// // //         padding: "24px",
// // //         width: status === "error" ? widthError : width,
// // //         minHeight: "120px",
// // //       }}
// // //     >
// // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //         <div className="flex items-center gap-6">
// // //           {/* Circle with Number */}
// // //           <div
// // //             className="relative flex-shrink-0"
// // //             style={{
// // //               width: "80px",
// // //               height: "80px",
// // //             }}
// // //           >
// // //             <svg width="100%" height="100%" viewBox="0 0 80 80">
// // //               <circle cx="40" cy="40" r={(isMobile ? theme.fonts.mobile.statusCircleRadius.radius : theme.fonts.web.statusCircleRadius.radius) || 36}
// // //                 fill="none" stroke={color} strokeWidth={isMobile ? theme.fonts.mobile.statusCircleStrokeWidth.strokeWidth : theme.fonts.mobile.statusCircleStrokeWidth.strokeWidth}
// // //                 opacity={circleOpacity} />
// // //               <circle
// // //                 cx="40"
// // //                 cy="40"
// // //                 r={(isMobile ? theme.fonts.mobile.statusCircleRadius.radius : theme.fonts.web.statusCircleRadius.radius) || 36}
// // //                 fill="none"
// // //                 stroke={color}
// // //                 strokeWidth={isMobile ? theme.fonts.mobile.statusCircleStrokeWidth.strokeWidth : theme.fonts.mobile.statusCircleStrokeWidth.strokeWidth}
// // //                 strokeLinecap="round"
// // //                 strokeDasharray={226}
// // //                 strokeDashoffset={226 - (226 * value) / 100}
// // //                 transform="rotate(-90 40 40)"
// // //               />
// // //             </svg>
// // //             <span
// // //               className="absolute inset-0 flex items-center justify-center"
// // //               style={{
// // //                 color: color,
// // //                 fontSize: isMobile ? theme.fonts.mobile.statusText.size : theme.fonts.web.statusText.size,
// // //                 fontWeight: isMobile ? theme.fonts.mobile.statusText.weight : theme.fonts.web.statusText.weight,
// // //                 fontFamily: theme.fonts.family,
// // //               }}
// // //             >
// // //               {value}
// // //             </span>
// // //           </div>

// // //           {/* Text Content */}
// // //           <div className="flex flex-col">
// // //             <span
// // //               style={{
// // //                 color: color,
// // //                 fontSize: isMobile ? theme.fonts.mobile.body.size : theme.fonts.web.body.size,
// // //                 fontWeight: isMobile ? theme.fonts.mobile.body.weight : theme.fonts.web.body.weight,
// // //                 lineHeight: "1.2",
// // //                 marginBottom: "4px",
// // //               }}
// // //             >
// // //               {title}
// // //             </span>
// // //             {subtitle && (
// // //               <span
// // //                 style={{
// // //                   color: "rgb(102, 102, 102)",
// // //                   fontSize: isMobile ? theme.fonts.mobile.body.size : theme.fonts.web.body.size,
// // //                   fontWeight: isMobile ? theme.fonts.mobile.body.weight : theme.fonts.web.body.weight,
// // //                 }}
// // //               >
// // //                 {subtitle}
// // //               </span>
// // //             )}
// // //           </div>
// // //         </div>

// // //         {additionalInfo && status === "error" && (
// // //           <div className="flex flex-col items-center justify-center">
// // //             <CircleAlert
// // //               style={{
// // //                 height: "50px",
// // //                 width: "50px",
// // //                 color: theme.colors.error,
// // //                 marginBottom: "8px",
// // //               }}
// // //             />
// // //             <span
// // //               style={{
// // //                 fontSize: isMobile ? theme.fonts.mobile.body.size : theme.fonts.web.body.size,
// // //                 fontWeight: isMobile ? theme.fonts.mobile.body.weight : theme.fonts.web.body.weight,
// // //                 textAlign: "center",
// // //                 color: theme.colors.textSecondary,
// // //               }}
// // //             >
// // //               {additionalInfo}
// // //             </span>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </Card>
// // //   )
// // // }

// // // export default StatusCard


// // import { Card } from "@/components/ui/card"
// // import { CircleAlert } from "lucide-react"
// // import { useTheme } from "../../context/ThemeContext"

// // interface StatusCardProps {
// //   value: number
// //   status: "success" | "warning" | "error"
// //   title: string
// //   isMobile: boolean
// //   width?: string
// //   widthError?: string
// //   subtitle?: string
// //   additionalInfo?: string
// // }

// // const StatusCard = ({ value, status, title, isMobile, subtitle, additionalInfo, width, widthError }: StatusCardProps) => {
// //   const { theme } = useTheme()

// //   // Get colors and opacity based on status using theme constants
// //   const getStatusColors = (status: string) => {
// //     switch (status) {
// //       case "success":
// //         return {
// //           color: theme.colors.success,
// //           background: theme.colors.successBg,
// //           circleOpacity: "0.15",
// //         }
// //       case "warning":
// //         return {
// //           color: theme.colors.warning,
// //           background: theme.colors.warningBg,
// //           circleOpacity: "0.15",
// //         }
// //       case "error":
// //         return {
// //           color: theme.colors.error,
// //           background: theme.colors.errorBgNotification,
// //           circleOpacity: "0.15",
// //         }
// //       default:
// //         return {
// //           color: theme.colors.primary,
// //           background: theme.colors.cardBackground,
// //           circleOpacity: "0.15",
// //         }
// //     }
// //   }

// //   const { color, background, circleOpacity } = getStatusColors(status)


// //   // Get the radius and stroke width from theme (with a fallback)
// //   const radius = isMobile
// //     ? theme.fonts.mobile.statusCircleRadius.radius
// //     : theme.fonts.web.statusCircleRadius.radius || 36

// //   const strokeWidth = isMobile
// //     ? theme.fonts.mobile.statusCircleStrokeWidth.strokeWidth
// //     : theme.fonts.web.statusCircleStrokeWidth.strokeWidth || 6

// //   // Calculate circumference dynamically based on the radius
// //   const circumference = 2 * Math.PI * radius


// //   return (
// //     <Card
// //       className="relative overflow-hidden"
// //       style={{
// //         backgroundColor: background,
// //         borderRadius: "16px",
// //         boxShadow: theme.shadows.cardWithSpread,
// //         padding: isMobile ? "10px" : "24px",
// //         width: status === "error" ? widthError : width,
// //         // minHeight: "120px",
// //         marginBottom: isMobile ? '0px' : '20px'
// //       }}
// //     >
// //       <div className={isMobile ? "flex" : "grid grid-cols-1 md:grid-cols-2 gap-6"}>
// //         <div className={isMobile ? "flex items-center gap-1" : "flex items-center gap-6"}>
// //           {/* Circle with Number */}
// //           <div
// //             className="relative flex-shrink-0"
// //             style={{
// //               width: "80px",
// //               height: "80px",
// //             }}
// //           >
// //             <svg width="100%" height="100%" viewBox="0 0 80 80">
// //               {/* Background circle */}
// //               <circle
// //                 cx="40"
// //                 cy="40"
// //                 r={radius}
// //                 fill="none"
// //                 stroke={color}
// //                 strokeWidth={strokeWidth}
// //                 opacity={circleOpacity}
// //               />
// //               {/* Progress circle */}
// //               <circle
// //                 cx="40"
// //                 cy="40"
// //                 r={radius}
// //                 fill="none"
// //                 stroke={color}
// //                 strokeWidth={strokeWidth}
// //                 strokeLinecap="round"
// //                 strokeDasharray={circumference}
// //                 strokeDashoffset={circumference - (circumference * value) / 100}
// //                 transform="rotate(-90 40 40)"
// //               />
// //             </svg>
// //             <span
// //               className="absolute inset-0 flex items-center justify-center"
// //               style={{
// //                 color: color,
// //                 fontSize: isMobile ? theme.fonts.mobile.statusText.size : theme.fonts.web.statusText.size,
// //                 fontWeight: isMobile ? theme.fonts.mobile.statusText.weight : theme.fonts.web.statusText.weight,
// //                 fontFamily: theme.fonts.family,
// //               }}
// //             >
// //               {value}
// //             </span>
// //           </div>

// //           {/* Text Content */}
// //           <div className="flex flex-col">
// //             <span
// //               style={{
// //                 color: color,
// //                 fontSize: isMobile ? theme.fonts.mobile.body.size : theme.fonts.web.body.size,
// //                 fontWeight: isMobile ? theme.fonts.mobile.body.weight : theme.fonts.web.body.weight,
// //                 lineHeight: "1.2",
// //                 marginBottom: "4px",
// //               }}
// //             >
// //               {title}
// //             </span>
// //             {subtitle && (
// //               <span
// //                 style={{
// //                   color: "rgb(102, 102, 102)",
// //                   fontSize: isMobile ? theme.fonts.mobile.body.size : theme.fonts.web.body.size,
// //                   fontWeight: isMobile ? theme.fonts.mobile.body.weight : theme.fonts.web.body.weight,
// //                 }}
// //               >
// //                 {subtitle}
// //               </span>
// //             )}
// //           </div>
// //         </div>

// //         {additionalInfo && status === "error" && (
// //           <div className={isMobile ? "flex flex-col items-center justify-center" : "flex items-center justify-center"} style={{
// //             marginLeft: isMobile ? '20px' : '0px',
// //             flexDirection: 'column',
// //             backgroundColor: theme.colors.statusCardErrorBackground,
// //             borderRadius: '9px',
// //             // padding: '1rem'
// //           }}>
// //             <CircleAlert
// //               style={{
// //                 height: "50px",
// //                 width: "50px",
// //                 color: theme.colors.error,
// //                 marginBottom: "8px",
// //               }}
// //             />
// //             <span
// //               style={{
// //                 fontSize: isMobile ? theme.fonts.mobile.body.size : theme.fonts.web.body.size,
// //                 fontWeight: isMobile ? theme.fonts.mobile.body.weight : theme.fonts.web.body.weight,
// //                 textAlign: "center",
// //                 color: theme.colors.textSecondary,
// //               }}
// //             >
// //               {additionalInfo}
// //             </span>
// //           </div>
// //         )}
// //       </div>
// //     </Card>
// //   )
// // }

// // export default StatusCard



// import { Card } from "@/components/ui/card"
// import { CircleAlert } from "lucide-react"
// import { useTheme } from "../../context/ThemeContext"
// import useResponsiveSize from "@/hooks/useResponsiveSize" // ensure this hook is available

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

// const StatusCard = ({
//   value,
//   status,
//   title,
//   isMobile,
//   subtitle,
//   additionalInfo,
//   width,
//   widthError,
// }: StatusCardProps) => {
//   const { theme } = useTheme()

//   // Function to choose colors based on status
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
//           background: theme.colors.errorBgNotification,
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

//   // Responsive sizes for text elements using the custom hook.
//   const circleNumberFontSize = useResponsiveSize(27, 54) // number inside circle: 27px to 54px
//   const titleTextFontSize = useResponsiveSize(17, 25)      // title: 17px to 25px
//   const subtitleTextFontSize = useResponsiveSize(14, 18)   // subtitle: 14px to 18px

//   // Get radius and stroke width from theme (with fallback values)
//   const radius = isMobile
//     ? theme.fonts.mobile.statusCircleRadius.radius
//     : theme.fonts.web.statusCircleRadius.radius || 36

//   const strokeWidth = isMobile
//     ? theme.fonts.mobile.statusCircleStrokeWidth.strokeWidth
//     : theme.fonts.web.statusCircleStrokeWidth.strokeWidth || 6

//   // Calculate circumference for the progress circle.
//   const circumference = 2 * Math.PI * radius

//   return (
//     <Card
//       className="relative overflow-hidden"
//       style={{
//         backgroundColor: background,
//         borderRadius: "16px",
//         boxShadow: theme.shadows.cardWithSpread,
//         padding: isMobile ? "10px" : "24px",
//         width: status === "error" ? widthError : width,
//         minWidth: "170px",
//         minHeight: "100px",
//         marginBottom: isMobile ? "0px" : "20px",
//       }}
//     >
//       <div className={isMobile ? "flex" : "grid grid-cols-1 md:grid-cols-2 gap-6"}>
//         <div className={isMobile ? "flex items-center gap-1" : "flex items-center gap-6"}>
//           {/* Circle with Number */}
//           <div
//             className="relative flex-shrink-0"
//             style={{
//               width: "80px",
//               height: "80px",
//             }}
//           >
//             <svg width="100%" height="100%" viewBox="0 0 80 80">
//               {/* Background circle */}
//               <circle
//                 cx="40"
//                 cy="40"
//                 r={radius}
//                 fill="none"
//                 stroke={color}
//                 strokeWidth={strokeWidth}
//                 opacity={circleOpacity}
//               />
//               {/* Progress circle */}
//               <circle
//                 cx="40"
//                 cy="40"
//                 r={radius}
//                 fill="none"
//                 stroke={color}
//                 strokeWidth={strokeWidth}
//                 strokeLinecap="round"
//                 strokeDasharray={circumference}
//                 strokeDashoffset={circumference - (circumference * value) / 100}
//                 transform="rotate(-90 40 40)"
//               />
//             </svg>
//             <span
//               className="absolute inset-0 flex items-center justify-center"
//               style={{
//                 color: color,
//                 fontSize: `${circleNumberFontSize}px`,
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
//                 fontSize: `${titleTextFontSize}px`,
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
//                   fontSize: `${subtitleTextFontSize}px`,
//                   fontWeight: isMobile ? theme.fonts.mobile.body.weight : theme.fonts.web.body.weight,
//                 }}
//               >
//                 {subtitle}
//               </span>
//             )}
//           </div>
//         </div>

//         {additionalInfo && status === "error" && (
//           <div
//             className={isMobile ? "flex flex-col items-center justify-center" : "flex items-center justify-center"}
//             style={{
//               marginLeft: isMobile ? "20px" : "0px",
//               flexDirection: "column",
//               backgroundColor: theme.colors.statusCardErrorBackground,
//               borderRadius: "9px",
//             }}
//           >
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


// import { Card } from "@/components/ui/card"
// import { CircleAlert } from "lucide-react"
// import { useTheme } from "../../context/ThemeContext"
// import useResponsiveSize from "@/hooks/useResponsiveSize" // your responsive hook

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

// const StatusCard = ({
//   value,
//   status,
//   title,
//   isMobile,
//   subtitle,
//   additionalInfo,
//   width,
//   widthError,
// }: StatusCardProps) => {
//   const { theme } = useTheme()

//   // Get colors based on status
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
//           background: theme.colors.errorBgNotification,
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

//   // Use responsive hook for text elements only.
//   const titleTextFontSize = useResponsiveSize(17, 25)      // title text: 17px to 25px
//   const subtitleTextFontSize = useResponsiveSize(14, 18)   // subtitle text: 14px to 18px

//   // Fixed constants for the card & circle
//   const CARD_MIN_WIDTH = "170px"
//   const CARD_MIN_HEIGHT = "100px"
//   const CIRCLE_CONTAINER_SIZE = 80 // in pixels
//   const fixedRadius = 36           // fixed circle radius
//   const fixedStrokeWidth = 6       // fixed stroke width
//   const circumference = 2 * Math.PI * fixedRadius
//   const circleNumberFontSize = 27  // fixed font size inside the circle

//   return (
//     <Card
//       className="relative overflow-hidden"
//       style={{
//         backgroundColor: background,
//         borderRadius: "16px",
//         boxShadow: theme.shadows.cardWithSpread,
//         padding: isMobile ? "10px" : "24px",
//         width: status === "error" ? widthError : width,
//         minWidth: CARD_MIN_WIDTH,
//         minHeight: CARD_MIN_HEIGHT,
//         marginBottom: isMobile ? "0px" : "20px",
//       }}
//     >
//       <div className={isMobile ? "flex" : "grid grid-cols-1 md:grid-cols-2 gap-6"}>
//         <div className={isMobile ? "flex items-center gap-1" : "flex items-center gap-6"}>
//           {/* Circle with Number */}
//           <div
//             className="relative flex-shrink-0"
//             style={{
//               width: `${CIRCLE_CONTAINER_SIZE}px`,
//               height: `${CIRCLE_CONTAINER_SIZE}px`,
//             }}
//           >
//             <svg width="100%" height="100%" viewBox="0 0 80 80">
//               {/* Background circle */}
//               <circle
//                 cx="40"
//                 cy="40"
//                 r={fixedRadius}
//                 fill="none"
//                 stroke={color}
//                 strokeWidth={fixedStrokeWidth}
//                 opacity={circleOpacity}
//               />
//               {/* Progress circle */}
//               <circle
//                 cx="40"
//                 cy="40"
//                 r={fixedRadius}
//                 fill="none"
//                 stroke={color}
//                 strokeWidth={fixedStrokeWidth}
//                 strokeLinecap="round"
//                 strokeDasharray={circumference}
//                 strokeDashoffset={circumference - (circumference * value) / 100}
//                 transform="rotate(-90 40 40)"
//               />
//             </svg>
//             <span
//               className="absolute inset-0 flex items-center justify-center"
//               style={{
//                 color: color,
//                 fontSize: `${circleNumberFontSize}px`,
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
//                 fontSize: `${titleTextFontSize}px`,
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
//                   fontSize: `${subtitleTextFontSize}px`,
//                   fontWeight: isMobile ? theme.fonts.mobile.body.weight : theme.fonts.web.body.weight,
//                 }}
//               >
//                 {subtitle}
//               </span>
//             )}
//           </div>
//         </div>

//         {additionalInfo && status === "error" && (
//           <div
//             className={isMobile ? "flex flex-col items-center justify-center" : "flex items-center justify-center"}
//             style={{
//               marginLeft: isMobile ? "20px" : "0px",
//               flexDirection: "column",
//               backgroundColor: theme.colors.statusCardErrorBackground,
//               borderRadius: "9px",
//             }}
//           >
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
              style={{
                color: color,
                fontSize: `${titleTextFontSize}px`,
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