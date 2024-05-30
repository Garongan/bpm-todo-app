import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import GroupTask from "./GroupTask";
import Loader from "@/components/ui/loader";
import CustomGroupActions from "@/components/ui/custom-group-actions.jsx";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";

const GroupTaskList = ({ filter, search }) => {
    const { groupTasks, loading } = useSelector((state) => state.groupTask);
    const [ data, setData ] = useState([]);

    useEffect(() => {
        if (search) {
            setData(groupTasks.filter(item => {
                const isFind = item.title.toLowerCase() === search.toLowerCase();
                if (filter && filter !== "All") {
                    return isFind && item.category === filter;
                } else {
                    return isFind;
                }
            }));
        } else {
            if (filter && filter !== "All") {
                setData(groupTasks.filter(item => item.category === filter));
            } else {
                setData(groupTasks);
            }
        }
    }, [ filter, groupTasks, search ]);

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
    search: PropTypes.string
};

export default GroupTaskList;
