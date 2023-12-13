import "./DisplayComplete.css"

const DisplayComplete = ({ completer }) => {
    return (
        <div className="comment">
            <p className="name">{ completer.userName }</p>
            <p className="content">{ completer.link }</p>
        </div>
     );
}
 
export default DisplayComplete;