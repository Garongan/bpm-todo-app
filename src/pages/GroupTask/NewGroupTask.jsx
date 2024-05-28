import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Loader from "@/components/ui/loader";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { submitGroupTaskRequest } from "../../actions/actions";

const categories = [
    "Design",
    "Development",
    "Coding",
    "Meeting",
    "UI/UX",
    "Testing",
    "QA",
    "Deployment",
    "Marketing",
    "Sales",
    "Finance",
    "HR",
    "Management",
    "Others",
];

const NewGroupTask = () => {
    const [groupTitle, setGroupTitle] = useState("");
    const [groupDescription, setGroupDescription] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.groupTask);
    const navigate = useNavigate();

    const handleChange = (index) => {
        const selected = categories.find((category, i) => i === index);
        setSelectedOption(selected);
    };

    const handleSubmit = () => {
        const generatedId = new Date().getMilliseconds();
        dispatch(
            submitGroupTaskRequest({
                id: generatedId,
                title: groupTitle,
                description: groupDescription,
                category: selectedOption,
                todos: [],
                status: "on-going",
            })
        );
        setTimeout(() => {
            if (!loading) navigate(-1);
        }, 500);
    };

    return (
        <div className={`flex flex-col gap-10`}>
            <Button variant="outline" size="icon" className="bg-zinc-100/75 border-0 shadow-custom" onClick={() => navigate(-1)}>
                <ChevronLeft className="h-4 md:h-10 w-4 md:w-10" />
            </Button>
            <h2 className="flex gap-2 text-[150%] font-medium">Create New Group</h2>
            <div className="flex flex-col gap-4">
                <Input
                    type="text"
                    placeholder="Group Title"
                    className="shadow-custom"
                    value={groupTitle}
                    onChange={(e) => setGroupTitle(e.target.value)}
                />
                <Textarea
                    placeholder="Group Description"
                    className="shadow-custom"
                    value={groupDescription}
                    onChange={(e) => setGroupDescription(e.target.value)}
                />
                <ul className="grid grid-cols-3 gap-2">
                    {categories.map((category, index) => (
                        <li
                            key={index}
                            className={`p-2 rounded-lg ${selectedOption === category ? "bg-zinc-100" : "bg-zinc-400"}`}
                            onClick={() => handleChange(index)}
                        >
                            {category}
                        </li>
                    ))}
                </ul>
                <Button variant="ghost" className="shadow-custom border" onClick={handleSubmit} disabled={loading}>
                    {loading ? <Loader /> : "Submit"}
                </Button>
            </div>
        </div>
    );
};

export default NewGroupTask;
