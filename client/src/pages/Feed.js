import { useEffect } from "react"

// import hooks
import { usePost } from "../hooks/usePost"

// import components
import DisplayPost from "../components/DisplayPost"

const Feed = () => {
    const { getPosts, posts } = usePost()

    useEffect(() => {
        const getAllPosts = async () => {
            const json = await getPosts()
            getPosts(json)
        }
        getAllPosts()
    }, [])
    
    return (
        <div className="Feed">
            {posts && posts.map(post => (
                <DisplayPost post={ post }></DisplayPost>
            ))}
        </div>
    )
}

export default Feed