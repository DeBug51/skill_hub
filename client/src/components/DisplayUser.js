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
            <p>{ tarUser.userName }</p>
            <button onClick={handleConnect}>Connect</button>
        </div>
    );
}
 
export default DisplayUser;