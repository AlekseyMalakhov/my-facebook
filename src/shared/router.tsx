import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";

/*
const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Layout>
                <ListOfPayloads />
            </Layout>
        ),
    },
    {
        path: "payload/:id",
        element: (
            <Layout>
                <PayloadView />
            </Layout>
        ),
    },
    {
        path: "payload/:id/edit",
        element: (
            <Layout>
                <EditPayload />
            </Layout>
        ),
    },
    {
        path: "payload/create",
        element: (
            <Layout>
                <CreatePayload />
            </Layout>
        ),
    },
]);
*/

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/home",
        element: <Home />,
    },
]);

export default router;
