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
  const [outerwearPic, setOuterwearPic] = useState("")
  const [sweaterPic, setSweaterPic] = useState("");
  const [topPic, setTopPic] = useState("");
  const [dressPic, setDressPic] = useState("");
  const [bottomPic, setBottomPic] = useState("");
  const [shoesPic, setShoesPic] = useState("");

  useEffect(() => {
    dispatch(getAllItems(user.id));
  }, [dispatch, user])


  const handleShoes = (item) => {
    setShoesPic(item.imgUrl);
  };

  return (
    <div className="content create-outfit-form">
      <div className="create-outfit-inventory">
        <div>
          <h3 className="header" onClick={() => setOuterwear(!outerwear)}>Outerwear</h3>
          { outerwear &&
            <OuterwearDisplay inventory={inventory} handleOuterwear={(item) =>setOuterwearPic(item.imgUrl)}/>
            }
        </div>
        <div>
          <h3 className="header" onClick={() => setSweater(!sweater)}>Sweaters/Sweatshirts</h3>
          {sweater &&
            <SweaterDisplay inventory={inventory} handleSweater={(item) =>setSweaterPic(item.imgUrl)}/>
          }
        </div>
        <div>
          <h3 className="header" onClick={() => setTop(!top)}>Tops</h3>
          {top &&
            <TopDisplay inventory={inventory} handleTop={(item) =>setTopPic(item.imgUrl)} />
          }
        </div>
        <div>
        <h3 className="header" onClick={() => setDress(!dress)}>Dresses</h3>
          {dress &&
            <DressDisplay inventory={inventory} handleDress={(item) => setDressPic(item.imgUrl)}/>
          }
        </div>
        <div>
          <h3 className="header" onClick={() => setBottom(!bottom)}>Bottoms</h3>
          {bottom &&
            <BottomDisplay inventory={inventory} handleBottom={(item) => setBottomPic(item.imgUrl)}/>
          }
        </div>
        <div>
          <h3 className="header" onClick={() => setShoes(!shoes)}>Shoes</h3>
          {shoes &&
            <ShoesDisplay inventory={inventory} handleShoes={(item) => setShoesPic(item.imgUrl)} />
          }
        </div>
      </div>
      <div className="outfit-divider">Outfit</div>
      <div className="outfit-chosen">
        {outerwearPic &&
          <div className="chosen-outerwear">
            <img src={outerwearPic} alt="outerwear" />
            <i className="fas fa-minus-square fa-lg" onClick={()=>setOuterwearPic("")}></i>
          </div>
        }
        {dressPic &&
          <div className="chosen-dress">
            <img src={dressPic} alt="dress" />
            <i className="fas fa-minus-square fa-lg" onClick={()=>setDressPic("")}></i>
          </div>
        }
        {sweaterPic &&
          <div className="chosen-sweater">
            <img src={sweaterPic} alt="sweater" />
            <i className="fas fa-minus-square fa-lg" onClick={()=>setSweaterPic("")}></i>
          </div>
        }
        {topPic &&
          <div className="chosen-top">
            <img src={topPic} alt="top" />
            <i className="fas fa-minus-square fa-lg" onClick={()=>setTopPic("")}></i>
          </div>
        }
        {bottomPic &&
          <div className="chosen-bottom">
            <img src={bottomPic} alt="bottom" />
            <i className="fas fa-minus-square fa-lg" onClick={()=>setBottomPic("")}></i>
          </div>
        }
        {shoesPic &&
          <div className="chosen-shoes">
            <img src={shoesPic} alt="shoes" />
            <i className="fas fa-minus-square fa-lg" onClick={()=>setShoesPic("")}></i>
          </div>
        }

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
