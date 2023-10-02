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
import { ActivityDetails } from "../activity/ActivityIdeaDetailView";
import { EditActivity } from "../Forms/EditActivity";
import { EditFood } from "../Forms/EditFoodIdea";
import { useEffect, useState } from "react";


export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  // useEffect hook to run code when the component mounts
  useEffect(() => {
    const dateNightDoneRightUser = localStorage.getItem("DNDR_user");
    const dateNightDoneRightObject = JSON.parse(dateNightDoneRightUser);

    // Update the currentUser state with the parsed user object
    setCurrentUser(dateNightDoneRightObject);
  }, []); 

  
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
          <Route index element={<ActivityList currentUser={currentUser} />} />
          <Route path="newActivity" element={<NewActivityForm currentUser={currentUser}/>} />
          <Route path=":ActivityId" element={<ActivityDetails currentUser={currentUser} />} />
          <Route path=":ActivityId/edit" element={<EditActivity />} />
        </Route>
        <Route path="food" >
          <Route index element={<FoodList currentUser={currentUser} />} />
          <Route path="newFood" element={<NewFoodForm currentUser={currentUser}/>} />
          <Route path=":FoodId" element={<FoodDetails currentUser={currentUser}/>} />
          <Route path=":FoodId/edit" element={<EditFood />} />
        </Route>
        <Route path="profile" element={<Profile currentUser={currentUser}/>} />
        
      </Route>
    </Routes>
  );
};

