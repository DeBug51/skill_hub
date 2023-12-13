import "./CreatePost.css"
import { useState } from "react";

// import hooks
import { usePost } from "../hooks/usePost";
import { useAuthContext } from "../hooks/useAuthContext"

const CreatePost = () => {
    const { user } = useAuthContext()
    const { createPost } = usePost()
    const [content, setContent] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        await createPost(user._id, user.userName, content)
        setContent("")
    }

    return (
        <div className="createpost">
            <p className="name">{ user.userName }</p>
            <form className="postform" onSubmit={ handleSubmit }>
                <input className="box"
                    type = "text"
                    onChange = {(e) => setContent(e.target.value)}
                    value = { content }
                />
                <input className="button"
                    type = "submit"
                    value = { "Post" }
                />
            </form>
        </div>
    );
}
 
export default CreatePost;