import { useEffect, useState } from "react"
import { getActivity, saveActivity} from "/home/josh/workspace/date-night-done-right/src/services/ActivityService.js"
import { useNavigate } from "react-router-dom"
import "./activity.css"


export const ActivityList = ({currentUser}) => {
  const [activities, setActivities] = useState([])

  const navigate = useNavigate()

  const getAndSetActivities = () => {
    getActivity().then((activitiesArray) => {
      setActivities(activitiesArray)
    })
  }

  useEffect(() => {
    getAndSetActivities()
    
  }, [])

  const handleSave = () => {
   

    const newSavedActivity = {
      activityId: activities.id

    }

    saveActivity(newSavedActivity).then(() => {
      getAndSetActivities()
    })
  };

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
        <div>
          <h3>Click on the images to see details about our ideas</h3>
        </div>
        <div className="activity-container">
        {activities.map((activity) => {
            return (
                <div key={activity.id} className="activity-card">
                <img
                src={activity.imageUrl}
                alt={activity.activityName}
                currentUser={currentUser}
                className="activity-img"
                onClick={() => {
                    navigate(`/activity/${activity.id}`)
                }}
                ></img>
                <div className="activity-name">{activity.activityName}</div>
                <button className="btn" onClick={ handleSave }>Save Idea</button>
            </div>
            )
        })}
        </div>
    </>
    
  )
}