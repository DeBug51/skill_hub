import { useNavigate } from "react-router-dom"
import { useState } from "react";

const Signup = () => {
    const [userName, setUserName] = useState("")
    const [userType, setUserType] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const handleSignup = async (e) => {
        e.preventDefault()
        const response = await fetch("/api/user/signup", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ userName, userType, email, password })
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        } else {
            navigate("/login")
        }
    }

    return (
        <div className="Signup">
            <form className="signupform" onSubmit={ handleSignup }>
                <p>Signup</p>
                <label>User Name:</label>
                <input
                    type = "text"
                    onChange = {(e) => setUserName(e.target.value)}
                    value = { userName }
                />
                <label>User Type:</label>
                <select value={userType} onChange={(e) => setUserType(e.target.value)}>
                    <option value="Company">Company</option>
                    <option value="Student">Student</option>
                </select>
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
                    value = { "Signup" }
                />
            </form>
            {error && <div className="error">
                { error }
            </div>}
        </div>
    );
}
 
export default Signup;