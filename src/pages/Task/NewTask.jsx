import { submitGroupTaskRequest } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const NewTask = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState('');
    const { loading } = useSelector((state) => state.groupTask);

    const handleAddTodo = () => {
        if (todo.trim()) {
            setTodos([...todos, todo]);
            setTodo('');
        }
    };

    const handleSubmit = () => {
        const newGroupTask = { todos };
        dispatch(submitGroupTaskRequest(newGroupTask));
        setTimeout(() => {
            if (!loading) navigate(-1);
        }, 500);
    };

    return (
        <div className="flex flex-col gap-10">
            <Button
                variant="outline"
                size="icon"
                className="bg-zinc-100/75 border-0 shadow-custom"
                onClick={() => navigate(-1)}
            >
                <ChevronLeft className="h-4 md:h-10 w-4 md:w-10" />
            </Button>
            <h2 className="flex gap-2 text-[150%] font-medium">Create New Task</h2>
            <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                    <Input 
                        type="text" 
                        placeholder="Add a todo" 
                        className="shadow-custom" 
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                    />
                    <Button variant="ghost" className="shadow-custom border" onClick={handleAddTodo}>
                        Add Todo
                    </Button>
                </div>
                <ul className="list-disc pl-5">
                    {todos.map((todo, index) => (
                        <li key={index}>{todo}</li>
                    ))}
                </ul>
                <Button variant="ghost" className="shadow-custom border" onClick={handleSubmit}>
                    Submit
                </Button>
            </div>
        </div>
    );
};

export default NewTask;
