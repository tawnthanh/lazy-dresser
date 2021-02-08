import { useState } from "react";

const OuterwearDisplay = ({ inventory }) => {
  const [outerwearDetail, setOuterwearDetail] = useState(false);

  const openOuterwearDetail = () => {
    if (outerwearDetail) setOuterwearDetail(false);
    else setOuterwearDetail(true);
  };

  return (
    <div className="list">
        {!!inventory && inventory.map(item => {
          if (item.itemTypeId === 1) {
            return(
              <div className="item-container">
                <img src={item.imgUrl} alt={item.title}
                  key={item.title}
                  className="item"
                  onClick={openOuterwearDetail} />
                {outerwearDetail &&
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

export default OuterwearDisplay;