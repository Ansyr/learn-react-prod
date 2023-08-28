import styles from "./styles.module.scss"
import {ButtonHTMLAttributes, ReactNode} from "react";
import {classNames} from "@/shared/lib/class-names/class-names";


type ThemeButton = 'clear'
interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    theme?:ThemeButton
    className?:string
    children?:ReactNode
}

const button = (props: buttonProps) => {
    const {className,theme,children,...rest} = props
    return (
        <button className={classNames(styles.Button,{},[className,styles[theme]])} {...rest}>
            {children}
        </button>
    );
};

export default button;