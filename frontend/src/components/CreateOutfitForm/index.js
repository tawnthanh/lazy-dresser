import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllItems } from "../../store/items";
import OuterwearDisplay from "./OuterwearDisplay";
import SweaterDisplay from "./SweaterDisplay";
import TopDisplay from "./TopDisplay";
import BottomDisplay from "./BottomDisplay";
import DressDisplay from "./DressDisplay";
import ShoesDisplay from "./ShoesDisplay";
import "./CreateOutfitForm.css";

const CreateOutfitForm = ({ user }) => {
  const dispatch = useDispatch();
  const inventory = useSelector(state => state.items.inventory)

  const [outerwear, setOuterwear] = useState(false);
  const [sweater, setSweater] = useState(false);
  const [top, setTop] = useState(false);
  const [dress, setDress] = useState(false);
  const [bottom, setBottom] = useState(false);
  const [shoes, setShoes] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    dispatch(getAllItems(user.id));
  }, [dispatch, user])

  return (
    <div className="content create-outfit-form">
      <div className="white-block"></div>
      <div className="create-outfit-inventory">
        <div>
          <h3 className="header" onClick={() => setOuterwear(!outerwear)}>Outerwear</h3>
          { outerwear &&
            <OuterwearDisplay inventory={inventory} />
            }
        </div>
        <div>
          <h3 className="header" onClick={() => setSweater(!sweater)}>Sweaters/Sweatshirts</h3>
          {sweater &&
            <SweaterDisplay inventory={inventory} />
          }
        </div>
        <div>
          <h3 className="header" onClick={() => setTop(!top)}>Tops</h3>
          {top &&
            <TopDisplay inventory={inventory} />
          }
        </div>
        <div>
        <h3 className="header" onClick={() => setDress(!dress)}>Dresses</h3>
          {dress &&
            <DressDisplay inventory={inventory} />
          }
        </div>
        <div>
          <h3 className="header" onClick={() => setBottom(!bottom)}>Bottoms</h3>
          {bottom &&
            <BottomDisplay inventory={inventory} />
          }
        </div>
        <div>
          <h3 className="header" onClick={() => setShoes(!shoes)}>Shoes</h3>
          {shoes &&
            <ShoesDisplay inventory={inventory} />
          }
        </div>
      </div>
      <div className="outfit-divider">Outfit</div>
      <div className="outfit-chosen">
        <div className="chosen-outerwear">Outerwear</div>
        <div className="mid-section">
          <div className="chosen-sweater">Sweater/ Sweatshirt</div>
          <div className="chosen-top">Top</div>
          <div className="chosen-bottom">Bottom</div>
          <div className="chosen-shoes">Shoes</div>
        </div>
        <div className="chosen-dress">Dress</div>
      </div>
      <form className="new-outfit-form">
        <label className="add-item-title outfit">
          <input
            type="text"
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label className="add-item-description outfit">
          <textarea
            value={description}
            placeholder="Details about this outfit (optional)"
            onChange={e => setDescription(e.target.value)} />
        </label>
        <button className="create-item-button" type="submit">Create Outfit</button>
      </form>
    </div>
  )
};

export default CreateOutfitForm;
