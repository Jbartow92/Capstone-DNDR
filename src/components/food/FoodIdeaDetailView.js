import { useParams, useNavigate } from "react-router-dom"
import { deleteFood, getFoodById } from "../../services/FoodService"
import { useEffect, useState } from "react"
import "./food.css"


export const FoodDetails = ({currentUser}) => {
  const [food, setFood] = useState({})

  const { FoodId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getFoodById(FoodId).then((foodObj) => {
      setFood(foodObj)
    })
  }, [FoodId])


  const handleDelete = (event) => {
    

    deleteFood(food.id).then(() => {
      navigate(-1)
    })
  };

  const isOwner = currentUser.id === food.userId;

  return (
    <div className="detail-card">
      <div class="bg uwu"></div>
                <div class="bg"></div>
      <h3 className="">Item details for {food.foodName}s</h3>
      <img src={food.imageUrl} alt={food.foodName} className="detail-img" />
      <div className=""><h4>Food Type: {food.foodType?.type}</h4></div>
      <div className=""><h4>Food Cost: {food.foodPrice?.price}</h4></div>
      {/* Conditionally render the Edit and Delete buttons */}
      {isOwner && (
        <>
          <button
            className="button"
            onClick={() => {
              navigate(`/food/${food.id}/edit`);
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