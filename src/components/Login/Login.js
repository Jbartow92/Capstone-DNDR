import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { getUserByEmail } from "../../services/userService"


export const Login = () => {
  const [email, setEmail] = useState("user1@example.com")
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    getUserByEmail(email).then((foundUsers) => {
      if (foundUsers.length === 1) {
        const user = foundUsers[0]
        localStorage.setItem(
          "DNDR_user",
          JSON.stringify({
            id: user.id,
            email: user.email
          })
        )

        navigate("/profile")
      } else {
        window.alert("Invalid login")
      }
    })
  }

  return (
    <main className="container-login">
      <section>
        <form className="border" onSubmit={handleLogin}>
          <h1>Date Night Done Right</h1>
          <h2>Please sign in</h2>
          <div>
            <div >
              <input
                type="email"
                id="email"
                value={email}
                onChange={(evt) => setEmail(evt.target.value)}
                className="input"
                placeholder="Email address"
                required
                autoFocus
              />
            </div>
          </div>
          
              <button className="button" type="submit">            >
                Sign in
              </button>
            
        </form>
      </section>
      <section>
        <Link to="/register">Not a member yet?</Link>
      </section>
    </main>
  )
}