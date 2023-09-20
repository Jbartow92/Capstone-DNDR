import { useEffect, useState } from "react"


import { useNavigate } from "react-router-dom"
import { getFoodPrice } from "../../services/priceService"
import { getFoodType } from "../../services/typeService"
import { postFood } from "../../services/FoodService"

export const NewFoodForm = () => {
  const [foodTypes, setFoodTypes] = useState([])
  const [foodPrices, setFoodPrices] = useState([])
  const [newFood, setNewFood] = useState({
    foodName: "",
    imageUrl: "",
    foodTypeId: 0,
    foodPriceId: 0,
  })

  const navigate = useNavigate() // returns a function that allows us to "navigate" to a given url

  useEffect(() => {
    getFoodType().then((typeArray) => {
      setFoodTypes(typeArray)
    })

    getFoodPrice().then((priceArray) => {
      setFoodPrices(priceArray)
    })
  }, []) // on initial render only

  const handleInputChange = (event) => {
    const foodCopy = { ...newFood }
    foodCopy[event.target.name] = event.target.value
    setNewFood(foodCopy)
  }

  const handleSave = (event) => {
    event.preventDefault()

    const newFoodIdea = {
      foodName: newFood.foodName,
      imageUrl: newFood.imageUrl,
      foodTypeId: parseInt(newFood.foodTypeId),
      foodPriceId: parseInt(newFood.foodPriceId),
    }

    postFood(newFoodIdea).then(() => {
      navigate("/food")
    })
  }

  return (
    <form className="decoration-form">
      <h2 className="decoration-form-title">ADD A FOOD IDEA</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Food Name:</label>
          <input
            value={newFood.foodName}
            name="foodName"
            type="text"
            className="form-control"
            placeholder="food name"
            onChange={handleInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            value={newFood.imageUrl}
            name="imageUrl"
            type="text"
            className="form-control"
            placeholder="https://www.example.com"
            onChange={handleInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <div>Food Type:</div>
          <select
            name="foodTypeId"
            onChange={handleInputChange}
            value={newFood.foodTypeId}
          >
            <option value={0}>Please select a food type</option>
            {foodTypes.map((typeObj) => {
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
          <div>Food Price:</div>
          <select
            name="foodPriceId"
            onChange={handleInputChange}
            value={newFood.foodPriceId}
          >
            <option value={0}>Please select a food price</option>
            {foodPrices.map((priceObj) => {
              return (
                <option key={priceObj.id} value={priceObj.id}>
                  {priceObj.price}
                </option>
              )
            })}
          </select>
        </div>
      </fieldset>
      <button className="btn" onClick={handleSave}>
        Add Food Idea
      </button>
    </form>
  )
}