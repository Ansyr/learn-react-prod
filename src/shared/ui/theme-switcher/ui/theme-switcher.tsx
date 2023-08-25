import {classNames} from "@/shared/lib/class-names/class-names";
import styles from "./styles.module.scss"
import {useTheme} from "@/shared/lib/use-theme/useTheme";
import DarkIcon from "@/shared/assets/icons/theme-dark.svg"
import LightIcon from "@/shared/assets/icons/theme-light.svg"
import {Theme} from "@/app/providers/theme-provider/lib/ThemeContext";
import Button from "@/shared/ui/button/button";
interface ThemeSwitcherProps{
    className?:string
}

const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const {className} = props
    const {theme,toggleTheme} = useTheme()
    return (
        <Button theme={'clear'} onClick={toggleTheme} className={classNames(styles.ThemeSwitcher,{},[className])}>
            {theme == Theme.DARK? <DarkIcon/> : <LightIcon/>}
        </Button>
    );
};

export default ThemeSwitcher;