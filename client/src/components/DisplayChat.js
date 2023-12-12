import "./DisplayChat.css"

// import hooks
import { useAuthContext } from "../hooks/useAuthContext"

const DisplayChat = ({ chat }) => {
    const { user } = useAuthContext()

    return (
        <div className={user._id == chat.sender? "dispchat user":"dispchat"}>
            <p>{chat.text}</p>
        </div>
    );
}
 
export default DisplayChat;