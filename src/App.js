import { Routes, Route } from "react-router-dom"
import { ApplicationViews } from "./components/views/ApplicationView"
import "./App.css"
import { Authorized } from "./components/auth/authorize"
import { Login } from "./components/Login/Login"
import { Register } from "./components/Login/Register"


export const App = () => {
  return (
    <Routes>
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
      <Route
        path="*"
        element={
          <Authorized>
            <ApplicationViews />
          </Authorized>
        }
      />
    </Routes> 
    )
    }
