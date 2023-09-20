import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const handleLogout = () => {
        localStorage.removeItem(`DNDR_user`)
    }

    return (
        <ul className="navbar">
            <li className="navbar-item">
                <Link to="/food">Food</Link>
            </li>
            <li className="navbar-item">
                <Link to="/activity">Activity</Link>
            </li>
            <li className="navbar-item">
                <Link to="/profile">Profile</Link>
            </li>
            <li className="navbar-logout">
                <Link to="/" onClick={handleLogout}>Logout</Link>
            </li>
        </ul>
    )
}