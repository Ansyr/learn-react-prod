import React from 'react';
import {useTranslation} from "react-i18next";
import BugButton from "@/app/providers/error-boundary/ui/bug-button";

const MainPage = () => {
    const {t} = useTranslation()
    return (
        <div>
            {t('Главная страница')}
            <BugButton/>
        </div>
    );
};

export default MainPage;