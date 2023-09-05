import React, {MouseEvent, ReactNode, useState, useRef, useEffect, useCallback} from "react"
import styles from "./styles.module.scss"
import {classNames} from "@/shared/lib/class-names/class-names";
import Portal from "@/shared/ui/Portal/portal";

interface ModalProps {
    className?: string
    children?: ReactNode

    isOpen?: boolean
    onClose?: () => void
}

const ANIMATION_DELAY = 300

const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props

    const [isClosing, setIsClosing] = useState(false)
    const timeRef = useRef<ReturnType<typeof setTimeout>>()
    const mods: Record<string, boolean> = {
        [styles.opened]: isOpen,
        [styles.isClosing]: isClosing
    }

    const closeHandler =useCallback(() => {
        if (onClose) {
            setIsClosing(true)
            timeRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }

    },[onClose])

    const onContentClick = (e: MouseEvent) => {
        e.stopPropagation()
    }
    /*eslint-disable @typescript-eslint/no-explicit-any*/
    const onKeyDown = useCallback((e: any): void => {
        if (e.key === "Escape") {
            closeHandler();
        }
    }, [closeHandler])


    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        }

        return () => {
            clearTimeout(timeRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen,onKeyDown])

    return (

        <Portal >
            <div className={classNames(styles.modal, mods, [className])}>
                <div className={styles.overlay} onClick={closeHandler}>
                    <div className={styles.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>

    );
};

export default Modal;