import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
//import Home from "../pages/Home/Home";
import { lazy } from "react";
const Home = lazy(() => import("../pages/Home/Home"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/home",
        element: <Home />,
        children: [
            {
                path: ":tab",
                element: <Home />,
                children: [
                    {
                        path: "feed",
                        element: <Home />,
                    },
                ],
            },
        ],
    },
]);

export default router;
