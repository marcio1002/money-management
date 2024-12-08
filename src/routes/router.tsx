/* --- main --- */
import { createBrowserRouter } from "react-router-dom";

/* --- pages --- */
import App from "../App";
import OverViewPage from "@pages/Overview";
import CategoriesPage from "@pages/Categories";
import ExpensesPage from "@pages/Espenses";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <OverViewPage />
            },
            {
                path: "/categories",
                element: <CategoriesPage />
            },
            {
                path: "/expenses",
                element: <ExpensesPage />
            }
        ]
    }
])