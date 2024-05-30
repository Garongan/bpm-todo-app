import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import Loader from "@/components/ui/loader";
import {Textarea} from "@/components/ui/textarea";
import {ChevronLeft} from "lucide-react";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {submitGroupTaskRequest, updateGroupTaskRequest} from "@/actions/actions.js";
import {categories} from "@/components/shared/categories.js";

const GroupTaskForm = () => {
    const { id } = useParams();
    const [ groupTitle, setGroupTitle ] = useState("");
    const [ groupDescription, setGroupDescription ] = useState("");
    const [ selectedOption, setSelectedOption ] = useState("");
    const dispatch = useDispatch();
    const { groupTasks, loading } = useSelector((state) => state.groupTask);
    const navigate = useNavigate();
    const [ updatedGroupTask, setUpdateGroupTask ] = useState({
        category: "",
        description: "",
        id: 0,
        status: "",
        title: "",
        todos: []
    });

    const handleChange = (index) => {
        const selected = categories.find((category, i) => i === index);
        setSelectedOption(selected);
    };

    const handleSubmit = () => {
        if (id) {
            const updatedTask = {
                ...updatedGroupTask,
                title: groupTitle,
                description: groupDescription,
                category: selectedOption
            };

            const payload = groupTasks.map(item => {
                if (item.id === parseInt(id)) {
                    return updatedTask;
                } else {
                    return item;
                }
            });
            dispatch(updateGroupTaskRequest(payload));
        } else {
            const generatedId = new Date().getMilliseconds();
            const newGroupTask = {
                id: generatedId,
                title: groupTitle,
                description: groupDescription,
                category: selectedOption,
                todos: [],
                status: "on-going"
            };
            dispatch(submitGroupTaskRequest(newGroupTask));
        }

        setTimeout(() => {
            if (!loading) navigate(-1);
        }, 500);
    };

    useEffect(() => {
        if (id) {
            const response = groupTasks.find((item) => item.id === parseInt(id));
            setGroupTitle(response.title);
            setGroupDescription(response.description);
            setUpdateGroupTask(response);
        }
    }, [ id, groupTasks ]);

    return (
        <div className={ `flex flex-col gap-10` }>
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
                    id ? "Update Group" : "Create New Group"
                }
            </h2>
            <div className="flex flex-col gap-4">
                <Input
                    type="text"
                    placeholder="Group Title"
                    className="shadow-custom text-[120%] p-6"
                    value={ groupTitle }
                    onChange={ (e) => setGroupTitle(e.target.value) }
                />
                <Textarea
                    placeholder="Group Description"
                    className="shadow-custom text-[120%] p-6"
                    value={ groupDescription }
                    onChange={ (e) => setGroupDescription(e.target.value) }
                />
                <ul className="grid grid-cols-3 gap-2">
                    { categories.map((category, index) => category !== "All" && (
                        <li
                            key={ index }
                            className={ `p-2 rounded-lg ${ selectedOption === category ? "bg-zinc-100" : "bg-zinc-300" } shadow-custom` }
                            onClick={ () => handleChange(index) }
                        >
                            { category }
                        </li>
                    )) }
                </ul>
                <Button
                    className="shadow-custom border-2 text-[120%] p-6"
                    onClick={ handleSubmit }
                    disabled={ loading }
                >
                    { loading ? <Loader/> : "Submit" }
                </Button>
            </div>
        </div>
    );
};

export default GroupTaskForm;
