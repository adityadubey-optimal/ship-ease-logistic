import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";
import { useNavigate } from "react-router-dom";



export default function SpecialButton() {
    const { theme } = useTheme()
    const navigate = useNavigate()


    const buttonStyle: React.CSSProperties = {
        width: "50vw",
        height: "4rem",
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
            style={buttonStyle} onClick={() => {
                navigate('/buyer/shippingDetails/testinId')
            }} >Go To Shipping Information </Button>
    )
}


