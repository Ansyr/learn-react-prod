import {classNames} from "@/shared/lib/class-names/class-names";
import styles from "./styles.module.scss"
import {useTranslation} from "react-i18next";
import PageLoader from "@/shared/ui/page-loader/page-loader";

interface NotFoundPageProps{
    className?:string
}

const NotFoundPage = (props: NotFoundPageProps) => {
    const {className} = props
    const {t} = useTranslation()
    return (
        <div className={classNames(styles.NotFoundPage,{},[className])}>
            {t('Страница не найдена')}
        </div>
    );
};

export default NotFoundPage;