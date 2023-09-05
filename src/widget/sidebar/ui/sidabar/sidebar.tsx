import {classNames} from "@/shared/lib/class-names/class-names";
import styles from "./styles.module.scss"
import React, {useState} from "react";
import ThemeSwitcher from "@/shared/ui/theme-switcher/theme-switcher";
import LangSwitcher from "@/shared/ui/lang-switcher/lang-switcher";
import {useTranslation} from "react-i18next";
import Button from "@/shared/ui/button/button";
import AppLink from "@/shared/ui/app-link/app-link";
import {RoutePath} from "@/shared/config/route-config/route-config";
import AboutIcon from "../../../../shared/assets/icons/about-20-20.svg"
import MainIcon from "../../../../shared/assets/icons/main-20-20.svg"


interface sidebarProps {
    className?: string,
}

const Sidebar = (props: sidebarProps) => {
    const {className} = props
    const [collapsed, setCollapsed] =  useState(false)
    const {t} = useTranslation()
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }
    return (
        <div data-testid={'sidebar'}
            className={classNames(styles.Sidebar,
                {[styles.collapsed]: collapsed},
                [className])}
        >
            <Button
                className={styles.collapseBtn}
                data-testid={"sidebar-toggle"}
                square={true}
                onClick={onToggle}
                theme={'invertedBackground'}
            >
                {collapsed ? ">" : "<"}
            </Button>
            <div className={styles.items}>

                <AppLink
                    theme={'secondary'}
                    to={RoutePath.main}
                    className={styles.item}>
                    <MainIcon className={styles.icon}/>
                    <span className={styles.link}>
                        {t("Главная")}
                    </span>
                </AppLink>

                <AppLink
                    theme={'secondary'}
                    to={RoutePath.about}
                    className={styles.item}>
                    <AboutIcon className={styles.icon}/>
                    <span className={styles.link}>
                        {t('О сайте')}
                    </span>

                </AppLink>


            </div>
            <div className={styles.switcher}>
                <ThemeSwitcher/>
                <LangSwitcher short={collapsed} className={styles.langSwitch}/>
            </div>
        </div>
    );
};

export default Sidebar;