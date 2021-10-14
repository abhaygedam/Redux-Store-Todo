import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { addCount } from './redux/Todos/action';
import { Todo } from './Components/Todo';
import Login from './Components/Login';
import PrivateRoutes from './Components/PrivateRoutes';
import { Route, Switch } from "react-router-dom";


function App() {
  

  const counter = useSelector((store) => store.todos.counter, shallowEqual);
  console.log("Refresh", counter);
  const dispatch = useDispatch();


  return (
    <div className="App">
      <Switch>
        <Route path="/home">
             <Todo></Todo>
        </Route>
         <Route exact path="/">
             <Login></Login>
        </Route>
        <PrivateRoutes exact path="/users" to="/home">
            
        </PrivateRoutes>
      </Switch>
    </div>
  );
}

export default App;
