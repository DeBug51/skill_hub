import "./DisplayUser.css"

// import hooks
import { useConnect } from "../hooks/useConnect";
import { useAuthContext } from "../hooks/useAuthContext"

const DisplayUser = ({ tarUser }) => {
    const { user } = useAuthContext()
    const { createConnection } = useConnect()

    const handleConnect = async () => {
        await createConnection(user._id, user.userName, tarUser._id, tarUser.userName)
    }

    return (
        <div className="user">
            <p className="name">{ tarUser.userName }</p>
            <div className="button" onClick={handleConnect}>Connect</div>
        </div>
    );
}
 
export default DisplayUser;