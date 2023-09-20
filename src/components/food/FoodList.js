import { useEffect, useState } from "react"

import { useNavigate } from "react-router-dom"
import "./food.css"
import { getFood, postSavedFood } from "../../services/FoodService"



export const FoodList = ({ currentUser }) => {
  const [food, setFood] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    getFood().then((foodArray) => {
      setFood(foodArray)
    })
  }, [])

  const handleSave = (foodId) => (event) => {
    event.preventDefault()

    const savedFoodIdea = {
      foodId: foodId,
      userId: currentUser.id
      
    }

    postSavedFood(savedFoodIdea).then(() => {
      navigate("/profile")
    })
  }

  return (
    <>
        <div>
            <h1>Here are some food ideas!</h1>
        </div>
        <div>
          <button className="new-idea-btn" onClick={() => {
          navigate(`/food/newFood`)
        }}>Create new food idea</button>
        </div>
        <div>
          <h3>Click on the images to see details about our ideas</h3>
        </div>
        <div className="food-container">
        {food.map((foods) => {
            return (
                <div key={foods.id} className="foods-card">
                <img
                src={foods.imageUrl}
                alt={foods.foodName}
                currentUser={currentUser}
                className="foods-img"
                onClick={() => {
                    navigate(`/food/${foods.id}`)
                }}
                ></img>
                <div className="foods-name">{foods.foodName}</div>
                <button className="btn" onClick={handleSave(foods.id)}>Save Idea</button>
            </div>
            )
          })}
        </div>
    </>
  )
}