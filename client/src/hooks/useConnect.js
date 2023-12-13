import { useState } from "react"

const useConnect = () => {
    const [users, setUsers] = useState(null)
    const [error, setError] = useState(null)

    const getUsers = async (userId) => {
        const response = await fetch("/api/connect/users/"+userId, {
            method: "GET"
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        } else {
            setUsers(json)
        }
    }

    const createConnection = async (user1Id, user1Name, user2Id, user2Name) => {
        const response = await fetch("/api/connect/add", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ user1Id, user1Name, user2Id, user2Name })
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
    }

    return { getUsers, createConnection, users, error }
}

export { useConnect }