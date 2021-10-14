import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getTodo, addTodoSucess, addTodoError, addTodoLoading, getTodoSucess, getTodoLoading, getTodoError } from "../redux/Todos/action";

 
export const Todo = () => {

    const [text, setText] = useState([]);

    useEffect(() => {
        handleGetTodo();
    }, []);

    const { data, isLoading, isError } = useSelector((state) => state.todos.todos);
   

    const handleAddTodo = async () => {
        dispatch(addTodoLoading());
        try {
            const res = await axios.post("http://localhost:3002/todos", {
                status: false,
                tittle: text,
            });
            dispatch(addTodoSucess(res.data));
             handleGetTodo();
        }
        catch (e) {
            dispatch(addTodoError(e.message))
        }
    }

     const handleGetTodo = async () => {
         dispatch(getTodo());
    }
    

    const dispatch = useDispatch();
    return isLoading ? ("Loading...") : isError ? ("Error Occured") : (
        <div>
            <input type="text" onChange={(e) => {
                setText(e.target.value);
            }} placeholder="Enter TOdo" />
            <button onClick={handleAddTodo}>Add Todo</button>

            {
                data.map((e) => {
                    return (
                        <div>{e.tittle}</div>
                    )
                })
            }
        </div>
    );
}

