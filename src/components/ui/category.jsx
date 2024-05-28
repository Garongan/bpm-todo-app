import { Clock, FileCheck2, FileX2, RefreshCcwDot } from "lucide-react";
import { Button } from "./button";

const Category = () => {
    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-400 p-4 rounded-xl shadow-custom flex gap-4 items-center">
                <Button variant="icon" size="icon" className="bg-zinc-100 border-0 rounded-full shadow-custom">
                    <RefreshCcwDot className="h-4 md:h-10 w-4 md:w-10" />
                </Button>
                <div>
                    <h3 className="font-bold text-[110%]">On going</h3>
                    <p>14 taks</p>
                </div>
            </div>
            <div className="bg-lime-400 p-4 rounded-xl font-bold text-[110%] shadow-custom flex gap-4 items-center">
                <Button variant="icon" size="icon" className="bg-zinc-100 border-0 rounded-full shadow-custom">
                    <Clock className="h-4 md:h-10 w-4 md:w-10" />
                </Button>
                <div>
                    <h3 className="font-bold text-[110%]">In Process</h3>
                    <p>14 taks</p>
                </div>
            </div>
            <div className="bg-teal-500 p-4 rounded-xl font-bold text-[110%] shadow-custom flex gap-4 items-center">
                <Button variant="icon" size="icon" className="bg-zinc-100 border-0 rounded-full shadow-custom">
                    <FileCheck2 className="h-4 md:h-10 w-4 md:w-10" />
                </Button>
                <div>
                    <h3 className="font-bold text-[110%]">Completed</h3>
                    <p>14 taks</p>
                </div>
            </div>
            <div className="bg-red-400 p-4 rounded-xl font-bold text-[110%] shadow-custom flex gap-4 items-center">
                <Button variant="icon" size="icon" className="bg-zinc-100 border-0 rounded-full shadow-custom">
                    <FileX2 className="h-4 md:h-10 w-4 md:w-10" />
                </Button>
                <div>
                    <h3 className="font-bold text-[110%]">Canceled</h3>
                    <p>14 taks</p>
                </div>
            </div>
        </div>
    );
};

export default Category;
