import { useState } from "react"
import { useNavigate } from "react-router-dom"

// import hooks
import { useAuthContext } from "./useAuthContext"
import { useCookie } from "./useCookie"

const useLogin = () => {
    const [error, setError] = useState(null)
    const { dispatch } = useAuthContext()
    const { setCookie } = useCookie()
    const navigate = useNavigate()

    const login = async (email, password) => {
        const response = await fetch("/api/user/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ email, password })
        })
        const json = response.json()

        if (!response.ok) {
            setError(json.error)
        } else {
            dispatch({ type: "LOGIN", payload: json })
            setCookie("user", json)
            navigate("/feed")
        }
    }

    return { login, error }
}

export { useLogin }