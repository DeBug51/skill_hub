import "./DisplayHead.css"

const DisplayHead = ({ head }) => {
    return (
        <div className="disphead">
            <p>{head.userName}</p>
        </div>
    );
}
 
export default DisplayHead;