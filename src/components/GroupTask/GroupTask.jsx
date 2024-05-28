import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleCheck } from "lucide-react";
import { Knob } from "primereact/knob";
import { useState } from "react";

import PropTypes from "prop-types";

const GroupTask = ({ color }) => {
    const [value, setValue] = useState(20);

    return (
        <Card className="mt-5 flex justify-between items-center">
            <div>
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardFooter>
                    <CircleCheck className="h-5 w-5 mr-2" />
                    <p className="text-[100%]">12 tasks</p>
                </CardFooter>
            </div>
            <div className="p-6">
                <Knob value={value} valueColor={color} strokeWidth={10} readOnly />
            </div>
        </Card>
    );
};

GroupTask.propTypes = {
    color: PropTypes.string.isRequired,
};

export default GroupTask;
