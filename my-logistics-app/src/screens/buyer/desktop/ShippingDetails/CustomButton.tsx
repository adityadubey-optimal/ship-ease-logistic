import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";



export default function SpecialButton() {
    const { theme } = useTheme()


    const buttonStyle: React.CSSProperties = {
        width: "50vw",
        height: "3.5rem",
        backgroundColor: theme.colors.primary,
        color: "white",
        border: "none",
        borderRadius: "2rem",
        fontSize: theme.fonts.web.venderDetialsPage.shipingButtonFont.size,
        fontWeight: theme.fonts.web.venderDetialsPage.shipingButtonFont.weight,
        cursor: "pointer",
        transition: "background-color 0.2s ease",
    }


    return (
        <Button
            style={buttonStyle} >Go To Shipping Information </Button>
    )
}


