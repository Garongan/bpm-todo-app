import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import GroupTask from "./GroupTask";
import Loader from "@/components/ui/loader";

const GroupTaskList = () => {
    const data = useSelector((state) => state.groupTask);
    if (data.loading) return <Loader />;

    return (
        <div className="pt-5">
            <h3 className="text-[120%] font-medium">Recent Tasks</h3>
            {data.groupTasks?.length > 0 ? (
                data.groupTasks.map((task, index) => (
                    <Link key={index} to={`/group/detail/${task.id}`}>
                        <GroupTask
                            color="#60a5fa"
                            title={task.title}
                            description={task.description}
                            category={task.category}
                            todos={task.todos}
                        />
                    </Link>
                ))
            ) : (
                <p>No tasks available</p>
            )}
        </div>
    );
};

export default GroupTaskList;
