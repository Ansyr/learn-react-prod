import App from "./app/app";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./app/providers/theme-provider/ui/ThemeProvider";
import "@/shared/config/i18n/i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
);