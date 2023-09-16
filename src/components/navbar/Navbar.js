import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
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
            <li className="navbar-item">
                <Link to="/logout">Logout</Link>
            </li>
        </ul>
    )
}