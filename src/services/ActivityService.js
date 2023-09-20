export const getActivity = () => {
  return fetch(`http://localhost:8088/activities`).then((res) => res.json())
}

export const postActivity = (activity) => {
  return fetch(`http://localhost:8088/activities`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(activity),
  })
}

export const getActivityById = (id) => {
  return fetch(
    `http://localhost:8088/activities/${id}?_expand=activityPrice&_expand=activityType`
  ).then((res) => res.json())
}

export const editActivityIdea = (activity) => {
  return fetch(`http://localhost:8088/activities/${activity.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(activity),
  })
}

export const saveActivity = (savedActivity) => {
  return fetch(`http://localhost:8088/savedActivities`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(savedActivity),
  })
}