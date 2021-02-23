import { useState } from "react";

const TopDisplay = ({ inventory, setTopPic }) => {
  const [topDetail, setTopDetail] = useState(false);

  const openTopDetails = () => {
    if (topDetail) setTopDetail(!topDetail);
    setTopDetail(!topDetail);
  };

  return (
      <div className="list">
        {!!inventory && inventory.map(item => {
          if (item.itemTypeId === 4) {
            return(
              <div key={item.title} className="item-container">
                <div className="item-pic">
                  <img src={item.imgUrl} alt={item.title}
                    className="item"
                    onClick={openTopDetails} />
                  <i className="add-item-plus-outfit fas fa-plus fa-md" onClick={() => setTopPic(item)}></i>
                </div>
                {topDetail &&
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

export default TopDisplay;
