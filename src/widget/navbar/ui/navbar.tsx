import React, {useCallback, useState} from 'react';
import {classNames} from "@/shared/lib/class-names/class-names";
import styles from "./styles.module.scss"
import Modal from "@/shared/ui/modal/ui/modal";
import Button from "@/shared/ui/button/button";
import {useTranslation} from "react-i18next";

interface NavbarProps{
    className?:string
}

const Navbar = (props: NavbarProps) => {
    const {className} = props
    const {t} = useTranslation()

    const [isAuthModal,setIsAuthModal] = useState(false)

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    },[])


    return (
        <div className={classNames(styles.Navbar,{},[className])}>
            <Button theme={'clearInverted'} className={styles.links} onClick={onToggleModal}>
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal} >

            </Modal>
        </div>
    );
};

export default Navbar;

