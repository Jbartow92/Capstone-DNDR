import { useEffect, useState } from "react"

import { useNavigate } from "react-router-dom"
import "./food.css"
import { getFood } from "../../services/FoodService"


export const FoodList = () => {
  const [food, setFood] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    getFood().then((foodArray) => {
      setFood(foodArray)
    })
  }, [])

  

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
        <div className="food-container">
        {food.map((foods) => {
            return (
                <div key={foods.FoodId} className="foods-card">
                <img
                src={foods.imageUrl}
                alt={foods.foodName}
                className="foods-img"
                onClick={() => {
                    navigate(`/food/${foods.foodId}`)
                }}
                ></img>
                <div className="foods-name">{foods.foodName}</div>
                <button className="btn" onClick={() => {
          navigate(`/profile`)
        }}>Save Idea</button>
            </div>
            )
        })}
        </div>
    </>
  )
}