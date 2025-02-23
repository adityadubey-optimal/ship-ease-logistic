import { Button } from "./button"
import { ArrowRight } from "lucide-react"
import { useTheme } from "../../context/ThemeContext"

interface IconButtonProps {
    text: string
    onClick?: () => void
    size?: "mobile" | "desktop"
}

const IconButton = ({ text, onClick, size = "desktop" }: IconButtonProps) => {
    const { theme } = useTheme()

    return (
        <Button variant="icon" size={size} onClick={onClick} className="group hover:bg-secondary">
            <span className="mr-2">{text}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
    )
}

export default IconButton

