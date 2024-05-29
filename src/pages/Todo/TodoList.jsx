import Todo from "./Todo.jsx";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import Loader from "@/components/ui/loader.jsx";
import {useSelector} from "react-redux";

const TodoList = ({ groupId }) => {
    const [todos, setTodos] = useState([]);
    const { groupTasks, loading } = useSelector((state) => state.groupTask);

    useEffect(() => {
        const response = groupTasks.find(item => item.id === groupId)
        const data = response?.todos
        setTodos(data)
    }, [groupId, groupTasks]);

    if (loading) return <Loader/>;

    return (
        <div className="flex flex-col gap-4">
            { todos?.length > 0 ? (
                todos?.map((item, index) => (
                    <div key={ index }>
                        <Todo groupId={ groupId } todo={ item }/>
                    </div>
                ))
            ) : (
                <p>No todos available</p>
            ) }
        </div>
    );
};

TodoList.propTypes = {
    groupId: PropTypes.number,
    todos: PropTypes.array
};

export default TodoList;
