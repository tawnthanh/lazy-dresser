import { useState } from "react";
import "./SingleOutfit.css";

const SingleOutfit = ({ outfits }) => {
  const [details, setDetails] = useState(false);

  return (
    <>
      { Object.values(outfits).map(outfit => (
        <div key={outfit.id} className="outfit-list">
          <h3>{outfit.title}</h3>
          {outfit.description ? <p>{outfit.description}</p> : ""}
          <div className="list">
            {outfit.ClothingItems.map(item => (
              <div className="item-container">
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

      ))}
    </>
  )
}

export default SingleOutfit;
