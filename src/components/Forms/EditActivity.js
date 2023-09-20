import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getActivityType } from "../../services/typeService"
import { getActivityPrice } from "../../services/priceService"
import { editActivityIdea, getActivityById } from "../../services/ActivityService"



export const EditActivity = () => {
  const [activity, setActivity] = useState({})
  const [activityType, setActivityType] = useState([])
  const [activityPrice, setActivityPrice] = useState([])

  const { ActivityId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getActivityType().then((TypeArr) => {
      setActivityType(TypeArr)
    })

    getActivityPrice().then((priceArr) => {
      setActivityPrice(priceArr)
    })
  }, [])

  useEffect(() => {
    getActivityById(ActivityId).then((activityObj) => {
      setActivity(activityObj)
    })
  }, [ActivityId])

  const handleSave = (event) => {
    event.preventDefault()

    const updatedItem = {
      id: activity.id,
      activityName: activity.activityName,
      imageUrl: activity.imageUrl,
      activityTypeId: activity.activityTypeId,
      activityPriceId: activity.activityPriceId,
    }

    editActivityIdea(updatedItem).then(() => {
      navigate(`/activity/${ActivityId}`)
    })
  }

  return (
    <form className="decoration-form">
      <h2 className="decoration-form-title">Edit Activity</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="activityName">Name:</label>
          <input
            name="activityName"
            value={activity.activityName ? activity.activityName : ""}
            type="text"
            className="form-control"
            placeholder="activity name"
            onChange={(event) => {
              const activityCopy = { ...activity }
              activityCopy.activityName = event.target.value
              setActivity(activityCopy)
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="imgUrl">Image URL:</label>
          <input
            name="imageUrl"
            value={activity.imageUrl ? activity.imageUrl : ""}
            type="text"
            className="form-control"
            placeholder="https://www.example.com"
            onChange={(event) => {
              const activityCopy = { ...activity }
              activityCopy.imageUrl = event.target.value
              setActivity(activityCopy)
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <div>Type:</div>
          <select name="activityTypeId" 
          value={activity.activityTypeId}
          onChange={(event) => {
            const activityCopy = { ...activity }
            activityCopy.activityTypeId= parseInt(event.target.value)
            setActivity(activityCopy)
          }}
          >
            <option value={0}>Please select a type</option>
            {activityType.map((typeObj) => {
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
          <select name="activityPriceId" 
          value={activity.activityPriceId}
          onChange={(event) => {
            const activityCopy = { ...activity }
            activityCopy.activityPriceId = parseInt(event.target.value)
            setActivity(activityCopy)
          }}
          >
            <option value={0}>Please select a price</option>
            {activityPrice.map((priceObj) => {
              return (
                <option key={priceObj.id} value={priceObj.id}>
                  {priceObj.price}
                </option>
              )
            })}
          </select>
        </div>
      </fieldset>
      <button className="btn" onClick={handleSave}>Update Activity</button>
    </form>
  )
}
