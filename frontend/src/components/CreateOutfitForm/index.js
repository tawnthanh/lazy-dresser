import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllItems } from "../../store/items";
import OuterwearDisplay from "./OuterwearDisplay";
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

  useEffect(() => {
    dispatch(getAllItems(user.id));
  }, [dispatch, user])

  return (
    <div className="content">
      <div >
        <h3 className="header" onClick={() => setOuterwear(!outerwear)}>Outerwear</h3>
        { outerwear &&
          <OuterwearDisplay user={user} inventory={inventory} />
          }
      </div>
      <div>
        <h3 className="header">Sweaters/Sweatshirts</h3>
      </div>
      <div>Tops</div>
      <div>Dresses</div>
      <div>Bottoms</div>
      <div>Shoes</div>
    </div>
  )
};

export default CreateOutfitForm;
