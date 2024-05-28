import { Link } from "react-router-dom";
import NewTaskButton from "../ui/new-task-button";

const GroupTaskDetail = () => {
    return (
        <div>
            GroupTaskDetail
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
