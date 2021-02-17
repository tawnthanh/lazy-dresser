import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getSingleItem, deleteSingleItem } from "../../store/items";
import { updateItem } from "../../store/items";
import "./EditItem.css";

const ItemList = ({ user }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {itemId} = useParams();
  const items = useSelector(state => state.items);

  const [isLoaded, setIsLoaded] = useState(false)
  const [title, updateTitle] = useState("");
  const [fit, updateFit] = useState(0);
  const [occasion, updateOccasion] = useState(0)
  const [description, updateDescription] = useState("")

  useEffect(() => {
    dispatch(getSingleItem(itemId))
  }, [dispatch, itemId])

  useEffect(() => {
    if (items.item) {
      updateTitle(items.item.title);
      updateFit(items.item.fitId);
      updateOccasion(items.item.occasionId);
      updateDescription(items.item.description);
      setIsLoaded(true);
    }
  }, [items]);


  const deleteItem = (item) => {
    dispatch(deleteSingleItem(item));
    history.push("/items")
  }

  const updateSingleItem = (e) => {
    e.preventDefault();
    let item = {
      "id": items.item.id,
      title,
      "fitId": parseInt(fit),
      "occasionId": parseInt(occasion),
      description
    };

    return dispatch(updateItem(item))
            .then(res => history.push("/items"))
  }
  return (
    <div className="content">
      { isLoaded &&
        <>
          <div className="image-block">
            <img src={items.item.imgUrl} alt={items.item.title} style={{ width: "200px" }}/>
          </div>
          <div className="color-block">
            <div style={{ backgroundColor: items.item.primaryColor }}>{items.item.primaryColor}</div>
            <div style={{ backgroundColor: items.item.secondaryColor }}>{items.item.secondaryColor}</div>
        </div>
        <form className="update-item" onSubmit={updateSingleItem}>
          <input type="text"
            value={title}
            required={true}
            onChange={(e) => updateTitle(e.target.value)}>
          </input>
          <label>
            Fit Update
            <select name="fit-type" onChange={(e)=>updateFit(e.target.value)}>
              <option value={fit}>{items.item.Fit.type}</option>
              {!!items.fits &&
                items.fits.map((type) => {
                  return <option key={`${type[0]}-${type[1]}`} value={type[0]}>{type[1]}</option>
                })
              }
            </select>
          </label>
          <label>
            Occasion Update
             <select name="occasion-type" onChange={(e) => updateOccasion(e.target.value)}>
              <option value={occasion}>{items.item.Occasion.type}</option>
              {!!items.occasions &&
                items.occasions.map((type) => {
                  return <option key={`${type[0]}-${type[1]}`} value={type[0]}>{type[1]}</option>
                })
              }
             </select>
          </label>
          <label>Description</label>
          <textarea
            value={description}
            placeholder="Details about the item. (optional)"
            onChange={e => updateDescription(e.target.value)}
          />
          <button className="create-item-button" type="submit">Update</button>
        </form>
        <button className="create-item-button" onClick={()=>deleteItem(items.item)}>Delete</button>

        </>
      }
    </div>
  )
}

export default ItemList;
