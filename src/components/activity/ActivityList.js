import { useEffect, useState } from "react"
import { getActivity} from "/home/josh/workspace/date-night-done-right/src/services/ActivityService.js"
import { useNavigate } from "react-router-dom"
import "./activity.css"


export const ActivityList = () => {
  const [activities, setActivities] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    getActivity().then((activitiesArray) => {
      setActivities(activitiesArray)
    })
  }, [])

  return (
    <>
        <div>
            <h1>Here are some activity ideas!</h1>
        </div>
        <div>
          <button className="new-idea-btn" onClick={() => {
          navigate(`/activity/newActivity`)
        }}>Create new activity idea</button>
        </div>
        <div className="activity-container">
        {activities.map((activity) => {
            return (
                <div key={activity.ActivityId} className="activity-card">
                <img
                src={activity.imageUrl}
                alt={activity.activityName}
                className="activity-img"
                onClick={() => {
                    navigate(`/items/${activity.id}`)
                }}
                ></img>
                <div className="activity-name">{activity.activityName}</div>
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