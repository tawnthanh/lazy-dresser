import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllOutfits } from "../../store/outfit";


const OutfitList = ({ user }) => {
  const dispatch = useDispatch();
  const outfits = useSelector(state => state.outfits);

  useEffect(() => {
    dispatch(getAllOutfits(user.id));
  }, [dispatch, user]);

  return (
    <div className="content create-outfit-form">
      <h1 onClick={()=>console.log(outfits)}>Outfits</h1>

    </div>
  )
};

export default OutfitList;
