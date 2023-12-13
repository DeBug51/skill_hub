import "./Connect.css"
import { useEffect } from "react"

// import hooks
import { useConnect } from "../hooks/useConnect"
import { useAuthContext } from "../hooks/useAuthContext"

// import components
import DisplayUser from "../components/DisplayUser"

const Connect = () => {
    const { user } = useAuthContext()
    const { getUsers, users } = useConnect()

    useEffect(() => {
        const getAllUsers = async () => {
            await getUsers(user._id)
        }
        getAllUsers()
    }, [])
    
    return (
        <div className="connect">
            {users && users.map(tarUser => (
                <DisplayUser tarUser = { tarUser }></DisplayUser>
            ))}
        </div>
    )
}

export default Connect;