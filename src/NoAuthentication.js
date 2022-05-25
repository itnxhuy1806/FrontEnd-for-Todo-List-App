import { useRoutes } from "react-router-dom";
import { homePage } from "./routes/homePage";
import { loginPage } from "./routes/loginPage";
import { notFoundPage } from "./routes/notFoundPage";
import { registerPage } from "./routes/registerPage";
import { settingPage } from "./routes/settingPage";

export default function NoAuthentication() {
    return useRoutes([
        homePage,
        loginPage,
        registerPage,
        settingPage,
        notFoundPage
    ]);
}