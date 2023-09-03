import styles from "./styles.module.scss"
import {ButtonHTMLAttributes, ReactNode} from "react";
import {classNames} from "@/shared/lib/class-names/class-names";


type ThemeButton = 'clear' | 'outline' | 'background' | 'invertedBackground'

type SizeButton = 'M' | 'L' | 'XL'

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    theme?:ThemeButton
    className?:string
    children?:ReactNode
    square?: boolean
    size?: SizeButton
}

const button = (props: buttonProps) => {
    const {className,theme,children,square,size = 'M',...rest} = props

    const mods: Record<string, boolean> = {
        [styles.square]: square
    }

    const additions = [
        className,
        styles[theme],
        styles[size]
    ]

    return (
        <button className={classNames(styles.Button,mods,additions)} {...rest}>
            {children}
        </button>
    );
};

export default button;