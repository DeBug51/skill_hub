import "./DisplayPost.css"
import { useState } from "react";

// import hooks
import { usePost } from "../hooks/usePost";
import { useAuthContext } from "../hooks/useAuthContext"

// import components
import DisplayComment from "./DisplayComment";

const DisplayPost = ({ post }) => {
    const { user } = useAuthContext()
    const { addUpvote, getComments, addComment, comments } = usePost()
    const [userComm, setUserComm] = useState("")

    const handleUpvote = async () => {
        await addUpvote(post._id, user._id, user.userName)
    }

    const handleGetComment = async () => {
        await getComments(post._id)
    }

    const handleComment = async (e) => {
        e.preventDefault()
        await addComment(post._id, user._id, user.userName, userComm)
        setUserComm("")
    }

    return (
        <div className="post">
            <div className="container">
                <p className="name">{ post.creatorName }</p>
                <p className="content">{ post.content }</p>
                <div className="stat">
                    <p>{ post.voteCount } Upvotes</p>
                    <p>{ post.commentCount } Comments</p>
                </div>
            </div>
            <div className="react">
                <p onClick={handleUpvote}>Upvote</p>
                <p onClick={handleGetComment}>Comment</p>
            </div>
            {comments && comments.map(comment => (
                <DisplayComment comment={ comment }></DisplayComment>
            ))}
            <form className="commentform" onSubmit={ handleComment }>
                <input className="box"
                    type = "text"
                    onChange = {(e) => setUserComm(e.target.value)}
                    value = { userComm }
                />
                <input className="button"
                    type = "submit"
                    value = { "Comment" }
                />
            </form>
        </div>
    );
}
 
export default DisplayPost;