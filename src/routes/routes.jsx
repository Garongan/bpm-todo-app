import App from "@/pages/App";
import Error from "@/pages/Error/Error";
import GroupTaskDetail from "@/pages/GroupTask/GroupTaskDetail";
import GroupTaskLayout from "@/pages/GroupTask/GroupTaskLayout";
import NewGroupTask from "@/pages/GroupTask/NewGroupTask";
import NewTask from "@/pages/Task/NewTask";
import TaskLayout from "@/pages/Task/TaskLayout";
import { createBrowserRouter } from "react-router-dom";

const Routes = createBrowserRouter([
    {
        path: "*",
        element: <Error />,
    },
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/task",
        element: <TaskLayout />,
        children: [
            {
                path: "new",
                element: <NewTask />,
            },
        ],
    },
    {
        path: "/group",
        element: <GroupTaskLayout />,
        children: [
            {
                index: true,
                element: <GroupTaskDetail />,
            },
            {
                path: "new",
                element: <NewGroupTask />,
            },
        ],
    },
]);

export default Routes;
