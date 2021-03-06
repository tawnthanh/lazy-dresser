import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ItemList.css";
import { getAllItems, deleteSingleItem } from "../../store/items";

const ItemList = ({ user }) => {
  const dispatch = useDispatch();
  const inventory = useSelector(state => state.items.inventory)

  const [isLoaded, setIsLoaded] = useState(false)
  const [outerwearDetail, setOuterwearDetail] = useState(false);
  const [sweaterDetail, setSweaterDetail] = useState(false);
  const [topDetail, setTopDetail] = useState(false);
  const [dressDetail, setDressDetail] = useState(false);
  const [bottomDetail, setBottomDetail] = useState(false);
  const [shoeDetail, setShoeDetail] = useState(false);

  useEffect(() => {
    dispatch(getAllItems(user.id));
  }, [dispatch, user])

  useEffect(() => {
    if(inventory) setIsLoaded(true)
  }, [inventory])
  const openOuterwearDetail = () => {
    if (outerwearDetail) setOuterwearDetail(!outerwearDetail);
    setOuterwearDetail(!outerwearDetail);
  };
  const openTopDetails = () => {
    if (topDetail) setTopDetail(!topDetail);
    setTopDetail(!topDetail);
  };
  const openSweaterDetails = () => {
    if (sweaterDetail) setSweaterDetail(!sweaterDetail);
    setSweaterDetail(!sweaterDetail);
  };
  const openDressDetails = () => {
    if (dressDetail) setDressDetail(!dressDetail);
    setDressDetail(!dressDetail);
  };
  const openBottomDetails = () => {
    if (bottomDetail) setBottomDetail(!bottomDetail);
    setBottomDetail(!bottomDetail);
  };
  const openShoeDetails = () => {
    if (shoeDetail) setShoeDetail(!shoeDetail);
    setShoeDetail(!shoeDetail);
  };

  const deleteItem = (item) => {
    dispatch(deleteSingleItem(item));
  };


  return (
    <>
      {isLoaded &&
        <div className="content item-list">
          <div className={"outerwear-list"}>
            <h3 className="header">Outerwear</h3>
            <div className="list">
            {!!inventory && inventory.map(item => {
              if (item.itemTypeId === 1) {
                return(
                  <div key={item.id} className="item-container">
                    <img src={item.imgUrl} alt={item.title}
                      className="item"
                      onClick={openOuterwearDetail} />
                    {outerwearDetail &&
                      <div className="inv-item-details">
                        <div title="Click for details">
                          <p><b>Title: </b>{item.title}</p>
                          <p><b>Color: </b>{`${item.primaryColor}, ${item.secondaryColor}`}</p>

                          <p><b>Fit: </b>{item.Fit.type}</p>

                          <p><b>Occasion: </b>{item.Occasion.type}</p>

                          <p><b>Description: </b>{item.description ? item.description : "none"}</p>
                        </div>
                        <div className="footer">
                          <a href={`/item/${item.id}/edit`} title="Edit Item">
                            <i className="fas fa-cog fa-md"></i>
                          </a>
                          <div className="item-delete" onClick={()=>deleteItem(item)}>
                            <i className="fas fa-trash-alt fa-md"></i>
                          </div>
                        </div>
                      </div>
                    }
                  </div>
                )
              }
              return " "
          })}
          </div>
        </div>
          <div className={"sweater-list"}>
            <h3 className="header">Sweaters/Sweatshirts</h3>
            <div className="list">
              {!!inventory && inventory.map(item => {
                if (item.itemTypeId === 2) {
                  return(
                    <div key={item.id} className="item-container">
                      <img src={item.imgUrl} alt={item.title}
                        className="item"
                        onClick={openSweaterDetails} />
                      {sweaterDetail &&
                        <div className="inv-item-details">
                          <div title="Click for details">
                            <p><b>Title:</b> {item.title}</p>

                            <p><b>Color: </b>{`${item.primaryColor}, ${item.secondaryColor}`}</p>
                            <p><b>Fit: </b>{item.Fit.type}</p>

                            <p><b>Occasion: </b>{item.Occasion.type}</p>

                            <p><b>Description: </b>{item.description ? item.description : "none"}</p>
                          </div>
                          <div className="footer">
                            <a href={`/item/${item.id}/edit`} title="Edit Item">
                              <i className="fas fa-cog fa-md"></i>
                            </a>
                            <div className="item-delete" onClick={()=>deleteItem(item)}>
                              <i className="fas fa-trash-alt fa-md"></i>
                            </div>
                          </div>
                        </div>
                      }
                    </div>
                  )
                }
                  return " "
              })}
            </div>
          </div>
          <div className={"top-list"}>
            <h3 className="header">Tops</h3>
            <div className="list">
              {!!inventory && inventory.map(item => {
                if (item.itemTypeId === 4) {
                  return(
                    <div key={item.id} className="item-container">
                      <img src={item.imgUrl} alt={item.title}
                        className="item"
                        onClick={openTopDetails} />
                      {topDetail &&
                        <div className="inv-item-details">
                          <div title="Click for details">
                            <p><b>Title: </b>{item.title}</p>

                            <p><b>Color: </b>{`${item.primaryColor}, ${item.secondaryColor}`}</p>
                            <p><b>Fit: </b>{item.Fit.type}</p>

                            <p><b>Occasion: </b>{item.Occasion.type}</p>

                            <p><b>Description: </b>{item.description ? item.description : "none"}</p>
                          </div>
                          <div className="footer">
                            <a href={`/item/${item.id}/edit`} title="Edit Item">
                              <i className="fas fa-cog fa-md"></i>
                            </a>
                            <div className="item-delete" onClick={()=>deleteItem(item)}>
                              <i className="fas fa-trash-alt fa-md"></i>
                            </div>
                          </div>
                        </div>
                      }
                    </div>
                  )
                }
                return " "

              })}
            </div>
          </div>
          <div className={"dress-list"}>
            <h3 className="header">Dresses</h3>
            <div className="list">
            {!!inventory && inventory.map(item => {
              if (item.itemTypeId === 3) {
                return(
                  <div key={item.id} className="item-container">
                    <img src={item.imgUrl} alt={item.title}
                      className="item"
                      onClick={openDressDetails} />
                    {dressDetail &&
                      <div className="inv-item-details">
                        <div title="Click for details">
                          <p><b>Title: </b>{item.title}</p>

                          <p><b>Color: </b>{`${item.primaryColor}, ${item.secondaryColor}`}</p>
                          <p><b>Fit: </b>{item.Fit.type}</p>

                          <p><b>Occasion: </b>{item.Occasion.type}</p>

                          <p><b>Description: </b>{item.description ? item.description : "none"}</p>
                        </div>
                        <div className="footer">
                          <a href={`/item/${item.id}/edit`} title="Edit Item">
                            <i className="fas fa-cog fa-md"></i>
                          </a>
                          <div className="item-delete" onClick={()=>deleteItem(item)}>
                            <i className="fas fa-trash-alt fa-md"></i>
                          </div>
                        </div>
                      </div>
                    }
                  </div>
                )
              }
              return " "
            })}
            </div>
          </div>
          <div className={"bottom-list"}>
            <h3 className="header">Bottoms</h3>
            <div className="list">
              {!!inventory && inventory.map(item => {
                if (item.itemTypeId === 5) {
                  return(
                    <div key={item.id} className="item-container">
                      <img src={item.imgUrl} alt={item.title}
                        className="item"
                        onClick={openBottomDetails} />
                      {bottomDetail &&
                        <div className="inv-item-details">
                          <div title="Click for details">
                            <p><b>Title: </b>{item.title}</p>

                            <p><b>Color: </b>{`${item.primaryColor}, ${item.secondaryColor}`}</p>
                            <p><b>Fit: </b>{item.Fit.type}</p>

                            <p><b>Occasion: </b>{item.Occasion.type}</p>

                            <p><b>Description: </b>{item.description ? item.description : "none"}</p>
                          </div>
                          <div className="footer">
                            <a href={`/item/${item.id}/edit`} title="Edit Item">
                              <i className="fas fa-cog fa-md"></i>
                            </a>
                            <div className="item-delete" onClick={()=>deleteItem(item)}>
                              <i className="fas fa-trash-alt fa-md"></i>
                            </div>
                          </div>
                        </div>
                      }
                    </div>
                  )
                }
                return " "
              })}
            </div>
          </div>
          <div className={"shoe-list"}>
        <h3 className="header">Shoes</h3>
        <div className="list">
          {!!inventory && inventory.map(item => {
            if (item.itemTypeId === 6) {
              return(
                <div key={item.id} className="item-container">
                <img src={item.imgUrl} alt={item.title}
                  className="item"
                  onClick={openShoeDetails} />
                {shoeDetail &&
                  <div className="inv-item-details">
                    <div title="Click for details">
                      <p><b>Title: </b>{item.title}</p>

                      <p><b>Color: </b>{`${item.primaryColor}, ${item.secondaryColor}`}</p>
                      <p><b>Fit: </b>{item.Fit.type}</p>

                      <p><b>Occasion: </b>{item.Occasion.type}</p>

                      <p><b>Description: </b>{item.description ? item.description : "none"}</p>
                    </div>
                    <div className="footer">
                      <a href={`/item/${item.id}/edit`} title="Edit Item">
                        <i className="fas fa-cog fa-md"></i>
                      </a>
                      <div className="item-delete" onClick={()=>deleteItem(item)}>
                        <i className="fas fa-trash-alt fa-md"></i>
                      </div>
                    </div>
                  </div>
                }
                </div>
              )
            }
            return " "
          })}
        </div>
      </div>
        </div>
      }
    </>
  )
}

export default ItemList;
