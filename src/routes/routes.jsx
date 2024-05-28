import App from "@/pages/App";
import Error from "@/pages/Error/Error";
import GroupTaskDetail from "@/pages/GroupTask/GroupTaskDetail";
import GroupTaskLayout from "@/pages/GroupTask/GroupTaskLayout";
import NewGroupTask from "@/pages/GroupTask/NewGroupTask";
import TodoLayout from "@/pages/Todo/TodoLayout.jsx";
import {createBrowserRouter} from "react-router-dom";
import NewTodo from "@/pages/Todo/NewTodos.jsx";

const Routes = createBrowserRouter([
    {
        path: "*",
        element: <Error/>,
    },
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "task",
        element: <TodoLayout/>,
        children: [
            {
                path: "new/:groupId",
                element: <NewTodo/>,
            },
        ],
    },
    {
        path: "group",
        element: <GroupTaskLayout/>,
        children: [
            {
                path: "detail/:id",
                element: <GroupTaskDetail/>,
            },
            {
                path: "new",
                element: <NewGroupTask/>,
            },
        ],
    },
]);

export default Routes;
