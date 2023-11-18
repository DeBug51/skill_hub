import { useState } from "react"

const useChat = () => {
    const [chatHeads, setChatHeads] = useState(null)
    const [chats, setChats] = useState(null)
    const [error, setError] = useState(null)
    
    const getHeads = async (userId) => {
        const response = await fetch("/api/chat/heads/" + userId, {
            method: "GET"
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        } else {
            setChatHeads(json.connections)
        }
    }

    const getChats = async (chatId) => {
        const response = await fetch("/api/chat/texts/" + chatId, {
            method: "GET"
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        } else {
            setChats(json.messages)
            console.log(chats)
        }
    }

    const sendText = async (chatId, sender, text) => {
        const response = await fetch("/api/chat/texts", {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ chatId, sender, text })
        })
        const json = await response.json()
        if (!response.ok) {
            setError(json.error)
        } else {
            setChats(json.messages)
        }
    }

    return { getHeads, getChats, sendText, chatHeads, chats, error }
}

export { useChat }