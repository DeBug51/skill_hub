import { useState } from "react"

const useProfile = () => {
    const [friend, setFriend] = useState(null)
    const [userInfo, setUserInfo] = useState(null)
    const [post, setPost] = useState(null)
    const [error, setError] = useState(null)

    const getFriend = async (userId) => {
        const response = await fetch("/api/profile/friend/"+userId, {
            method: "GET"
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        } else {
            setFriend(json)
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
            setPost(json)
        } 
    }


    return {getFriend, getUser, getPost, friend, userInfo, post, error};
} 
 
export default useProfile;