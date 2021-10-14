import { createStore, combineReducers, applyMiddleware } from "redux";
import { TodoReducerFn } from "./Todos/reducer.js";
import { AuthReducerFn } from "./Auth/reducer.js";

const middleware1 = (store) => (next) => (actions) => {
    console.log("before MW1");
    const resp = next(actions);
    console.log("After MW1");
    return resp;
     
}

const middleware2 = (store) => (next) => (actions) => {
      console.log("before MW2");
    if (typeof actions == "function") {
        return actions(store.dispatch);
    }
    next(actions);
     console.log("After MW2");
    return ;
}

const rootReducer = combineReducers({
    auth: AuthReducerFn,
    todos: TodoReducerFn,
});



export const store = new createStore(rootReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
     applyMiddleware(middleware1, middleware2)
    );

console.log(store.getState());
