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
          <button className="button" onClick={() => {
          navigate(`/food/newFood`)
        }}>Create new food idea</button>
        </div>
        <div>
          <h3>Click on the images to see details about our ideas</h3>
        </div>
        <div className="content">
        {food.map((foods) => {
            return (
                <div key={foods.id} className="card">
                <div class="bg uwu"></div>
                <div class="bg"></div>
                <img
                src={foods.imageUrl}
                alt={foods.foodName}
                
                className="img"
                onClick={() => {
                    navigate(`/food/${foods.id}`)
                }}
                ></img>
                <div className="foods-name"><h4>{foods.foodName}</h4></div>
                <button className="button" onClick={handleSave(foods.id)}>Save Idea</button>
            </div>
            )
          })}
        </div>
    </>
  )
}