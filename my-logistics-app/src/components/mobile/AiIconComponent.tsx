import vector from '@/assets/Vector (1).svg'
import { useTheme } from '@/context/ThemeContext'

export default function AiIcon() {
    const { theme } = useTheme()
    return (<div style={{ position: 'fixed', background: theme.colors.primary, borderRadius: "50%", height: '70px', width: '70px', color: 'white', right: '20px', bottom: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999999999999999999 }}>
        <img src={vector} alt="Ship illustration" className="w-10 h-10 object-contain" />
    </div>
    )
}