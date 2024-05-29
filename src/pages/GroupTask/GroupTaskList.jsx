import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import GroupTask from "./GroupTask";
import Loader from "@/components/ui/loader";
import CustomGroupActions from "@/components/ui/custom-group-actions.jsx";

const GroupTaskList = () => {
    const { groupTasks, loading } = useSelector((state) => state.groupTask);
    if (loading) return <Loader/>;

    return (
        <div className="pt-5">
            <h3 className="text-[120%] font-medium">Recent Tasks</h3>
            {groupTasks?.length > 0 ? (
                groupTasks.map((task, index) => (
                    <div key={index} className="flex flex-col gap-4">
                        <Link to={`/group/detail/${task.id}`}>
                            <GroupTask
                                status={task.status}
                                title={task.title}
                                description={task.description}
                                category={task.category}
                                todos={task.todos}
                            />
                        </Link>
                        <CustomGroupActions id={task.id}/>
                    </div>
                ))
            ) : (
                <p>No tasks available</p>
            )}
        </div>
    );
};

export default GroupTaskList;
