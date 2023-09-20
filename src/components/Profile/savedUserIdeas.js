// import { useEffect, useState } from "react"


// import { useNavigate } from "react-router-dom"
// import { getUserById } from "../../services/userService"
// import { saveActivity } from "../../services/ActivityService"
// import { saveFood } from "../../services/FoodService"


// export const EmployeeForm = ({currentUser}) => {
//     const [user, setUser] = useState({})
//     const [food, setFood] = useState([])
//     const [activities, setActivity] = useState([])

//     const navigate = useNavigate()

//     useEffect(() => {
//         getUserById(currentUser.id).then((data) => {
//             const userObj = data[0]
//             setUser(userObj)
//         })
//     }, [currentUser])


  
  
//     useEffect(() => {
//       saveFood().then((foodArray) => {
//         setFood(foodArray)
//       })
//     }, [])

//     useEffect(() => {
//         saveActivity().then((foodArray) => {
//           setActivity(foodArray)
//         })
//       }, [])

//     return (
//         <form className="profile">
//             <h2>Update Profile</h2>
//             <fieldset>
//             <div className="food-container">
//                 {food.map((foods) => {
//                     return (
//                         <div key={foods.FoodId} className="foods-card">
//                         <img
//                         src={foods.imageUrl}
//                         alt={foods.foodName}
//                         currentUser={currentUser}
//                         className="foods-img"
                        
//                         ></img>
//                         <div className="foods-name">{foods.foodName}</div>
//                         <button className="btn" onClick={() => {
//                 navigate(`/profile`)
//                 }}>Delete Idea</button>
//                     </div>
//                     )
//                 })}
//                 </div>
//             </fieldset>
//             <fieldset>
//             <div className="activity-container">
//                 {activities.map((activity) => {
//                     return (
//                         <div key={activity.id} className="activity-card">
//                         <img
//                         src={activity.imageUrl}
//                         alt={activity.activityName}
//                         currentUser={currentUser}
//                         className="activity-img"
//                         onClick={() => {
//                             navigate(`/activity/${activity.id}`)
//                         }}
//                         ></img>
//                         <div className="activity-name">{activity.activityName}</div>
//                         <button className="btn" >Delete Idea</button>
//                     </div>
//                     )
//                 })}
//                 </div>
//             </fieldset>
//             <fieldset>
                
                
//             </fieldset>
//         </form>
//     )
// }