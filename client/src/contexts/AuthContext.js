import { createContext, useReducer } from "react"

const AuthContext = createContext()

const authReducer = (state, action) => {
    switch (action.type){
        case "SET_USERID":
            return { userId: action.payload }
        default:
            return state
    }
}

const AuthContextProv = ({ children }) => {
    const { state, dispatch } = useReducer(authReducer, {
        userId: null
    })

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            { children }
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProv, authReducer }