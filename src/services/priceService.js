export const getFoodPrice = () => {
    return fetch(`http://localhost:8088/foodPrices`).then((res) => res.json())
  }

  export const getActivityPrice = () => {
    return fetch(`http://localhost:8088/activityPrices`).then((res) => res.json())
  }