import {classNames} from "@/shared/lib/class-names/class-names";
import {useTranslation} from "react-i18next";
import Button from "@/shared/ui/button/button";


interface LangSwitcherProps {
    className?: string
    short?: boolean
}

const LangSwitcher = (props: LangSwitcherProps) => {
    const {className, short} = props
    const {t, i18n} = useTranslation()
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
    return (
        <Button onClick={toggle} theme={"clear"} className={classNames('', {}, [className])}>
            {t(short ? "короткий язык" : "язык")}
        </Button>
    )
};

export default LangSwitcher;