import { useParams, useNavigate } from "react-router-dom"
import { deleteFood, getFoodById } from "../../services/FoodService"
import { useEffect, useState } from "react"
import "./food.css"


export const FoodDetails = () => {
  const [food, setFood] = useState({})

  const { FoodId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getFoodById(FoodId).then((foodObj) => {
      setFood(foodObj)
    })
  }, [FoodId])
  console.log(food)

  const handleDelete = (event) => {
    

    deleteFood(food.id).then(() => {
      navigate(-1)
    })
  };

  return (
    <div className="food-detail-container">
      <h3 className="food-detail-name">Item details for food: {food.foodName}</h3>
      <img src={food.imageUrl} alt={food.foodName} className="food-img" />
      <div className="food-details">Food Type: {food.foodType?.type}</div>
      <div className="food-details">Food Cost: {food.foodPrice?.price}</div>
      <button
      className="btn"
        onClick={() => {
          navigate(`/food/${food.id}/edit`)
        }}
      >
        Edit
      </button>
      
      <button className="btn" onClick={handleDelete}>Delete</button>
    </div>
  )
}