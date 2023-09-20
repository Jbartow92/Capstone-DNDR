import { useParams, useNavigate } from "react-router-dom"
import { getActivityById } from "../../services/ActivityService"

import { useEffect, useState } from "react"
import "./activity.css"


export const ActivityDetails = () => {
  const [activity, setActivity] = useState({})

  const { ActivityId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getActivityById(ActivityId).then((activityObj) => {
      setActivity(activityObj)
    })
  }, [ActivityId])
  console.log(activity)

  return (
    <div className="activity-detail-container">
      <h3 className="activity-detail-name">{activity.activityName}</h3>
      <img src={activity.imageUrl} alt={activity.activityName} className="activity-img" />
      <div className="activity-details">Activity Type: {activity.activityType?.type}</div>
      <div className="activity-details">Activity Cost: {activity.activityPrice?.price}</div>
      <button
      className="btn"
        onClick={() => {
          navigate(`/activity/${activity.id}/edit`)
        }}
      >
        Edit
      </button>
    </div>
  )
}