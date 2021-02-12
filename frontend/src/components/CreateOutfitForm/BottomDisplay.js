import { useState } from "react";

const BottomDisplay = ({ inventory, setBottomPic }) => {
  const [bottomDetail, setBottomDetail] = useState(false);

  const openBottomDetails = () => {
    if (bottomDetail) setBottomDetail(!bottomDetail);
    setBottomDetail(!bottomDetail);
  };

  return (
      <div className="list">
        {!!inventory && inventory.map(item => {
          if (item.itemTypeId === 5) {
            return(
              <div key={item.title} className="item-container">
                <div className="item-pic">
                  <img src={item.imgUrl} alt={item.title}
                    className="item"
                    onClick={openBottomDetails} />
                  <i className="add-item-plus-outfit fas fa-plus fa-md" onClick={() => setBottomPic(item)}></i>
                </div>
                {bottomDetail &&
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

export default BottomDisplay;
