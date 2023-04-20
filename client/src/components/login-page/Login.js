import { Link } from "react-router-dom"
import useFormLogin from "../../hooks/hooks-forms/useFormLogin"

export const Login = () => {

    const  { value, changeValue, onSubmit } = useFormLogin();

    return (
        <section id="login">
        <form id="login-form" onSubmit={onSubmit}>
            <div className="container">
                <h1>Login</h1>
                <label htmlFor="email">Email</label>
                <input id="email" placeholder="Enter Email" name="email" type="text" value={value.email} onChange={changeValue}/>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" placeholder="Enter Password" name="password" value={value.password} onChange={changeValue}/>
                <input type="submit" className="registerbtn button" value="Login" />
                <div className="container signin">
                    <p>Dont have an account?<Link to="/register">Sign up</Link>.</p>
                </div>
            </div>
        </form>
    </section>
    )
}