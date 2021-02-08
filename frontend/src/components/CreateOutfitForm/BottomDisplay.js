import { useState } from "react";

const BottomDisplay = ({ inventory }) => {
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
              <div className="item-container">
                <img src={item.imgUrl} alt={item.title}
                  className="item"
                  onClick={openBottomDetails} />
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
