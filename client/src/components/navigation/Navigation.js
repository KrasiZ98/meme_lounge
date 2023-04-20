import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

export const Navigation = () => {
    const { user } = useContext(AuthContext);

    return (
        <nav>
            <Link to="/catalog">All Memes</Link>
            {/* <!-- Logged users --> */}
            <div className="user">
                {user.email ? <div className="profile">
                    <span>Welcome, {user.email}</span>
                    <Link to="/profile">My Profile</Link>
                <Link to="/create">Create Meme</Link>
                    <Link to="/logout">Logout</Link>
                </div> : <div className="profile">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>}

            </div>
            {/* <!-- Guest users --> */}
            <div className="guest">

                <Link className="active" to="/">Home Page</Link>
            </div>
        </nav>
    )
}