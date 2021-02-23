import { useState } from "react";

const OuterwearDisplay = ({ inventory, setOuterwearPic }) => {
  const [outerwearDetail, setOuterwearDetail] = useState(false);

  const openOuterwearDetail = () => {
    if (outerwearDetail) setOuterwearDetail(false);
    else setOuterwearDetail(true);
  };

  return (
    <div className="list">
        {inventory.map(item => {
          if (item.itemTypeId === 1) {
            return(
              <div key={item.title} className="item-container">
                <div className="item-pic">
                  <img src={item.imgUrl} alt={item.title}
                    key={item.title}
                    className="item"
                    onClick={openOuterwearDetail} />
                  <i className="add-item-plus-outfit fas fa-plus fa-md" onClick={() => setOuterwearPic(item)}></i>
                </div>
                {outerwearDetail &&
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
            )
          }
          return " "
      })}
      </div>
  )
}

export default OuterwearDisplay;
