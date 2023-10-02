import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { createUser, getUserByEmail } from "../../services/userService"


export const Register = (props) => {
  const [user, setUser] = useState({
    email: "",
  })
  let navigate = useNavigate()

  const registerNewUser = () => {
    createUser(user).then((createdUser) => {
      if (createdUser.hasOwnProperty("id")) {
        localStorage.setItem(
          "DNDR_user",
          JSON.stringify({
            id: createdUser.id,
            email: createdUser.email
          })
        )

        navigate("/")
      }
    })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    getUserByEmail(user.email).then((response) => {
      if (response.length > 0) {
        // Duplicate email. No good.
        window.alert("Account with that email address already exists")
      } else {
        // Good email, create user.
        registerNewUser()
      }
    })
  }

  const updateCustomer = (evt) => {
    const copy = { ...user }
    copy[evt.target.id] = evt.target.value
    setUser(copy)
  }

  return (
    <main style={{ textAlign: "center" }}>
      <form className="border" onSubmit={handleRegister}>
        <h1>Date Night Done Right</h1>
        <h4>Please Register With Your Email</h4>
        <div>
          <div>
            <input
              onChange={updateCustomer}
              type="email"
              id="email"
              className="input"
              placeholder="Email address"
              required
            />
          </div>
        </div>
        
         
            <button className="button" type="submit">
              Register
            </button>
          
        
      </form>
    </main>
  )
}