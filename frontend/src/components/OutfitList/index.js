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
  }, [dispatch, user]);

  useEffect(() => {
    console.log(Object.keys(outfits).length, Object.keys(outfits))
    if (Object.keys(outfits)[0] !== "outfit") setIsLoaded(true);
  }, [outfits]);


  return (
    <>
      { isLoaded &&
        <div className="content outfit-inventory">
          <h1>Outfits</h1>
          { !!outfits && Object.values(outfits).map(outfit => (
            <SingleOutfit key={outfit.id} outfit={outfit} />
          ))}

        </div>
      }
    </>
  )
};

export default OutfitList;
