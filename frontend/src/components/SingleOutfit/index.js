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
                      <b>Title:</b> {item.title}
                      <br></br>
                      <b>Color:</b> {`${item.primaryColor}, ${item.secondaryColor}`}
                      <br></br>
                      <b>Fit:</b> {item.Fit.type}
                      <br></br>
                      <b>Occasion:</b> {item.Occasion.type}
                      <br></br>
                      <b>Description:</b> {item.description ? item.description : "none"}
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
