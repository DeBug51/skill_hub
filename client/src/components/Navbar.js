import { Link } from "react-router-dom";

// import hooks
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const NavBar = () => {
    const { user } = useAuthContext()
    const { logout } = useLogout()

    const handleLogout = () => {
        logout()
    }

    return (
        <nav>
            <Link to = "/">SkillHub</Link>
            {user && <ul>
                <li><Link to = "/connect">Connect</Link></li>
                <li><Link to = "/feed">Feed</Link></li>
                <li><Link to = "/chat">Chat</Link></li>
                <button onClick={ handleLogout }>Logout</button>
            </ul>}
            {!user && <ul>
                <li><Link to = "/login">Login</Link></li>
                <li><Link to = "/signup">Signup</Link></li>
            </ul>}
        </nav>
    );
}
 
export default NavBar;