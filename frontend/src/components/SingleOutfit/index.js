import { useState } from "react";
import "./SingleOutfit.css";
import { useDispatch } from "react-redux";
import { deleteOutfit } from "../../store/outfit";

const SingleOutfit = ({ outfit }) => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState(false);
  const [areYouSure, setAreYouSure] = useState(false);

  const deleteSingleOutfit = () => {
    dispatch(deleteOutfit(outfit));

  }
  return (
    <>
        <div key={outfit.id} className="outfit-list">
          <i className="fas fa-minus-square fa-lg" onClick={() => setAreYouSure(!areYouSure)}></i>
          { areYouSure &&
            <div className="clarification">
              Delete outfit?
              <button onClick={deleteSingleOutfit}>Yes</button>
              <button onClick={()=>setAreYouSure(false)}>No</button>
            </div>
          }
          <h3 className="oufit-title">{outfit.title}</h3>
          {outfit.description ? <p className="outfit-description">{outfit.description}</p> : ""}
          <div className="list">
            {outfit.ClothingItems.map(item => (
              <div key={item.id} className="item-container">
                <img src={item.imgUrl} alt={item.title}
                  className="item"
                  onClick={()=>setDetails(!details)} />
                {details &&
                  <div className="inv-item-details">
                    <div title="Click for details">
                      <p><b>Title: </b>{item.title}</p>

                      <p><b>Color: </b>{`${item.primaryColor}, ${item.secondaryColor}`}</p>
                      <p><b>Fit: </b>{item.Fit.type}</p>

                      <p><b>Occasion: </b>{item.Occasion.type}</p>

                      <p><b>Description: </b>{item.description ? item.description : "none"}</p>
                    </div>
                  </div>
                }
              </div>
            ))}
          </div>
        </div>
    </>
  )
}

export default SingleOutfit;
