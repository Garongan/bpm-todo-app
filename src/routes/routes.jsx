import GroupTaskDetail from "@/components/GroupTask/GroupTaskDetail";
import GroupTaskLayout from "@/components/GroupTask/GroupTaskLayout";
import NewGroupTask from "@/components/GroupTask/NewGroupTask";
import NewTask from "@/components/Task/NewTask";
import TaskDetail from "@/components/Task/TaskDetail";
import TaskLayout from "@/components/Task/TaskLayout";
import App from "@/pages/App";
import { createBrowserRouter } from "react-router-dom";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/task",
        element: <TaskLayout />,
        children: [
            {
                index: true,
                element: <TaskDetail />,
            },
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
