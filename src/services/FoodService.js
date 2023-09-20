export const getFood = () => {
  return fetch(`http://localhost:8088/foods`).then((res) => res.json())
}

  export const postFood = (food) => {
    return fetch(`http://localhost:8088/foods`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(food),
    })
  }

  export const getFoodById = (id) => {
    return fetch(
      `http://localhost:8088/foods/${id}?_expand=foodPrice&_expand=foodType`
    ).then((res) => res.json())
  }

  export const editFood= (food) => {
    return fetch(`http://localhost:8088/foods/${food.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(food),
    })
  }

  export const editFoodIdea = (food) => {
    return fetch(`http://localhost:8088/foods/${food.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(food),
    })
  }

  export const saveFood = (savedFood) => {
    return fetch(`http://localhost:8088/savedFoods`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(savedFood),
    })
  }

 export const deleteFood = (FoodId) => {
    
      return fetch(`http://localhost:8088/foods/${FoodId}`, { 
        method: 'DELETE' 
      });
      
    }
  