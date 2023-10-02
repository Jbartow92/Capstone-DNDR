import { useEffect, useState } from "react"
import "./form.css"

import { useNavigate } from "react-router-dom"


import { getActivityType } from "../../services/typeService"
import { getActivityPrice } from "../../services/priceService"
import { postActivity } from "../../services/ActivityService"

export const NewActivityForm = ({currentUser}) => {
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

    getActivityPrice().then((priceArray) => {
      setActivityPrices(priceArray)
    })
  }, []) // on initial render only

  const handleInputChange = (event) => {
    const activityCopy = { ...newActivity }
    activityCopy[event.target.name] = event.target.value
    setNewActivity(activityCopy)
  }

  const handleSave = (event) => {
    event.preventDefault()

    const newActivityIdea = {
      activityName: newActivity.activityName,
      imageUrl: newActivity.imageUrl,
      activityTypeId: parseInt(newActivity.activityTypeId),
      activityPriceId: parseInt(newActivity.activityPriceId),
      userId: currentUser.id
    }

    postActivity(newActivityIdea).then(() => {
      navigate("/activity")
    })
  }

  return (
    <form className="border">
      <h2 className="decoration-form-title">ADD An Activity IDEA</h2>
      <fieldset>
        <div className="box-input">
          <label htmlFor="name">Activity Name:</label>
          <input
            value={newActivity.activityName}
            name="activityName"
            type="text"
            className="input"
            placeholder="activity name"
            onChange={handleInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="box-input">
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            value={newActivity.imageUrl}
            name="imageUrl"
            type="text"
            className="input"
            placeholder="https://www.example.com"
            onChange={handleInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="box-input">
          <div>Activity Type:</div>
          <select
          className="input"
            name="activityTypeId"
            onChange={handleInputChange}
            value={newActivity.id}
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
        <div className="box-input">
          <div>Activity Price:</div>
          <select
          className="input"
            name="activityPriceId"
            onChange={handleInputChange}
            value={newActivity.id}
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
      <button className="button" onClick={handleSave}>
        Add Activity Idea
      </button>
    </form>
  )
}