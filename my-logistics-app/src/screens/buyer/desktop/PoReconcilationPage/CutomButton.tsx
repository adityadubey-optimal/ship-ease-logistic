import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";



export default function SpecialButton() {
    const { theme } = useTheme()


    const buttonStyle: React.CSSProperties = {
        width: "40vw",
        height: "2.5rem",
        backgroundColor: theme.colors.primary,
        color: "white",
        border: "none",
        borderRadius: "2rem",
        fontSize: theme.fonts.web.venderDetialsPage.shipingButtonFont.size,
        fontWeight: theme.fonts.web.venderDetialsPage.shipingButtonFont.weight,
        padding: '15px 50px',
        cursor: "pointer",
        transition: "background-color 0.2s ease",
    }


    return (
        <Button
            style={buttonStyle} >Import Selected PO's </Button>
    )
}


