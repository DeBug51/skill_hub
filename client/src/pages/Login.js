import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { login, error } = useLogin()

    const handleLogin = async (e) => {
        e.preventDefault()
        
        await login(email, password)
    }

    return (
        <div className="Login">
            <form className="loginform" onSubmit={ handleLogin }>
                <p>Login</p>
                <label>Email:</label>
                <input
                    type = "email"
                    onChange = {(e) => setEmail(e.target.value)}
                    value = { email }
                />
                <label>Password:</label>
                <input
                    type = "password"
                    onChange = {(e) => setPassword(e.target.value)}
                    value = { password }
                />
                <input
                    type = "submit"
                    value = { "Login" }
                />
            </form>
            {error && <div className="error">
                { error }
            </div>}
        </div>
    );
}
 
export default Login;