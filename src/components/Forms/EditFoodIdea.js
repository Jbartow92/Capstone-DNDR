import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getFoodType } from "../../services/typeService"
import { getFoodPrice } from "../../services/priceService"
import { editFood, getFoodById } from "../../services/FoodService"



export const EditFood = () => {
  const [food, setFood] = useState({})
  const [foodType, setFoodType] = useState([])
  const [foodPrice, setFoodPrice] = useState([])

  const { FoodId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getFoodType().then((TypeArr) => {
      setFoodType(TypeArr)
    })

    getFoodPrice().then((priceArr) => {
      setFoodPrice(priceArr)
    })
  }, [])

  useEffect(() => {
    getFoodById(FoodId).then((activityObj) => {
      setFood(activityObj)
    })
  }, [FoodId])

  const handleSave = (event) => {
    event.preventDefault()

    const updatedItem = {
      id: food.id,
      foodName: food.foodName,
      imageUrl: food.imageUrl,
      foodTypeId: food.foodTypeId,
      foodPriceId: food.foodPriceId,
    }

    editFood(updatedItem).then(() => {
      navigate(`/food/${FoodId}`)
    })
  }

  return (
    <form className="decoration-form">
      <h2 className="decoration-form-title">Edit Food</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="foodName">Name:</label>
          <input
            name="foodName"
            value={food.foodName}
            type="text"
            className="form-control"
            placeholder="food name"
            onChange={(event) => {
              const foodCopy = { ...food }
              foodCopy.foodName = event.target.value
              setFood(foodCopy)
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="imgUrl">Image URL:</label>
          <input
            name="imageUrl"
            value={food.imageUrl}
            type="text"
            className="form-control"
            placeholder="https://www.example.com"
            onChange={(event) => {
              const foodCopy = { ...food }
              foodCopy.imageUrl = event.target.value
              setFood(foodCopy)
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <div>Type:</div>
          <select name="foodTypeId" 
          value={food.foodTypeId}
          onChange={(event) => {
            const foodCopy = { ...food }
            foodCopy.foodTypeId= parseInt(event.target.value)
            setFood(foodCopy)
          }}
          >
            <option value={0}>Please select a type</option>
            {foodType.map((typeObj) => {
              return (
                <option key={typeObj.id} value={typeObj.id}>
                  {typeObj.type}
                </option>
              )
            })}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <div>Price:</div>
          <select name="foodPriceId"
           value={food.foodPriceId}
           onChange={(event) => {
            const foodCopy = { ...food }
            foodCopy.foodPriceId= parseInt(event.target.value)
            setFood(foodCopy)
          }}
           >
            <option value={0}>Please select a price</option>
            {foodPrice.map((priceObj) => {
              return (
                <option key={priceObj.id} value={priceObj.id}>
                  {priceObj.price}
                </option>
              )
            })}
          </select>
        </div>
      </fieldset>
      <button className="btn" onClick={handleSave}>Update Food</button>
    </form>
  )
}
