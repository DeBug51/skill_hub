import { useState } from "react"

const useProfile = () => {
    const [friends, setFriends] = useState(null)
    const [userInfo, setUserInfo] = useState(null)
    const [posts, setPosts] = useState(null)
    const [tasks, setTasks] = useState(null)
    const [error, setError] = useState(null)

    const getFriend = async (userId) => {
        const response = await fetch("/api/profile/friend/"+userId, {
            method: "GET"
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        } else {
            setFriends(json.connections)
        } 
    }

    const getUser = async (userId) => {
        const response = await fetch("/api/profile/user/"+userId, {
            method: "GET"
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        } else {
            setUserInfo(json)
        } 
    }

    const getPost = async (creatorId) => {
        const response = await fetch("/api/profile/post/"+creatorId, {
            method: "GET"
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        } else {
            setPosts(json)
        } 
    }

    const getTask = async (creatorId) => {
        const response = await fetch("/api/task/get/"+creatorId, {
            method: "GET"
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        } else {
            setTasks(json)
        }
    }


    return {getFriend, getUser, getPost, getTask, friends, userInfo, posts, tasks, error};
} 
 
export default useProfile;