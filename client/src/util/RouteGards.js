import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate, Outlet } from "react-router-dom";
import { MemeContext } from "../context/MemeContext";

const RouteGards = ({ children }) => {

    const { user } = useContext(AuthContext);
    const {memes} = useContext(MemeContext);



    if (user.accessToken === undefined ) {
        return <Navigate to='/login' ></Navigate>
    }

    return children ? children : <Outlet />
}

export default RouteGards;