import { useNavigate } from "react-router-dom"

// import hooks
import { useAuthContext } from "./useAuthContext"
import { useCookie } from "./useCookie"

const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { removeCookie } = useCookie()
    const navigate = useNavigate()

    const logout = () => {
            dispatch({ type: "LOGOUT" })
            removeCookie("user")
            navigate("/login")
    }

    return { logout }
}

export { useLogout }