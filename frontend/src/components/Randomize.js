import "./Randomize.css";
import { calculateColors } from "./CreateOutfitForm/randomize";
import { useState, useEffect } from "react";

const Randomize = () => {
  const [main, setMain] = useState("#54443c");
  const [comp, setComp] = useState("");
  const [analogous, setAnalogous] = useState([]);
  const [secondAnalogous, setSecondAnalogous] = useState([]);

  useEffect(() => {
    let colors = calculateColors(main);

    if (colors) {
      setComp(colors[0]);
      setAnalogous(colors[1]);
      setSecondAnalogous(colors[2])
      // console.log(main);
      console.log("one", colors[1]);
      console.log("2", colors[2]);

    }
  }, [main])
  return (
    <div className="content randomize-page">
      <div style={{ backgroundColor:main }}><h4>Main Color</h4></div>
      <div style={{ backgroundColor: comp }}><h4>Complement Color</h4></div>
      <div style={{backgroundColor:analogous}}><h4>Analogous</h4></div>
      <div style={{backgroundColor:secondAnalogous}}><h4>2nd Analogous</h4></div>
    </div>
  )
}

export default Randomize;
