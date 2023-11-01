const DisplayPost = ({ post }) => {
    return (
        <div className="post">
            <p>{ post.creator }</p>
            <p>{ post.content }</p>
        </div>
    );
}
 
export default DisplayPost;