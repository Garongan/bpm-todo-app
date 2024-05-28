import Todo from "./Todo.jsx";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import Loader from "@/components/ui/loader.jsx";

const TodoList = ({ todos }) => {
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [ todos.length ]);

    if (loading) return <Loader/>;

    return (
        <div className="flex flex-col gap-4">
            {todos?.length > 0 ? (
                todos?.map((item, index) => (
                    <div key={index}>
                        <Todo title={item.title}/>
                    </div>
                ))
            ) : (
                <p>No todos available</p>
            )}
        </div>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array
};

export default TodoList;
