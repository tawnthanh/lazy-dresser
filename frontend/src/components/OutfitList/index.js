import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllOutfits } from "../../store/outfit";
import SingleOutfit from "../SingleOutfit";
import "./OutfitList.css";

const OutfitList = ({ user }) => {
  const dispatch = useDispatch();
  const outfits = useSelector(state => state.outfits);

  useEffect(() => {
    dispatch(getAllOutfits(user.id));
  }, [dispatch, user]);

  return (
    <div className="content outfit-inventory">
      <h1 onClick={()=>console.log(outfits)}>Outfits</h1>
      { !!outfits &&
        <SingleOutfit outfits={outfits} />
      }
    </div>
  )
};

export default OutfitList;
