import App from "@/pages/App";
import Error from "@/pages/Error/Error";
import GroupTaskDetail from "@/pages/GroupTask/GroupTaskDetail";
import GroupTaskLayout from "@/pages/GroupTask/GroupTaskLayout";
import GroupTaskForm from "@/pages/GroupTask/GroupTaskForm.jsx";
import TodoLayout from "@/pages/Todo/TodoLayout.jsx";
import {createBrowserRouter} from "react-router-dom";
import TodosForm from "@/pages/Todo/TodosForm.jsx";

const Routes = createBrowserRouter([
    {
        path: "*",
        element: <Error/>,
        errorElement: <Error/>
    },
    {
        path: "/",
        element: <App/>,
        errorElement: <Error/>
    },
    {
        path: "todo",
        element: <TodoLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "new/:groupId",
                element: <TodosForm/>
            },
            {
                path: "update/:groupId/:id",
                element: <TodosForm/>
            }
        ]
    },
    {
        path: "group",
        element: <GroupTaskLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "detail/:id",
                element: <GroupTaskDetail/>
            },
            {
                path: "new",
                element: <GroupTaskForm/>
            },
            {
                path: "update/:id",
                element: <GroupTaskForm/>
            }
        ]
    }
]);

export default Routes;
