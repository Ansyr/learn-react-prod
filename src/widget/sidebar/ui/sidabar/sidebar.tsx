import {classNames} from "@/shared/lib/class-names/class-names";
import styles from "./styles.module.scss"
import {useState} from "react";
import ThemeSwitcher from "@/shared/ui/theme-switcher/theme-switcher";
import LangSwitcher from "@/shared/ui/lang-switcher/lang-switcher";
import {useTranslation} from "react-i18next";
import Button from "@/shared/ui/button/button";



interface sidebarProps{
    className?:string
}

const sidebar = (props: sidebarProps) => {
    const {className} = props
    const [collapsed,setCollapsed] = useState(false)
    const {t} = useTranslation()
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }
    return (
        <div data-testid={'sidebar'}
            className={classNames(styles.Sidebar,
                {[styles.collapsed]: collapsed},
                [className])}>
            <Button
                data-testid={"sidebar-toggle"}
                onClick={onToggle}>{t('toggle')}</Button>
            <div className={styles.switcher}>
                <ThemeSwitcher/>
                <LangSwitcher className={styles.langSwitch}/>
            </div>
        </div>
    );
};

export default sidebar;