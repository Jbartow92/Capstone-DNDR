import { useParams, useNavigate } from "react-router-dom"
import { deleteActivity, getActivityById } from "../../services/ActivityService"

import { useEffect, useState } from "react"
import "./activity.css"


export const ActivityDetails = ({currentUser}) => {
  const [activity, setActivity] = useState({})

  const { ActivityId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getActivityById(ActivityId).then((activityObj) => {
      setActivity(activityObj)
    })
  }, [ActivityId])

  const handleDelete = (event) => {
    

    deleteActivity(activity.id).then(() => {
      navigate(-1)
    })
  };

  const isOwner = currentUser.id === activity.userId;

  return (
    <div className="activity-detail-container">
      <h3 className="activity-detail-name">{activity.activityName}</h3>
      <img src={activity.imageUrl} alt={activity.activityName} className="activity-img" />
      <div className="activity-details">Activity Type: {activity.activityType?.type}</div>
      <div className="activity-details">Activity Cost: {activity.activityPrice?.price}</div>
      {/* Conditionally render the Edit and Delete buttons */}
      {isOwner && (
        <>
          <button
            className="button"
            onClick={() => {
              navigate(`/activity/${activity.id}/edit`);
            }}
          >
            Edit
          </button>
          <button className="button" onClick={handleDelete}>
            Delete
          </button>
        </>
      )}
    </div>
  );
};