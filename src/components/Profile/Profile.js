import { useEffect, useState } from "react";
import "./Profile.css";
import { getSavedFoods, } from "../../services/FoodService";
import {  getSavedActivities } from "../../services/ActivityService";

export const Profile = ({ currentUser }) => {
  const [savedFood, setSavedFood] = useState([]);
  const [savedActivities, setSavedActivities] = useState([]);



  useEffect(() => {
    // Fetch saved food data for the current user
    getSavedFoods(currentUser.id).then((foodArray) => {
      setSavedFood(foodArray);
    });

    // Fetch saved activity data for the current user
    getSavedActivities(currentUser.id).then((activityArray) => {
      setSavedActivities(activityArray);
    });
  }, [currentUser]);

  // const handleDeleteFood = (foodId) => {
  //   // Delete the specific saved food item by its ID
  //   deleteSavedFood(foodId).then(() => {
  //     // After deletion, update the savedFood state to remove the deleted item
  //     setSavedFood((prevSavedFood) =>
  //       prevSavedFood.filter((food) => food.food.id !== foodId)
  //     );
  //   });
  // };

  // const handleDeleteActivity = (activityId) => {
  //   // Delete the specific saved activity item by its ID
  //   deleteSavedActivity(activityId).then(() => {
  //     // After deletion, update the savedFood state to remove the deleted item
  //     setSavedActivities((prevSavedActivity) =>
  //       prevSavedActivity.filter((activity) => activity.activity.id !== activityId)
  //     );
  //   });
  // };

  return (
    <>
      <div>
        <h1>Welcome back to your profile</h1>
      </div>
      <div>
        <h2>Here are your saved food ideas</h2>
    </div>
    <div className="content">
        {/* Render savedFood data */}
        {savedFood.map((food) => (
            currentUser.id === food.userId ? (
                <div key={food.food.id} className="card">
                <div class="bg uwu"></div>
                <div class="bg"></div>
                <img
                src={food.food.imageUrl}
                alt={food.food.foodName}
                
                className="img"
                ></img>
                <div className="foods-name"><h4>{food.food.foodName}</h4></div>
                {/* <button className="btn" 
                onClick={() => handleDeleteFood(food.food.id)}
                >Remove Saved Food</button> */}
                
            </div>
            )
          
             : null
        ))}
        </div>

      <div>
        <h2>Here are your saved activity ideas</h2>
        <div className="content">
          {/* Render savedActivities data */}
          
            {savedActivities.map((activity) => (
            currentUser.id === activity.userId ? (
                <div key={activity.activity.id} className="card">
                <div class="bg uwu"></div>
                <div class="bg"></div>
                <img
                src={activity.activity.imageUrl}
                alt={activity.activity.activityName}
                
                className="img"
                ></img>
                <div className="foods-name"><h4>{activity.activity.activityName}</h4></div>
                {/* <button className="btn"
                onClick={() => handleDeleteActivity(activity.activity.id)}
                >Remove Saved Activity</button> */}
            </div>
            )
          
             : null
        ))}
        </div>

        </div>
    </>
  );
};
