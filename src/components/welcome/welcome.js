import { useNavigate } from "react-router-dom"
import "./welcome.css"

export const Welcome = () => {
    const navigate = useNavigate()

    return (
    <>
        <div className="welcome-container">
            <h1>
                <span>Welcome to</span>
                <span>Date Night Done Right</span>
            </h1>
            <div>Where date night planning is made easy</div>
        </div>
        <div className="login-container">
            <button className="login-btn"
                onClick={() => {
                    navigate(`/login`)
                  }}
            >Login</button>
        </div>
    </>
        

    )
}