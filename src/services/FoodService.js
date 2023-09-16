export const getFood = () => {
  return fetch(`http://localhost:8088/food`).then((res) => res.json())
}

  export const postFood = (food) => {
    return fetch(`http://localhost:8088/food`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(food),
    })
  }

  export const getFoodById = () => {
    return fetch(
      `http://localhost:8088/food/?_expand=foodPrice&_expand=foodType`
    ).then((res) => res.json())
  }