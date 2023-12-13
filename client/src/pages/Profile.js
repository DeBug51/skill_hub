import "./Profile.css"
import { useEffect } from "react";
import useProfile from '../hooks/useProfile';
import DisplayProfile from "../components/DisplayProfile";
import DisplayPost from "../components/DisplayPost";
import DisplayTask from "../components/DisplayTask";
import DisplayFriend from "../components/DisplayFriend";
import { useAuthContext } from "../hooks/useAuthContext"



const Profile = () => {
    const {getFriend, getUser, getPost, getTask, friends, userInfo, posts, tasks} = useProfile()
    const { user } = useAuthContext()
    useEffect(() => {
        const getAllInfo = async () => {
            await getFriend(user._id)
            await getUser(user._id)
            await getPost(user._id)
            await getTask(user._id)
        }
        getAllInfo()
    }, [])
    return ( 
        <div className="profile">
            <div>
                {userInfo && <DisplayProfile userInfo={userInfo}/>}
            </div>
            <div>
                {posts && posts.map( (post) => (
                    <DisplayPost post = { post }></DisplayPost>
                ))}
            </div>
            <div>
                {tasks && tasks.map( (task) => (
                    <DisplayTask task = { task } />
                ))}
            </div>
            <div>
                {friends && friends.map( (friend) => (
                    <DisplayFriend friend = { friend }></DisplayFriend>
                ))}
            </div>
        </div>
        
     );
}
 
export default Profile;