import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {ChevronLeft} from "lucide-react";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {submitGroupTaskRequest, updateGroupTaskRequest} from "@/actions/actions.js";
import Loader from "@/components/ui/loader.jsx";

const NewTodo = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ todo, setTodo ] = useState({ id: "", title: "", status: false });
    const { groupId, id } = useParams();
    const { loading } = useSelector((state) => state.groupTask);
    const { groupTasks } = useSelector((state) => state.groupTask);

    const handleSubmit = () => {
        let groupTask = groupTasks.find((item) => item.id === parseInt(groupId));
        if (id) {
            const updatedTodos = groupTask.todos.map(item => {
                if (item.id === parseInt(id)) {
                    return { ...item, title: todo.title };
                } else {
                    return item;
                }
            });
            const payload = groupTasks.map(item => {
                if (item.id === parseInt(groupId)) {
                    return {...item, todos: updatedTodos};
                } else {
                    return item;
                }
            });
            dispatch(updateGroupTaskRequest(payload));
        } else {
            const generatedId = new Date().getMilliseconds();
            groupTask = {
                ...groupTask,
                todos: [ ...groupTask.todos, { ...todo, id: generatedId } ]
            };
            dispatch(submitGroupTaskRequest(groupTask));
        }
        setTimeout(() => {
            if (!loading) navigate(-1);
        }, 500);
    };

    useEffect(() => {
        if (id) {
            const response = groupTasks.find((item) => item.id === parseInt(groupId));
            const todo = response.todos.find(item => item.id === parseInt(id));
            setTodo(todo);
        }
    }, [ groupId, groupTasks, id ]);

    return (
        <div className="flex flex-col gap-10">
            <Button
                variant="ghost"
                size="icon"
                className="bg-zinc-100/75 border-0 shadow-custom"
                onClick={ () => navigate(-1) }
            >
                <ChevronLeft className="h-4 md:h-10 w-4 md:w-10"/>
            </Button>
            <h2 className="flex gap-2 text-[150%] font-medium">
                {
                    id ? "Update Todo" : "Create New Todo"
                }
            </h2>
            <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                    <Input
                        type="text"
                        placeholder="Add a todo"
                        className="shadow-custom text-[120%] p-6"
                        value={ todo.title }
                        onChange={ (e) => setTodo({ ...todo, title: e.target.value }) }
                    />
                </div>
                <Button className="shadow-custom border-2 text-[120%] p-6" onClick={ handleSubmit }>
                    { loading ? <Loader/> : "Submit" }
                </Button>
            </div>
        </div>
    );
};

export default NewTodo;
