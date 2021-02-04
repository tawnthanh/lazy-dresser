import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import "./CreateItemForm.css";

const CreateItemForm = ({ user }) => {
  const [image, setImage] = useState(null);
  const [mainColor, setMainColor] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("");
  const [title, setTitle] = useState("");
  const [itemType, setItemType] = useState(0);
  const [fit, setFit] = useState(0);
  const [occassion, setOccasion] = useState(0);
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    console.log(user)
  }, [])

  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  return (
    <div className="content">
      <form className="add-item">
        <div className="image-upload">
          image
        </div>
        <label className="file-upload">
            <input type="file" onChange={updateFile} />
        </label>
        <div className="color-block">
          <div className="main-color-pulled"></div>
          <div className="other-color-1 other-colors"></div>
          <div className="other-color-2 other-colors"></div>
          <div className="other-color-3 other-colors"></div>
          <div className="other-color-4 other-colors"></div>
          <div className="other-color-5 other-colors"></div>
        </div>
        <label className="main-color-select">
          <select>
            <option value="hi">Main Color</option>
          </select>
        </label>
        <label className="second-color-select">
          <select>
            <option value="hi">Secondary Color</option>
          </select>
        </label>
        <label className="add-item-title">
          <input
            type="text"
            value={title}
            placeholder="Title"
            required={true}
            onChange={(e)=>setTitle(e.target.value)}
          />
        </label>
        <label className="add-item-itemType">
          <select>
            <option value="hi">Item Type</option>
          </select>
        </label>
        <label className="add-item-fit">
          <select>
            <option value="hi">Fit</option>
          </select>
        </label>
        <label className="add-item-occasion">
          <select>
            <option value="hi">Occasion</option>
          </select>
        </label>
        <label className="add-item-description">
          <h3>Description</h3>
          <textarea
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
};

export default CreateItemForm;
