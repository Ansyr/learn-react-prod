import React, {Suspense} from 'react';
import "./styles/index.scss"
import {useTheme} from "@/shared/lib/use-theme/useTheme";
import {classNames} from "@/shared/lib/class-names/class-names";
import AppRouter from "@/app/providers/router/ui/app-router";
import Navbar from "@/widget/navbar/navbar";
import Sidebar from "@/widget/sidebar/ui/sidabar/sidebar";



const Component = () => {

}

const App = () => {
    const {theme} = useTheme()

    return (
        <div className={classNames('app',{},[theme])}>
            <Suspense fallback="">
                <Navbar/>
                <div className={'content-page'}>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;