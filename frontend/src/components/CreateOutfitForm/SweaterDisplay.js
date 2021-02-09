import { useState } from "react";

const SweaterDisplay = ({ inventory, handleSweater }) => {
  const [sweaterDetail, setSweaterDetail] = useState(false);

  const openSweaterDetails = () => {
    if (sweaterDetail) setSweaterDetail(!sweaterDetail);
    setSweaterDetail(!sweaterDetail);
  };

  return (
      <div className="list">
          {!!inventory && inventory.map(item => {
            if (item.itemTypeId === 2) {
              return(
                <div key={item.title} className="item-container">
                  <img src={item.imgUrl} alt={item.title}
                    className="item"
                    onClick={openSweaterDetails} />
                  <i className="add-item-plus-outfit fas fa-plus fa-md" onClick={() => handleSweater(item)}></i>
                  {sweaterDetail &&
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

export default SweaterDisplay;
