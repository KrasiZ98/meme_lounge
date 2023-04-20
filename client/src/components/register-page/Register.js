import { Link } from "react-router-dom"
import useFormRegister from "../../hooks/hooks-forms/useFormRegister"

export const Register = () => {
    const { value, changeValue, onSubmit } = useFormRegister();

    return (
        <section id="register">
            <form id="register-form" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Register</h1>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" placeholder="Enter Username" name="username" value={value.username} onChange={changeValue}/>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" placeholder="Enter Email" name="email" value={value.email} onChange={changeValue}/>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" placeholder="Enter Password" name="password" value={value.password} onChange={changeValue}/>
                    <label htmlFor="repeatPass">Repeat Password</label>
                    <input id="repeatPass" type="password" placeholder="Repeat Password" name="repass" value={value.repass} onChange={changeValue}/>
                    <div className="gender" value={value.gender} onChange={changeValue}>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label htmlFor="female">Female</label>
                        <input type="radio" name="gender" id="male" value="male"  />
                        <label htmlFor="male">Male</label>
                    </div>
                    <input type="submit" className="registerbtn button" value="Register" />
                    <div className="container signin">
                        <p>Already have an account?<Link to="/login">Sign in</Link>.</p>
                    </div>
                </div>
            </form>
        </section>
    )
}