import { useNavigate } from "react-router-dom"
import "./welcome.css"

export const Welcome = () => {
    const navigate = useNavigate()

    return (
    <>
        <div className="border">
            <h1>
                <span>Welcome to</span>
                <span>Date Night Done Right</span>
            </h1>
            <div>Where date night planning is made easy</div>
        </div>
        <div className="box-input">
            <button className="button"
                onClick={() => {
                    navigate(`/login`)
                  }}
            >Login</button>
        </div>
    </>
        

    )
}