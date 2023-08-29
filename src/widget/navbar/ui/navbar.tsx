import React from 'react';
import {classNames} from "@/shared/lib/class-names/class-names";
import styles from "./styles.module.scss"
import AppLink from "@/shared/ui/app-link/app-link";
import {useTranslation} from "react-i18next";

interface NavbarProps{
    className?:string
}

const Navbar = (props: NavbarProps) => {
    const {className} = props
    const {t} = useTranslation()
    return (
        <div className={classNames(styles.Navbar,{},[className])}>
            <div className={styles.links}>
                <AppLink theme={'primary'} to={'/'} className={styles.mainLink}>
                    {t("Главная")}
                </AppLink>
                <AppLink theme={'secondary'} to={'/about'}>
                    {t('О сайте')}
                </AppLink>
            </div>
        </div>
    );
};

export default Navbar;

