import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getFoodType } from "../../services/typeService"
import { getFoodPrice } from "../../services/priceService"
import { editFood, getFoodById } from "../../services/FoodService"



export const EditFood = () => {
  const [food, setFood] = useState({
    id: "", // Add the appropriate default value for id
    foodName: "",
    imageUrl: "",
    foodTypeId: 0, // Use 0 as the initial value for type, or provide the default if necessary
    foodPriceId: 0, // Use 0 as the initial value for price, or provide the default if necessary
  });
  
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
    <form className="border">
      <h2 className="decoration-form-title">Edit Food</h2>
      <fieldset>
        <div className="box-input">
          <label htmlFor="foodName">Name:</label>
          <input
            name="foodName"
            value={food.foodName}
            type="text"
            className="input"
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
        <div className="box-input">
          <label htmlFor="imgUrl">Image URL:</label>
          <input
            name="imageUrl"
            value={food.imageUrl}
            type="text"
            className="input"
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
        <div className="box-input">
          <div>Type:</div>
          <select 
          className="input"
          name="foodTypeId" 
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
        <div className="box-input">
          <div>Price:</div>
          <select 
          className="input"
          name="foodPriceId"
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
      <button className="button" onClick={handleSave}>Update Food</button>
    </form>
  )
}
