import { createContext, useReducer, useEffect } from "react"

// import hooks
import { useCookie } from "../hooks/useCookie"

const AuthContext = createContext()

const authReducer = (state, action) => {
    switch (action.type){
        case "LOGIN":
            return { user: action.payload }
        case "LOGOUT":
            return { user: null }
        default:
            return state
    }
}

const AuthContextProv = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })

    const { getCookie } = useCookie()

    useEffect(() => {
        const cookie = getCookie("user")
        if (cookie) {
            dispatch({ type: "LOGIN", payload: JSON.parse(cookie) })
        }
    }, [])

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            { children }
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProv, authReducer }