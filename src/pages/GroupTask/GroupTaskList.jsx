import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import GroupTask from "./GroupTask";
import Loader from "@/components/ui/loader";
import CustomGroupActions from "@/components/ui/custom-group-actions.jsx";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";

const GroupTaskList = ({ status, filter, search }) => {
    const { groupTasks, loading } = useSelector((state) => state.groupTask);
    const [ data, setData ] = useState([]);

    useEffect(() => {
        if (search) {
            setData(groupTasks.filter(item => {
                const isFindTitle = item.title.toLowerCase() === search.toLowerCase();
                const isFindCategory = item.category === filter;
                const isFindStatus = item.status === status;
                if (filter && filter !== "All") {
                    return isFindTitle && isFindCategory;
                } else if (status) {
                    return isFindTitle && isFindCategory && isFindStatus;
                } else {
                    return isFindTitle;
                }
            }));
        } else {
            if (filter && filter !== "All") {
                setData(groupTasks.filter(item => {
                    const isFindCategory = item.category === filter;
                    const isFindStatus = item.status === status;
                    if (status) {
                        return isFindCategory && isFindStatus;
                    } else {
                        return isFindCategory;
                    }
                }));
            } else if (status) {
                setData(groupTasks.filter(item => item.status === status));
            } else {
                setData(groupTasks);
            }
        }
    }, [filter, groupTasks, search, status]);

    if (loading) return <Loader/>;

    return (
        <div className="pt-5">
            <h3 className="text-[120%] font-medium">Recent Tasks</h3>
            { data.length > 0 ? (
                data.map((task, index) => (
                    <div key={ index } className="flex flex-col gap-4">
                        <Link to={ `/group/detail/${ task.id }` }>
                            <GroupTask
                                status={ task.status }
                                title={ task.title }
                                description={ task.description }
                                category={ task.category }
                                todos={ task.todos }
                            />
                        </Link>
                        <CustomGroupActions id={ task.id }/>
                    </div>
                ))
            ) : (
                <p>No tasks available</p>
            ) }
        </div>
    );
};

GroupTaskList.propTypes = {
    filter: PropTypes.string,
    search: PropTypes.string,
    status: PropTypes.string
};

export default GroupTaskList;
