import "./DisplayComment.css"

const DisplayComment = ({ comment }) => {
    return ( 
        <div className="comment">
            <p className="name">{ comment.userName }</p>
            <p className="content">{ comment.comment }</p>
        </div>
     );
}
 
export default DisplayComment;