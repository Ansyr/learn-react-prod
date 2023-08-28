import {classNames} from "@/shared/lib/class-names/class-names";
import styles from "./styles.module.scss"
import {useTranslation} from "react-i18next";
import Button from "@/shared/ui/button/button";

interface PageErrorProps{
    className?:string
}

const PageError = (props: PageErrorProps) => {
    const {className} = props
    const {t} = useTranslation()

    const reloadPage = ()  => {
        location.reload()
    }

    return (
        <div className={classNames(styles.PageError,{},[className])}>
            <p>
                {t('Произошла непредвиденная ошибка')}
                <Button onClick={reloadPage}>
                    {t('Обновить страницу')}
                </Button>
            </p>
        </div>
    );
};

export default PageError;