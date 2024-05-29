import {Checkbox} from "@/components/ui/checkbox";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateGroupTaskRequest} from "@/actions/actions.js";
import Loader from "@/components/ui/loader.jsx";

const Todo = ({ groupId, todo }) => {
    const [ updatedGroupTask, setUpdateGroupTask ] = useState({
        category: "",
        description: "",
        id: 0,
        status: "",
        title: "",
        todos: []
    });
    const { groupTasks, loading } = useSelector((state) => state.groupTask);
    const dispatch = useDispatch();

    const handleClick = () => {
        const updatedTodos = updatedGroupTask.todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item,
                    status: !todo.status
                };
            } else {
                return item;
            }
        });

        const updatedTask = {
            ...updatedGroupTask,
            todos: updatedTodos
        };

        const payload = groupTasks.map(item => {
            if (item.id === groupId) {
                return updatedTask;
            } else {
                return item;
            }
        });
        dispatch(updateGroupTaskRequest(payload));
    };

    useEffect(() => {
        const response = groupTasks.find((item) => item.id === parseInt(groupId));
        setUpdateGroupTask(response);
    }, [ groupTasks, groupId, todo ]);

    return (
        <div className="shadow-custom p-6 rounded-lg border">
            {
                loading ? <Loader/> : <div className="flex gap-4 items-center">
                    <Checkbox checked={ todo.status } onClick={ handleClick }/>
                    <p className="text-[150%]">{ todo.title }</p>
                </div>
            }
        </div>
    );
};

Todo.propTypes = {
    groupId: PropTypes.number,
    todo: PropTypes.object
};

export default Todo;
