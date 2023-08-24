import {render} from "react-dom";
import App from "./app";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./theme/ThemeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
);