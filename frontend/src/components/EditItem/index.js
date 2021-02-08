import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./EditItem.css";

const ItemList = ({ user }) => {
  const dispatch = useDispatch();
  const {itemId} = useParams();

  

  return (
    <div className="content item-list">
      <h1 onClick={() => console.log(itemId)}>Hi</h1>
    </div>
  )
}

export default ItemList;
