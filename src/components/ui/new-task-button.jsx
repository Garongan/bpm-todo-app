import { CirclePlus } from "lucide-react";
import { Button } from "./button";

const NewTaskButton = () => {
    return (
        <Button variant="ghost" size="icon" className="bg-zinc-200/75 border-0 shadow-custom">
            <CirclePlus className="h-4 md:h-10 w-4 md:w-10" />
        </Button>
    );
};

export default NewTaskButton;
