import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import NewTaskButton from "../../components/ui/new-task-button";
import TaskList from "../Task/TaskList";
import CustomSelect from "@/components/ui/custom-select";

const GroupTaskDetail = () => {
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
                <h2 className="flex gap-2 text-[200%] font-semibold">Title</h2>
                <p className="text-[120%] text-zinc-500">Description</p>
            </div>
            <TaskList />
            <div className="pb-5 fixed container bottom-0">
                <div className="flex justify-end pr-8">
                    <Link to="/task/new">
                        <NewTaskButton />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default GroupTaskDetail;
