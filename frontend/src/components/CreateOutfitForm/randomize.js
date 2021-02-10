function convertToRGB(hexcode) {
  if (hexcode.length !== 7) return null;

  let rgb = [
    parseInt(hexcode.slice(1,3), 16),
    parseInt(hexcode.slice(3,5), 16),
    parseInt(hexcode.slice(5), 16),
  ]

  return rgb;
}
