import "./DisplayComplete.css"

const DisplayComplete = ({ completer }) => {
    return (
        <div className="complete">
            <p className="completer">{ completer.userName }</p>
            <p className="link">{ completer.link }</p>
        </div>
     );
}
 
export default DisplayComplete;