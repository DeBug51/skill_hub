import { useState, useEffect } from "react"

// import components
import DisplayPost from "../components/DisplayPost"

const Feed = () => {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        const getPosts = async () => {
            const response = await fetch("/api/feed/posts", {
                method: "GET"
            })
            const json = await response.json()
            setPosts(json)
        }
        getPosts()
    }, [])
    
    return (
        <div className="Feed">
            {posts && posts.map(post => (
                <DisplayPost post={post}></DisplayPost>
            ))}
        </div>
    )
}

export default Feed