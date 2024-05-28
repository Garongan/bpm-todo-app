import { CirclePlus } from "lucide-react";
import { Button } from "./button";

const NewTask = () => {
    return (
        <Button variant="outline" size="icon" className="bg-zinc-100/75 border-0 shadow-custom">
            <CirclePlus className="h-4 md:h-10 w-4 md:w-10" />
        </Button>
    );
};

export default NewTask;
