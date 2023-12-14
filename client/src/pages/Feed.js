import "./Feed.css"
import { useEffect } from "react"

// import hooks
import { usePost } from "../hooks/usePost"

// import components
import CreatePost from "../components/CreatePost"
import DisplayPost from "../components/DisplayPost"

const Feed = () => {
    const { getPosts, posts } = usePost()

    useEffect(() => {
        const getAllPosts = async () => {
            await getPosts()
        }
        getAllPosts()
    }, [])
    
    return (
        <div className="feed">
            <CreatePost />
            {posts && posts.map(post => (
                <DisplayPost post = { post }></DisplayPost>
            ))}
        </div>
    )
}

export default Feed