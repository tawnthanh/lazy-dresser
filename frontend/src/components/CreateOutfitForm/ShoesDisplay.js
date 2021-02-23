import { useState } from "react";

const ShoesDisplay = ({ inventory, setShoesPic }) => {
  const [shoeDetail, setShoeDetail] = useState(false);


  const openShoeDetails = () => {
    if (shoeDetail) setShoeDetail(!shoeDetail);
    setShoeDetail(!shoeDetail);
  };

  return (
    <div className="list">
      {!!inventory && inventory.map(item => {
        if (item.itemTypeId === 6) {
            return(
              <div key={item.title} className="item-container">
                <div className="item-pic">
                  <img src={item.imgUrl} alt={item.title}
                    className="item"
                    onClick={openShoeDetails} />
                  <i className="add-item-plus-outfit fas fa-plus fa-md" onClick={() => setShoesPic(item)}></i>
                </div>
                {shoeDetail &&
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

export default ShoesDisplay;
