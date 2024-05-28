import Task from "./Task";
import PropTypes from "prop-types";

const TaskList = ({ todos }) => {
    return (
        <>
            {todos?.length > 0 ? (
                todos?.map((item, index) => (
                    <div key={index}>
                        <Task title={item.title} />
                    </div>
                ))
            ) : (
                <p>No todos available</p>
            )}
        </>
    );
};

TaskList.propTypes = {
    todos: PropTypes.array,
};

export default TaskList;
