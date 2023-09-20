import { useEffect, useState } from "react";
import "./Profile.css";
import { getSavedFoods, } from "../../services/FoodService";
import { getSavedActivities } from "../../services/ActivityService";

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

  return (
    <>
      <div>
        <h1>Welcome back to your profile</h1>
      </div>
      <div>
        <h2>Here are your saved food ideas</h2>
    </div>
    <div className="food-container">
        {/* Render savedFood data */}
        {savedFood.map((food) => (
            currentUser.id === food.userId ? (
                <div key={food.food.id} className="foods-card">
                <img
                src={food.food.imageUrl}
                alt={food.food.foodName}
                
                className="foods-img"
                ></img>
                <div className="foods-name">{food.food.foodName}</div>
                
            </div>
            )
          
             : null
        ))}
        </div>

      <div>
        <h2>Here are your saved activity ideas</h2>
        <div className="activity-container">
          {/* Render savedActivities data */}
          
            {savedActivities.map((activity) => (
            currentUser.id === activity.userId ? (
                <div key={activity.activity.id} className="foods-card">
                <img
                src={activity.activity.imageUrl}
                alt={activity.activity.activityName}
                
                className="foods-img"
                ></img>
                <div className="foods-name">{activity.activity.activityName}</div>
                
            </div>
            )
          
             : null
        ))}
        </div>

        </div>
    </>
  );
};
