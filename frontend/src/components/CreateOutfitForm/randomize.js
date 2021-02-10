const complimentaryColors = require("complementary-colors");

const color = new complimentaryColors("#8d8477");

// console.log(color.complementary());
// console.log(color.triad());
// console.log("analogous", color.analogous());

// function convertToRGB(hexcode) {
//   if (hexcode.length !== 7) return null;

//   let rgb = [
//     parseInt(hexcode.slice(1,3), 16),
//     parseInt(hexcode.slice(3,5), 16),
//     parseInt(hexcode.slice(5), 16),
//   ]

//   return rgb;
// }

// function findComplement(rgb) {

//   return [ 255-rgb[0], 255-rgb[1], 255-rgb[2]]
// }

function rgbToHex(rgb) {
  return `#${parseInt(rgb[0]).toString(16)}${parseInt(rgb[1]).toString(16)}${parseInt(rgb[2]).toString(16)}`
}

function findAnalogous(hex) {
  const color = new complimentaryColors(hex);

  let analogous = color.analogous()[2];
  analogous = Object.values(analogous).join(",")
  // console.log("from find anal", analogous)
  return `rgb(${analogous})`
}
export const calculateColors = (hex) => {
  const color = new complimentaryColors(hex);

  let comp = color.complementary()
  comp = Object.values(comp[1]).join(",")

  console.log(comp.split(","))
  let analogous = findAnalogous(rgbToHex(comp.split(",")))

  console.log("calculate func", analogous)
  return [`rgb(${comp})`, analogous];
}
