import "./DisplayProfile.css"

const DisplayProfile = ({ userInfo }) => {
    return ( 
        <div className="proinfo">
            <p>Name: { userInfo.userName }</p>
            <p>Category: { userInfo.userType }</p>
            <p>Email: { userInfo.email }</p>
        </div>
     );
}
 
export default DisplayProfile;
