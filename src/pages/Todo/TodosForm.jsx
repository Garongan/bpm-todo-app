import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { submitGroupTaskRequest } from "@/actions/actions.js";
import Loader from "@/components/ui/loader.jsx";

const NewTodo = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [todo, setTodo] = useState("");
    const { groupId } = useParams();
    const { loading } = useSelector((state) => state.groupTask);
    const data = useSelector((state) => state.groupTask);

    const handleSubmit = () => {
        let groupTask = data.groupTasks?.find((item) => item.id === parseInt(groupId));
        const generatedId = new Date().getMilliseconds();
        groupTask = {
            ...groupTask,
            todos: [...groupTask.todos, { id: generatedId, title: todo, status: false }],
        };
        console.log(groupTask);
        dispatch(submitGroupTaskRequest(groupTask));
        setTimeout(() => {
            if (!loading) navigate(-1);
        }, 500);
    };

    return (
        <div className="flex flex-col gap-10">
            <Button
                variant="ghost"
                size="icon"
                className="bg-zinc-100/75 border-0 shadow-custom"
                onClick={() => navigate(-1)}
            >
                <ChevronLeft className="h-4 md:h-10 w-4 md:w-10" />
            </Button>
            <h2 className="flex gap-2 text-[150%] font-medium">Create New Todo</h2>
            <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                    <Input
                        type="text"
                        placeholder="Add a todo"
                        className="shadow-custom text-[120%] p-6"
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                    />
                </div>
                <Button className="shadow-custom border-2 text-[120%] p-6" onClick={handleSubmit}>
                    {loading ? <Loader /> : "Submit"}
                </Button>
            </div>
        </div>
    );
};

export default NewTodo;
