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
                <img src={item.imgUrl} alt={item.title}
                  className="item"
                  onClick={openTopDetails} />
                <i className="add-item-plus-outfit fas fa-plus fa-md" onClick={() => setTopPic(item)}></i>
                {topDetail &&
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
            )
          }
          return " "

        })}
      </div>
  )
}

export default TopDisplay;
