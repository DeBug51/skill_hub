const DisplayProfile = ({ userInfo }) => {
    return ( 
        <div>
            <p>{ userInfo.userName }</p>
            <p>{ userInfo.userType }</p>
            <p>{ userInfo.email }</p>
        </div>
     );
}
 
export default DisplayProfile;
