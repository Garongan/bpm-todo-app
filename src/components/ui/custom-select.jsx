import {EllipsisIcon} from "lucide-react";
import {useEffect, useState} from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.jsx";
import {Button} from "@/components/ui/button.jsx";
import {useDispatch, useSelector} from "react-redux";
import Loader from "@/components/ui/loader.jsx";
import {useParams} from "react-router-dom";
import {updateGroupTaskRequest} from "@/actions/actions.js";

const options = [
    { value: "on-going", label: "On Going", className: "bg-blue-400" },
    { value: "in-process", label: "In Process", className: "bg-lime-400" },
    { value: "completed", label: "Completed", className: "bg-teal-500" },
    { value: "canceled", label: "Canceled", className: "bg-red-400" }
];

const CustomSelect = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [ selectedOption, setSelectedOption ] = useState({});
    const { groupTasks } = useSelector((state) => state.groupTask);
    const [ loading, setLoading ] = useState(false);
    const [ updatedGroupTask, setUpdateGroupTask ] = useState({
        category: "",
        description: "",
        id: 0,
        status: "",
        title: "",
        todos: []
    });

    const handleChange = (value) => {
        const selected = options.find((option) => option.value === value);
        setSelectedOption(selected);
        setLoading(true);
        const updatedTask = {
            ...updatedGroupTask,
            status: value
        };

        const payload = groupTasks.map(item => {
            if (item.id === parseInt(id)) {
                return updatedTask;
            } else {
                return item;
            }
        });
        dispatch(updateGroupTaskRequest(payload));
        setTimeout(() => {
            setLoading(false);
        }, 500);
    };

    useEffect(() => {
        if (id) {
            const response = groupTasks.find((item) => item.id === parseInt(id));
            setUpdateGroupTask(response);
            setSelectedOption(options.find((item) => item.value === response.status));
        }
    }, [ groupTasks, id ]);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost"
                        className={ `flex gap-2 ${ selectedOption?.className } text-[120%] shadow-custom h-10 md:h-16 w-auto md:w-auto rounded-xl` }>
                    { loading ? <Loader/> : selectedOption?.label }
                    <EllipsisIcon/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={ "end" } className="p-4 mt-4">
                <DropdownMenuLabel className="text-[120%]">Change Status</DropdownMenuLabel>
                { options.map((option, index) => (
                    <div key={index}>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem onClick={ () => handleChange(option.value) }
                                          className={ `text-[120%]` }>
                            { option.label }
                        </DropdownMenuItem>
                    </div>
                )) }
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default CustomSelect;
