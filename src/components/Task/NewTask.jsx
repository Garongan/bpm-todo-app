import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NewTask = () => {
    return (
        <div className="flex flex-col gap-4">
            <Link to="/">
                <Button variant="outline" size="icon" className="bg-zinc-100/75 border-0 shadow-custom">
                    <ChevronLeft className="h-4 md:h-10 w-4 md:w-10" />
                </Button>
            </Link>
            <h2 className="flex gap-2 text-[150%] font-medium">Create New Task</h2>
        </div>
    );
};

export default NewTask;
