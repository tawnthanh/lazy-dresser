import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import "./CreateItemForm.css";
import Palette, { usePalette } from "react-palette";

const CreateItemForm = ({ user }) => {
  const [image, setImage] = useState("");
  const [baseImage, setBaseImage] = useState("")
  const [title, setTitle] = useState("");
  const [itemType, setItemType] = useState(0);
  const [fit, setFit] = useState(0);
  const [occassion, setOccasion] = useState(0);
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);
  const [color, setColor] = useState("orange")
  const [mainColorState, setMainColorState] = useState("")
  const [secondColorState, setSecondColorState] = useState("")

  const { data, loading, error } = usePalette(baseImage)

  const updateFile = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      let base64 = await convertBase64(file);
      setBaseImage(base64);
    }
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (err) => {
        reject(err)
      };
    })
  };

  const resetItems = () => {
    setImage("");
    setBaseImage("");
    setMainColorState("");
    setSecondColorState("");
    setTitle("");
    setItemType(0);
    setFit(0);
    setOccasion(0);
    setDescription("")
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hi")
    return
  }
  return (
    <div className="content">
      <form className="add-item" onSubmit={handleSubmit}>
        <div className="image-upload">
          {baseImage ?
            <img src={baseImage} alt="something" />
            :
            <div className="pic-instructions">{"Please upload a picture with a white background to accurately pull colors."}</div>
          }
        </div>
        <div className="top-right">
          <label className="file-upload">
              upload image
              <input type="file" onChange={updateFile} />
          </label>
          <div className="color-block">
            <div className={data.darkMuted? "main-found ": "main-color-pulled"} onClick={() => console.log(data)} style={{ backgroundColor: data.darkMuted }}>
          </div>
            <div className="secondary-color-pulled">
              <div className={data.muted ? "found-color" : "other-colors"} style={{ backgroundColor: data.muted }}></div>
              <div className={data.vibrant? "found-color": "other-colors"} style={{backgroundColor:data.vibrant}}></div>
              <div className={data.lightMuted? "found-color": "other-colors"} style={{backgroundColor:data.lightMuted}}></div>
              <div className={data.darkVibrant? "found-color": "other-colors"}style={{backgroundColor:data.darkVibrant}}></div>
              <div className={data.lightVibrant? "found-color": "other-colors"} style={{backgroundColor:data.lightVibrant}}></div>
              {/* <div className="other-color-7 " style={{backgroundColor:"black"}}></div> */}
            </div>
          </div>
          <label className="main-color-select">
            <select
              name="main-color"
              onChange={(e) => setMainColorState(e.target.value)}
              style={{ backgroundColor: mainColorState, width: "100%" }}
            >
              <option value="">Main Color</option>
              {data && Object.values(data).map((pulledColor, idx) => {
                return <option value={pulledColor} key={pulledColor + "-" + idx} style={{ backgroundColor: pulledColor, width: "100%" }}>
                  {pulledColor}
                </option>
              })}
            </select>
          </label>
          <label className="second-color-select">
            <select
              name="second-color"
              onChange={(e) => setSecondColorState(e.target.value)}
              style={{ backgroundColor: secondColorState, width: "100%" }}
            >
              <option value="">Secondary Color</option>
              {data && Object.values(data).map((pulledColor, idx) => {
                return <option value={pulledColor} key={pulledColor + "-" + idx} style={{ backgroundColor: pulledColor, width: "100%" }}>
                  {pulledColor}
                </option>
              })}
            </select>
          </label>
        </div>
        <div className="bottom-section">
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
            Description
            <textarea
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
            />
          </label>
          <button className="create-item-button" type="submit">Create Item</button>
          <button className="create-item-button" onClick={resetItems}>Reset</button>
        </div>
      </form>
    </div>
  );
};

export default CreateItemForm;
