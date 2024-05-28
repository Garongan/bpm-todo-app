import { Checkbox } from "@/components/ui/checkbox";
import PropTypes from "prop-types";

const Todo = ({ title }) => {
    return (
        <div className="shadow-custom p-6 rounded-lg border">
            <div className="flex gap-4 items-center">
                <Checkbox />
                <p className="text-[120%]">{title}</p>
            </div>
        </div>
    );
};

Todo.propTypes = {
    title: PropTypes.string,
};

export default Todo;
