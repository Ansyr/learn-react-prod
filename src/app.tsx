import React, {Suspense, useContext, useState} from 'react';
import "./styles/index.scss"
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./page/about-page/about-page.async";
import {MainPageAsync} from "./page/main-page/main-page.async";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/class-names/class-names";




const App = () => {
    const {theme,toggleTheme} = useTheme()

    return (
        <div className={classNames('app',{},[theme])}>
            <button onClick={toggleTheme}>switch</button>
            <Link to={'/about'}>
                О сайте
            </Link>
            <Link to={'/'}>
                Главная
            </Link>
            <Suspense fallback={<div>loading</div>}>
                <Routes>

                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>

                </Routes>
            </Suspense>
        </div>
    );
};

export default App;