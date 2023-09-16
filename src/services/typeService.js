export const getFoodType = () => {
    return fetch(`http://localhost:8088/foodTypes`).then((res) => res.json())
  }

  export const getActivityType = () => {
    return fetch(`http://localhost:8088/activityTypes`).then((res) => res.json())
  }