import { useState } from "react"

const useProfile = () => {
    const [friends, setFriends] = useState(null)
    const [userInfo, setUserInfo] = useState(null)
    const [posts, setPosts] = useState(null)
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


    return {getFriend, getUser, getPost, friends, userInfo, posts, error};
} 
 
export default useProfile;