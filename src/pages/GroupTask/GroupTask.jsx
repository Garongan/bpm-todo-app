import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {CircleCheck} from "lucide-react";
import {Knob} from "primereact/knob";
import {useEffect, useState} from "react";

import PropTypes from "prop-types";

const options = [
    { value: "on-going", color: "#60a5fa" },
    { value: "in-process", color: "#a3e635" },
    { value: "completed", color: "#14b8a6" },
    { value: "canceled", color: "#f87171" }
];

const GroupTask = ({ status, title, description, category, todos }) => {
    const [ value, setValue ] = useState(0);
    const [color, setColor] = useState("")

    useEffect(() => {
        if (todos?.length > 0) {
            setValue((todos.filter((todo) => todo.status === true).length / todos.length) * 100);
        } else {
            setValue(0);
        }
        setColor(options.find((item) => item.value === status).color);
    }, [todos, color, status]);

    return (
        <Card className="mt-5 flex justify-between items-center">
            <div>
                <CardHeader>
                    <CardTitle>{ title }</CardTitle>
                    <CardDescription>{ description }</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-[100%] bg-zinc-300 p-1 rounded-lg justify-center flex">{ category }</p>
                </CardContent>
                <CardFooter>
                    <CircleCheck className="h-5 w-5 mr-2"/>
                    <p className="text-[100%]">{ todos?.length } tasks</p>
                </CardFooter>
            </div>
            <div className="p-6">
                <Knob value={ value } valueColor="#18181b" rangeColor={color} strokeWidth={ 10 } readOnly/>
            </div>
        </Card>
    );
};

GroupTask.propTypes = {
    status: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    todos: PropTypes.array.isRequired
};

export default GroupTask;
