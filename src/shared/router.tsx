import { createBrowserRouter } from "react-router-dom";
import Hello from "../pages/Hello";
import World from "../pages/World";
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
        element: <Hello />,
    },
    {
        path: "/world",
        element: <World />,
    },
]);

export default router;
