const DisplayChat = ({ chat }) => {
    return (
        <div>
            <p>{chat.sender}</p>
            <p>{chat.text}</p>
        </div>
    );
}
 
export default DisplayChat;