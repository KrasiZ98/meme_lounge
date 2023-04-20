import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

export const Home = () => {
    const { user } = useContext(AuthContext)
    return (
        <section id="welcome">
            <div id="welcome-container">
                <h1>Welcome To Meme Lounge</h1>
                <img src="/images/welcome-meme.jpg" alt="meme" />
                {!user.email &&
                    <>
                        <h2>Login to see our memes right away!</h2>
                        <div id="button-div">
                            <Link to="/login" className="button">Login</Link>
                            <Link to="/register" className="button">Register</Link>
                        </div>
                       </>}

                        </div>
                    </section>
                )
}