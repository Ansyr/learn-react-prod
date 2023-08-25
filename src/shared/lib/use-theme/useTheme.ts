import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "@/app/providers/theme-provider/lib/ThemeContext";
import {useContext} from "react";

interface setThemeResult {
    toggleTheme: () => void
    theme: Theme
}

export const useTheme = (): setThemeResult => {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {theme, toggleTheme}
}