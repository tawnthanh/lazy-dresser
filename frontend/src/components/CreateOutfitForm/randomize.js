const complimentaryColors = require("complementary-colors");

const color = new complimentaryColors("#8c8376");

console.log(color.primary());
console.log(color.complementary());
console.log(color.triad());
console.log(color.analogous());

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
  return `#${rgb[0].toString(16)}${rgb[1].toString(16)}${rgb[2].toString(16)}`
}
