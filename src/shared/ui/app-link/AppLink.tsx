import {classNames} from "@/shared/lib/class-names/class-names";
import styles from "./styles.module.scss"
import {Link} from "react-router-dom";
import {ReactNode} from "react";

type AppLinkTheme  = 'primary' | 'secondary'

interface AppLinkProps {
    theme?: AppLinkTheme

    className?: string
    children?: ReactNode
    to: string
}

const AppLink = (props: AppLinkProps) => {
    const {theme = 'primary', to, className, children, ...rest} = props

    return (
        <Link to={to} className={classNames(styles.AppLink, {}, [className,styles[theme]])} {...rest}>
            {children}
        </Link>
    );
};

export default AppLink;