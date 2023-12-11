import { useEffect } from "react"

// import hooks
import { useConnect } from "../hooks/useConnect"

// import components
import DisplayUser from "../components/DisplayUser"

const Connect = () => {
    const { getUsers, users } = useConnect()

    useEffect(() => {
        const getAllUsers = async () => {
            await getUsers()
        }
        getAllUsers()
        {console.log(users)}
    }, [])
    
    return (
        <div className="connect">
            {users && users.map(user => (
                <DisplayUser tarUser = { user }></DisplayUser>
            ))}
        </div>
    )
}

export default Connect;