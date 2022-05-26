import { useRoutes } from "react-router-dom";
import { homePage } from "./routes/homePage";
import { todosPage } from "./routes/todosPage";
import { tasksPage } from "./routes/tasksPage";
import { settingPage } from "./routes/settingPage";
import { notFoundPage } from "./routes/notFoundPage";

export default function Authentication() {
  let element = useRoutes([
    homePage,
    todosPage,
    tasksPage,
    settingPage,
    notFoundPage
  ]);
  return element
}