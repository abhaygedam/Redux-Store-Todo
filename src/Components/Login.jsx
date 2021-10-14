import { useState } from "react";
import { authLoading, authSuccess, authError } from "../redux/Auth/actions.js";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();

    const { loading, error } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(authLoading());
       
        console.log(username, password);
        axios.post("https://reqres.in/api/login", { email: username, password: password }).then((res) => {
            dispatch(authSuccess(res.data.token));
            console.log(res.data.token);
            history.push("/users");
        });
       
    }

    return loading ? ("loading") : (
        <div>
            <br /><br /><br /><br /><br />
            <h1>Login</h1>
            <br/><br/>
            <input type="text" placeholder="Username" onChange={(e) => { setUsername(e.target.value) }} /> <br/>
            <input type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} /> <br/>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;