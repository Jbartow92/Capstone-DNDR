import { Routes, Route } from "react-router-dom"
import { ApplicationViews } from "./components/views/ApplicationView"
import "./App.css"


export const App = () => {
  return (
    <Routes>
      <Route
        path="*"
        element={
            <ApplicationViews />
        }
      />
    </Routes> 
    )
    }
