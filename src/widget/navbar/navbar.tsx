import React from 'react';
import {classNames} from "@/shared/lib/class-names/class-names";
import styles from "./styles.module.scss"
import AppLink from "@/shared/ui/app-link/AppLink";

interface NavbarProps{
    className?:string
}

const Navbar = (props: NavbarProps) => {
    const {className} = props
    return (
        <div className={classNames(styles.Navbar,{},[className])}>
            <div className={styles.links}>
                <AppLink theme={'primary'} to={'/'} className={styles.mainLink}>
                    Главная
                </AppLink>
                <AppLink theme={'secondary'} to={'/about'}>
                    О сайте
                </AppLink>
            </div>
        </div>
    );
};

export default Navbar;

