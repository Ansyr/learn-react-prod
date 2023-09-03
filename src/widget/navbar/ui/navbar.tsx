import React from 'react';
import {classNames} from "@/shared/lib/class-names/class-names";
import styles from "./styles.module.scss"

interface NavbarProps{
    className?:string
}

const Navbar = (props: NavbarProps) => {
    const {className} = props
    return (
        <div className={classNames(styles.Navbar,{},[className])}>
            <div className={styles.links}>

            </div>
        </div>
    );
};

export default Navbar;

