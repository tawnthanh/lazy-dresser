import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllItems } from "../../store/items";
import OuterwearDisplay from "./OuterwearDisplay";
import SweaterDisplay from "./SweaterDisplay";
import TopDisplay from "./TopDisplay";
import BottomDisplay from "./BottomDisplay";
import DressDisplay from "./DressDisplay";
import ShoesDisplay from "./ShoesDisplay";
import { createOutfit } from "../../store/outfit";
import "./CreateOutfitForm.css";
import { randomOutfit } from "./randomize";

const CreateOutfitForm = ({ user }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const inventory = useSelector(state => state.items.inventory)

  const [isLoaded, setIsLoaded] = useState(false);
  const [outerwear, setOuterwear] = useState(false);
  const [sweater, setSweater] = useState(false);
  const [top, setTop] = useState(false);
  const [dress, setDress] = useState(false);
  const [bottom, setBottom] = useState(false);
  const [shoes, setShoes] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [outerwearPic, setOuterwearPic] = useState({})
  const [sweaterPic, setSweaterPic] = useState({});
  const [topPic, setTopPic] = useState({});
  const [dressPic, setDressPic] = useState({});
  const [bottomPic, setBottomPic] = useState({});
  const [shoesPic, setShoesPic] = useState({});
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    dispatch(getAllItems(user.id));
  }, [dispatch, user])

  useEffect(() => {
    if (inventory !== {}) setIsLoaded(true);
  }, [inventory])

  const handleSubmit = (e) => {
    e.preventDefault();
    const outfit = {
      "outerwear": outerwearPic,
      "dress": dressPic,
      "top": topPic,
      "bottom": bottomPic,
      "sweater": sweaterPic,
      "shoes": shoesPic,
      "userId": user.id,
      title,
      description
    }
    return dispatch(createOutfit(outfit))
      .then((res) => history.push("/outfits"))
      .catch(res => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
    // if(!errors.length) history.push("/outfits")
  }

  return (
    <>
      { isLoaded &&
        <div className="content create-outfit-form">
          <div className="create-outfit-inventory">
            <div>
              <h3 className="header" onClick={() => setOuterwear(!outerwear)}>Outerwear</h3>
              {!!outerwear &&
                <OuterwearDisplay inventory={inventory} setOuterwearPic={setOuterwearPic} />
              }
            </div>
            <div>
              <h3 className="header" onClick={() => setSweater(!sweater)}>Sweaters/Sweatshirts</h3>
              {!!sweater &&
                <SweaterDisplay inventory={inventory} setSweaterPic={setSweaterPic} />
              }
            </div>
            <div>
              <h3 className="header" onClick={() => setTop(!top)}>Tops</h3>
              {!!top &&
                <TopDisplay inventory={inventory} setTopPic={setTopPic} />
              }
            </div>
            <div>
              <h3 className="header" onClick={() => setDress(!dress)}>Dresses</h3>
              {!!dress &&
                <DressDisplay inventory={inventory} setDressPic={setDressPic} />
              }
            </div>
            <div>
              <h3 className="header" onClick={() => setBottom(!bottom)}>Bottoms</h3>
              {!!bottom &&
                <BottomDisplay inventory={inventory} setBottomPic={setBottomPic} />
              }
            </div>
            <div>
              <h3 className="header" onClick={() => setShoes(!shoes)}>Shoes</h3>
              {!!shoes &&
                <ShoesDisplay inventory={inventory} setShoesPic={setShoesPic} />
              }
            </div>
          </div>
          <div className="outfit-divider">Outfit</div>
          <div className="outfit-chosen">
            {outerwearPic.imgUrl &&
              <div className="chosen-outerwear">
                <img src={outerwearPic.imgUrl} alt="outerwear" />
                <i className="fas fa-minus-square fa-lg" onClick={() => setOuterwearPic({})}></i>
              </div>
            }
            {dressPic.imgUrl &&
              <div className="chosen-dress">
                <img src={dressPic.imgUrl} alt="dress" />
                <i className="fas fa-minus-square fa-lg" onClick={() => setDressPic({})}></i>
              </div>
            }
            {sweaterPic.imgUrl &&
              <div className="chosen-sweater">
                <img src={sweaterPic.imgUrl} alt="sweater" />
                <i className="fas fa-minus-square fa-lg" onClick={() => setSweaterPic({})}></i>
              </div>
            }
            {topPic.imgUrl &&
              <div className="chosen-top">
                <img src={topPic.imgUrl} alt="top" />
                <i className="fas fa-minus-square fa-lg" onClick={() => setTopPic({})}></i>
              </div>
            }
            {bottomPic.imgUrl &&
              <div className="chosen-bottom">
                <img src={bottomPic.imgUrl} alt="bottom" />
                <i className="fas fa-minus-square fa-lg" onClick={() => setBottomPic({})}></i>
              </div>
            }
            {shoesPic.imgUrl &&
              <div className="chosen-shoes">
                <img src={shoesPic.imgUrl} alt="shoes" />
                <i className="fas fa-minus-square fa-lg" onClick={() => setShoesPic("")}></i>
              </div>
            }

          </div>
          <form className="new-outfit-form" onSubmit={handleSubmit}>
            <label className="add-item-title outfit">
              <input
                type="text"
                value={title}
                // required={true}
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label className="add-item-description outfit">
              <textarea
                value={description}
                placeholder="Details about this outfit (optional)"
                onChange={e => setDescription(e.target.value)} />
            </label>
            {errors &&
              errors.map((err, idx) => (
                <p key={idx}>{err}</p>
              ))
            }
            <button className="create-item-button" type="submit">Create Outfit</button>
          </form>
        <button className="create-item-button random-button"
          onClick={() => randomOutfit(inventory, setOuterwearPic, setSweaterPic, setTopPic, setDressPic, setBottomPic, setShoesPic)}>
          Random Outfit
        </button>
        </div>
      }
    </>
  )
};

export default CreateOutfitForm;
