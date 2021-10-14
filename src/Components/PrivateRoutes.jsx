import { Redirect, Route } from "react-router";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function PrivateRoutes({children, exact, path, to}){
    
   let history = useHistory();
   const { token } = useSelector((state) => state.auth);
  console.log("tokenn", token);

    if (!token) {
          history.push(to);
    }

    return (
        <Route exact={exact} path={path}>
          {children}
        </Route>
    );
}