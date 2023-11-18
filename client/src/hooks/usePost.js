import { useState } from "react"

const usePost = () => {
    const [posts, setPosts] = useState(null)
    const [comments, setComments] = useState(null)
    const [error, setError] = useState(null)

    const getPosts = async () => {
        const response = await fetch("/api/feed/posts", {
            method: "GET"
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        } else {
            setPosts(json)
        }
    }

    const createPost = async (creatorId, creatorName, content) => {
        const response = await fetch("/api/feed/posts", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ creatorId, creatorName, content })
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
    }

    const addUpvote = async (postId, userId, userName) => {
        const response = await fetch("/api/feed/upvotes/" + postId, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ userId, userName })
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
    }

    const getComments = async (postId) => {
        const response = await fetch("/api/feed/comments/" + postId, {
            method: "GET"
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        } else {
            setComments(json.comments)
        }
    }

    const addComment = async (postId, userId, userName, comment) => {
        const response = await fetch("/api/feed/comments", {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ postId, userId, userName, comment })
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        } else {
            setComments(json.comments)
        }
    }

    return { getPosts, createPost, addUpvote, getComments, addComment, posts, comments, error }
}

export { usePost }