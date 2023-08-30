import {useEffect, useState} from "react";
import Button from "@/shared/ui/button/button";
import {useTranslation} from "react-i18next";
import {classNames} from "@/shared/lib/class-names/class-names";

interface BugButtonProps{
    className?:string
}

const BugButton = (props: BugButtonProps) => {
    const {className} = props
    const {t} = useTranslation()
    const [error,setError] = useState(false)

    const onThrow = () => setError(true)


    useEffect(() => {
        if(error){
            throw new Error()
        }

    }, [error])


    return (
        <Button
            className={classNames('',{},[className])}
            onClick={onThrow}
        >
            {t('error')}
        </Button>
    );
};

export default BugButton;