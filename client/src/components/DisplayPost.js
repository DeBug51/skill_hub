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
            <div className="postCont">
                <p>{ post.creatorName }</p>
                <p>{ post.content }</p>
                <p>{ post.voteCount }</p>
                <p>{ post.commentCount }</p>
            </div>
            <div className="reactCont">
                <button onClick={handleUpvote}>Upvote</button>
                <button onClick={handleGetComment}>Comment</button>
            </div>
            {comments && comments.map(comment => (
                <DisplayComment comment={ comment }></DisplayComment>
            ))}
            <form className="commentform" onSubmit={ handleComment }>
                <label>Comment:</label>
                <input
                    type = "text"
                    onChange = {(e) => setUserComm(e.target.value)}
                    value = { userComm }
                />
                <input
                    type = "submit"
                    value = { "Comment" }
                />
            </form>
        </div>
    );
}
 
export default DisplayPost;