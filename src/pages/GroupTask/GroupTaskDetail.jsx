import { ChevronLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "../../components/ui/button";
import NewTaskButton from "../../components/ui/new-task-button";
import TodoList from "../Todo/TodoList.jsx";
import CustomSelect from "@/components/ui/custom-select";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const GroupTaskDetail = () => {
    const { id } = useParams();
    const { groupTasks } = useSelector((state) => state.groupTask);
    const [data, setData] = useState({
        category: "",
        description: "",
        id: 0,
        status: "",
        title: "",
        todos: [],
    });

    useEffect(() => {
        const response = groupTasks.find((item) => item.id === parseInt(id));
        setData(response);
    }, [id, groupTasks]);

    return (
        <div className="flex flex-col gap-10">
            <div className="flex items-center justify-between">
                <Link to="/">
                    <Button variant="outline" size="icon" className="bg-zinc-100/75 border-0 shadow-custom">
                        <ChevronLeft className="h-4 md:h-10 w-4 md:w-10" />
                    </Button>
                </Link>
                <div className="w-auto">
                    <CustomSelect />
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="flex gap-2 text-[200%] font-semibold">{data.title}</h2>
                <p className="text-[120%] text-zinc-500">{data.description}</p>
                <p className="text-[120%] p-2 bg-zinc-300 rounded-lg w-fit">{data.category}</p>
            </div>
            <TodoList groupId={data.id} todos={data.todos} />
            <div className="pb-5 fixed container bottom-0">
                <div className="flex justify-end pr-8">
                    <Link to={`/task/new/${id}`}>
                        <NewTaskButton />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default GroupTaskDetail;
