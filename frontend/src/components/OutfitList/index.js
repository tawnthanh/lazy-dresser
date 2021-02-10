import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllOutfits } from "../../store/outfit";
import SingleOutfit from "../SingleOutfit";
import "./OutfitList.css";

const OutfitList = ({ user }) => {
  const dispatch = useDispatch();
  const outfits = useSelector(state => state.outfits);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(getAllOutfits(user.id));
    setIsLoaded(true);
  }, [dispatch, user]);

  return (
    <>
      { isLoaded &&
        <div className="content outfit-inventory">
          <h1 onClick={()=>console.log(outfits)}>Outfits</h1>
          { !!outfits && Object.values(outfits).map(outfit => (
            <SingleOutfit outfit={outfit} />
          ))}

        </div>
      }
    </>
  )
};

export default OutfitList;
