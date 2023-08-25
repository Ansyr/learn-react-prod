import {classNames} from "@/shared/lib/class-names/class-names";
import styles from "./styles.module.scss"
import {useState} from "react";
import ThemeSwitcher from "@/shared/ui/theme-switcher/ui/theme-switcher";
import LangSwitcher from "@/shared/ui/lang-switcher/lang-switcher";



interface sidebarProps{
    className?:string
}

const sidebar = (props: sidebarProps) => {
    const {className} = props
    const [collapsed,setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }
    return (
        <div className={classNames(styles.Sidebar,{[styles.collapsed]: collapsed},[className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={styles.switcher}>
                <ThemeSwitcher/>
                <LangSwitcher className={styles.langSwitch}/>
            </div>
        </div>
    );
};

export default sidebar;