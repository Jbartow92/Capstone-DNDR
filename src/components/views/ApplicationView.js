import { Route, Routes, Outlet } from "react-router-dom"
import "./views.css"
import { Welcome } from "../welcome/welcome";
import { ActivityList } from "../activity/ActivityList";
import { FoodList } from "../food/FoodList";
import { Profile } from "../Profile/Profile";
import { FoodDetails } from "../food/FoodIdeaDetailView";
import { NavBar } from "/home/josh/workspace/date-night-done-right/src/components/navbar/Navbar.js"
import { NewFoodForm } from "../Forms/CreateNewFoodIdea";
import { NewActivityForm } from "../Forms/CreateNewActivityIdea";


export const ApplicationViews = () => {
 

  
  // Render the component
  return (
    <Routes>
      {/* Main route */}
      <Route
        path="/"
        element={
          <>
            {/* Render Navbar component */}
            <NavBar />
            {/* Render the child components (defined by nested routes) */}
            <Outlet />
          </>
        }
      >
        {/* Nested routes */}
        <Route index element={<Welcome />} />
        <Route path="activity" >
          <Route index element={<ActivityList />} />
          <Route path="newActivity" element={<NewActivityForm />} />
        </Route>
        <Route path="food" >
          <Route index element={<FoodList />} />
          <Route path="newFood" element={<NewFoodForm />} />
          <Route path=":FoodId" element={<FoodDetails />} />
        </Route>
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

