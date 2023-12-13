import "./DisplayFriend.css"

const DisplayFriend = ({ friend }) => {
    return (
        <div className="frindinfo">
            <p>{friend.userName}</p>
        </div>
    );
}
 
export default DisplayFriend;