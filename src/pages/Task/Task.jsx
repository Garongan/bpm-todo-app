import { Checkbox } from "@/components/ui/checkbox";

const Task = () => {
    return (
        <div className="shadow-custom p-6 rounded-lg border">
            <div className="flex gap-4 items-center">
                <Checkbox />
                <p className="text-[120%]">Kamu Lagi Berak Ya!</p>
            </div>
        </div>
    );
};

export default Task;
