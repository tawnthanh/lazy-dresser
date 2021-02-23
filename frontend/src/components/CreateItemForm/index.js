import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import "./CreateItemForm.css";
import { usePalette } from "react-palette";
import {grabFixedFields, createItem} from "../../store/items";
import SuccessfulModal from "../SuccessfulModal";

const CreateItemForm = ({ user }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const defaults = useSelector(state => state.items)

  const [image, setImage] = useState("");
  const [baseImage, setBaseImage] = useState("")
  const [title, setTitle] = useState("");
  const [itemType, setItemType] = useState(0);
  const [fit, setFit] = useState(0);
  const [occasion, setOccasion] = useState(0);
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);
  const [mainColorState, setMainColorState] = useState("")
  const [secondColorState, setSecondColorState] = useState("")
  const [newItem, setNewItem] = useState(false);

  const { data } = usePalette(baseImage)

  useEffect(() => {
    dispatch(grabFixedFields());
  }, [])

  useEffect(() => {
    if (newItem) {
      setTimeout(() => {
        setNewItem(false)
        reloadForm();
      }, 800)
    }
  }, [newItem]);

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


  const reloadForm = () => {
    dispatch(grabFixedFields());
    setImage("");
    setBaseImage("");
    setTitle("");
    setItemType(0);
    setFit(0);
    setOccasion(0);
    setDescription("");
    setMainColorState("");
    setSecondColorState("");
    setNewItem(false);
    setErrors([])
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    let item = {
      title,
      description,
      image,
      "primaryColor": mainColorState,
      "secondaryColor": secondColorState,
      "itemTypeId": itemType,
      "fitId": fit,
      "userId": user.id,
      "occasionId": occasion,
    }
    return dispatch(createItem(item))
            .then((res) => setNewItem(true))
            .catch(res => {
              if (res.data && res.data.errors) setErrors(res.data.errors);
            });

  }

  const doneUpload = (e) => {
    e.preventDefault();
    setErrors([]);
    let item = {
      title,
      description,
      image,
      "primaryColor": mainColorState,
      "secondaryColor": secondColorState,
      "itemTypeId": itemType,
      "fitId": fit,
      "userId": user.id,
      "occasionId": occasion,
    }
    return dispatch(createItem(item))
    .then((res) => {
        setTimeout(() => {
          history.push("/items");
        }, 800)
      })
      .catch(res => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
  };


  return (
    <div className="content create-item-container">
      {newItem &&
        <SuccessfulModal newItem={newItem}/>
      }
      <form className="add-item" onSubmit={(e) => {
        setNewItem(true);
        doneUpload(e);
      }}>
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
            <div className={data.darkMuted? "main-found ": "main-color-pulled"} style={{ backgroundColor: data.darkMuted }}>
          </div>
            <div className="secondary-color-pulled">
              <div className={data.muted ? "found-color" : "other-colors"} style={{ backgroundColor: data.muted }}></div>
              <div className={data.vibrant? "found-color": "other-colors"} style={{backgroundColor:data.vibrant}}></div>
              <div className={data.lightMuted? "found-color": "other-colors"} style={{backgroundColor:data.lightMuted}}></div>
              <div className={data.darkVibrant? "found-color": "other-colors"}style={{backgroundColor:data.darkVibrant}}></div>
              <div className={data.lightVibrant? "found-color": "other-colors"} style={{backgroundColor:data.lightVibrant}}></div>
            </div>
          </div>
          <label className="main-color-select">
            <select
              name="main-color"
              onChange={(e) => setMainColorState(e.target.value)}
              style={{ backgroundColor: mainColorState, width: "100%" }}
            >
              <option value={0}>Select Main Color</option>
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
              <option value={0}>Select Secondary Color</option>
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
              // required={true}
              onChange={(e)=>setTitle(e.target.value)}
            />
          </label>
          <label className="add-item-itemType">
            <select
              name="item-type"
              value={itemType}
              onChange={(e) => setItemType(e.target.value)}>
              <option value={0}>Select Item Type</option>
              {!!defaults.itemTypes &&
                defaults.itemTypes.map((type) => {
                  return <option key={`${type[0]}-${type[1]}`} value={type[0]}>{type[1]}</option>
                })
              }
            </select>
          </label>
          <label className="add-item-fit">
            <select
              name="fit-type"
              onChange={(e) => setFit(e.target.value)}
              value={fit}
            >
              <option value={0}>Select Fit</option>
              {!!defaults.fits &&
                defaults.fits.map((type) => {
                  return <option key={`${type[0]}-${type[1]}`} value={type[0]}>{type[1]}</option>
                })
              }
            </select>
          </label>
          <label className="add-item-occasion">
            <select
              name="occasion-type"
              onChange={(e) => setOccasion(e.target.value)}
              value={occasion}
            >
              <option value={0}>Select Occasion</option>
              {!!defaults.occasions &&
                defaults.occasions.map((type) => {
                  return <option key={`${type[0]}-${type[1]}`} value={type[0]}>{type[1]}</option>
                })
              }
            </select>
          </label>
          <label className="add-item-description">
            Description
            <textarea
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
            />
          </label>
          <div className="add-item-errors">
            {!!errors &&
              errors.map((err, idx) => {
                return <p   key={`err-${idx}`}>{err}</p>
              })
            }
          </div>
          <div className="add-more" onClick={handleSubmit}>Add More +</div>
          <button className="create-item-button" type="submit">Done</button>

        </div>
      </form>
      <button className="create-item-button reset" onClick={reloadForm}>Reset</button>

    </div>
  );
};

export default CreateItemForm;
