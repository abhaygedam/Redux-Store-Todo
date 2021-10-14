import axios from "axios";
import { ADD_COUNT, REMOVE_COUNT, ADD_TODO, ADD_TODO_LOADING, ADD_TODO_SUCESS, ADD_TODO_ERROR, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCESS } from "./actionTypes.js";

export const addCount = (data) => {
    return { type: ADD_COUNT, payload: data };
}

export const removeCount = (data) => {
    return { type: REMOVE_COUNT, payload: data };
}

export const addTodo = (data) => {
    return {type: ADD_TODO, payload:data}
}

export const addTodoLoading = () => {
    return {
        type: ADD_TODO_LOADING
    }
}

export const addTodoSucess = (data) => {
    return {
        type: ADD_TODO_SUCESS,
        payload:data,
    }
}
export const addTodoError = (error) => {
    return {
        type: ADD_TODO_ERROR,
        payload:error,
    }
}

export const getTodoLoading = () => {
     return {
        type: GET_TODO_LOADING
    }
}


export const getTodoSucess = (data) => {
    return {
        type: GET_TODO_SUCESS,
        payload:data,
    }
}
export const getTodoError = (error) => {
    return {
        type: GET_TODO_ERROR,
        payload:error,
    }
}

export const getTodo = () => async (dispatch) => {
     dispatch(getTodoLoading());
        try {
            const res = await axios.get("http://localhost:3002/todos");
            console.log("res", res.data)
            dispatch(getTodoSucess(res.data));
        }
        catch (e) {
            dispatch(getTodoError(e.message))
        }
}