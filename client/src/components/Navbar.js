import "./Navbar.css"

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
        <nav className="navbar">
            <Link to = "/">
                <p className="name"><span>S</span>kill<span>H</span>ub</p>
            </Link>

            {user && <ul className="menu">
                <li><Link to = "/profile"><p>Profile</p></Link></li>
                <li><Link to = "/connect"><p>Connect</p></Link></li>
                <li><Link to = "/feed"><p>Feed</p></Link></li>
                <li><Link to = "/chat"><p>Chat</p></Link></li>
                <li><Link to = "/task"><p>Tasks</p></Link></li>
                <li onClick={ handleLogout }><p>Logout</p></li>
            </ul>}
            {!user && <ul className="menu">
                <li><Link to = "/login"><p>Login</p></Link></li>
                <li><Link to = "/signup"><p>Signup</p></Link></li>
            </ul>}
        </nav>
    );
}
 
export default NavBar;