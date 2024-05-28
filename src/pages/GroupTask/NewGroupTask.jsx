import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

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
    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (index) => {
        const selected = categories.find((category, i) => {
            if (i === index) {
                return category;
            }
        });
        setSelectedOption(selected);
    };

    return (
        <div className={`flex flex-col gap-10`}>
            <Link to="/">
                <Button variant="outline" size="icon" className="bg-zinc-100/75 border-0 shadow-custom">
                    <ChevronLeft className="h-4 md:h-10 w-4 md:w-10" />
                </Button>
            </Link>
            <h2 className="flex gap-2 text-[150%] font-medium">Create New Group</h2>
            <div className="flex flex-col gap-4">
                <Input type="text" placeholder="Group Title" className="shadow-custom" />
                <Textarea placeholder="Group Description" className="shadow-custom" />
                <ul className="grid grid-cols-3 gap-2">
                    {categories.map((category, index) => (
                        <li
                            key={index}
                            className={`p-2 rounded-lg ${selectedOption == category ? "bg-zinc-100" : "bg-zinc-400"}`}
                            onClick={() => handleChange(index)}
                        >
                            {category}
                        </li>
                    ))}
                </ul>
                <Button variant="ghost" className="shadow-custom border">
                    Submit
                </Button>
            </div>
        </div>
    );
};

export default NewGroupTask;
