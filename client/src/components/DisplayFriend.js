import "./DisplayFriend.css"

const DisplayFriend = ({ friend }) => {
    return (
        <div>
            <p>{friend.userName}</p>
        </div>
    );
}
 
export default DisplayFriend;