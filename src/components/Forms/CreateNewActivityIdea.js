import { useEffect, useState } from "react"


import { useNavigate } from "react-router-dom"

import { postFood } from "../../services/FoodService"
import { getActivityType } from "../../services/typeService"
import { getactivityPrice } from "../../services/priceService"

export const NewActivityForm = () => {
  const [activityTypes, setActivityTypes] = useState([])
  const [activityPrices, setActivityPrices] = useState([])
  const [newActivity, setNewActivity] = useState({
    activityName: "",
    imageUrl: "",
    activityTypeId: 0,
    activityPriceId: 0,
  })

  const navigate = useNavigate() // returns a function that allows us to "navigate" to a given url

  useEffect(() => {
    getActivityType().then((typeArray) => {
      setActivityTypes(typeArray)
    })

    getactivityPrice().then((priceArray) => {
      setActivityPrices(priceArray)
    })
  }, []) // on initial render only

  const handleInputChange = (event) => {
    const activityCopy = { ...newActivity }
    activityCopy[event.target.name] = event.target.value
    setNewActivity(activityCopy)
  }

  const handleSave = (event) => {
    // event.preventDefault()

    const newActivityIdea = {
      activityName: newActivity.activityName,
      imageUrl: newActivity.imageUrl,
      activityTypeId: parseInt(newActivity.activityTypeId),
      activityPriceId: parseInt(newActivity.activityPriceId),
    }

    postFood(newActivityIdea).then(() => {
      navigate("/activity")
    })
  }

  return (
    <form className="decoration-form">
      <h2 className="decoration-form-title">ADD A Activity IDEA</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Activity Name:</label>
          <input
            value={newActivity.activityName}
            name="activityName"
            type="text"
            className="form-control"
            placeholder="activity name"
            onChange={handleInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            value={newActivity.imageUrl}
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
          <div>Activity Type:</div>
          <select
            name="activityTypeId"
            onChange={handleInputChange}
            value={newActivity.activityTypeId}
          >
            <option value={0}>Please select a Activity type</option>
            {activityTypes.map((typeObj) => {
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
          <div>Activirty Price:</div>
          <select
            name="activityPriceId"
            onChange={handleInputChange}
            value={newActivity.activityPriceId}
          >
            <option value={0}>Please select a activity price</option>
            {activityPrices.map((priceObj) => {
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