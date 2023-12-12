import { useEffect } from "react";
import useProfile from '../hooks/useProfile';
import DisplayProfile from "../components/DisplayProfile";
import { useAuthContext } from "../hooks/useAuthContext"


const Profile = () => {
    const {getFriend, getUser, getPost, friend, userInfo, post, error} = useProfile()
    const { user } = useAuthContext()
    useEffect(() => {
        const getAllInfo = async () => {
            await getFriend(user._id)
            await getUser(user._id)
            await getPost(user._id)
        }
        getAllInfo()
    }, [])
    return ( 
        <div>
            <div>
                {userInfo && <DisplayProfile userInfo={userInfo}/>} 
            </div>
            <div>
                <p>Post</p>
            </div>
            <div>
                <p>Friends</p>
            </div>
        </div>
        
     );
}
 
export default Profile;