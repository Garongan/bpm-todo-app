import { Link } from "react-router-dom";
import GroupTask from "./GroupTask";

const GroupTaskList = () => {
    return (
        <div className="pt-5">
            <h3 className="text-[120%] font-medium">Recent Tasks</h3>
            <Link to={"/group"}>
                <GroupTask color="#60a5fa" />
            </Link>
        </div>
    );
};

export default GroupTaskList;
