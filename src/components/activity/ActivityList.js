import { useEffect, useState } from "react"
import { getActivity, postSavedActivity } from "/home/josh/workspace/date-night-done-right/src/services/ActivityService.js"
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

  const handleSave = (activityId) => (event) => {
    event.preventDefault()

    const savedFoodIdea = {
      activityId: activityId,
      userId: currentUser.id
      
    }

    postSavedActivity(savedFoodIdea).then(() => {
      navigate("/profile")
    })
  }

  return (
    <>
        <div>
            <h1>Here are some activity ideas!</h1>
        </div>
        <div>
          <button className="button" onClick={() => {
          navigate(`/activity/newActivity`)
        }}>Create new activity idea</button>
        </div>
        <div>
          <h3>Click on the images to see details about our ideas</h3>
        </div>
        <div className="content">
        {activities.map((activity) => {
            return (
                <div key={activity.id} className="card">
                <div class="bg uwu"></div>
                <div class="bg"></div>
                <img
                src={activity.imageUrl}
                alt={activity.activityName}
                
                className="img"
                onClick={() => {
                    navigate(`/activity/${activity.id}`)
                }}
                ></img>
                <div className="activity-name"><h4>{activity.activityName}</h4></div>
                <button className="button" onClick={ handleSave(activity.id) }>Save Idea</button>
            </div>
            )
        })}
        </div>
    </>
    
  )
}