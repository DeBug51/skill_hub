import "./Chat.css"
import { useEffect, useState } from "react"

// import components
import DisplayHead from "../components/DisplayHead"
import DisplayChat from "../components/DisplayChat"

// import hooks
import { useChat } from "../hooks/useChat"
import { useAuthContext } from "../hooks/useAuthContext"

const Chat = () => {
    const { user } = useAuthContext()
    const { getHeads, getChats, sendText, chatHeads, chats } = useChat()
    const [currentChat, setCurrentChat] = useState(null)
    const [userText, setUserText] = useState("")

    const handleText = async (e) => {
        e.preventDefault()
        await sendText(currentChat, user._id, userText)
        setUserText("")
    }

    useEffect(() => {
        const getAllHeads = async () => {
            await getHeads(user._id)
        }
        getAllHeads()
    }, [])

    return (
        <div className="chat">
            <div className="chatheads" >
                {chatHeads && chatHeads.map(head => (
                    <div onClick = { async () => {
                        await getChats(head.chatId)
                        setCurrentChat(head.chatId)
                    }}>
                        <DisplayHead head = { head } />
                    </div>
                ))}
            </div>

            <div className="chatbox">
                <div className="chats">
                    {currentChat && chats.map(chat => (
                        <DisplayChat chat = { chat }></DisplayChat>
                    ))}
                </div>
                {currentChat && <form className="text" onSubmit = { handleText }>
                    <input className="box"
                        type = "text"
                        onChange = {(e) => setUserText(e.target.value)}
                        value = { userText }
                    />
                    <input className="button"
                        type = "submit"
                        value = { "Send" }
                    />
                </form>}
            </div>
        </div>
    );
}

export default Chat;