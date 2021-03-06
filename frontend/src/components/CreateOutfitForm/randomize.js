// const complimentaryColors = require("complementary-colors");

function randomNum(array) {
  return Math.floor(Math.random() * Math.floor(array.length));
};

export const randomOutfit = (inventory, ...cb) => {
  cb[0]({});
  cb[1]({});
  cb[2]({});
  cb[3]({});
  cb[4]({});
  cb[5]({});

  let item = inventory[randomNum(inventory)];

  let outerwear = inventory.filter(piece => parseInt(piece.itemTypeId) === 1);
  let sweater = inventory.filter(piece => parseInt(piece.itemTypeId) === 2);
  let dress = inventory.filter(piece => parseInt(piece.itemTypeId) === 3);
  let top = inventory.filter(piece => parseInt(piece.itemTypeId) === 4);
  let bottom = inventory.filter(piece => parseInt(piece.itemTypeId) === 5);
  let shoes = inventory.filter(piece => parseInt(piece.itemTypeId) === 6);

  let outfitInclude;

  if (item.itemTypeId === 1) {
    // conditional to match outerwear
    outfitInclude = ["sweater", "top"];
    let randomAdd = randomNum(outfitInclude);

    cb[0](item);
    cb[4](bottom[randomNum(bottom)]);
    cb[5](shoes[randomNum(shoes)]);
    if (outfitInclude[randomAdd] === "sweater") {
      cb[1](sweater[randomNum(sweater)]);
    } else if (outfitInclude[randomAdd] === "top") {
      cb[2](top[randomNum(top)]);
    }
  } else if (item.itemTypeId === 2) {
    // conditional to match sweater
    outfitInclude = ["bottoms", "dress"];
    let randomAdd = randomNum(outfitInclude)

    cb[1](item);
    cb[5](shoes[randomNum(shoes)]);
    if (outfitInclude[randomAdd] === "bottoms") {
      cb[0](outerwear[randomNum(outerwear)]);
      cb[4](bottom[randomNum(bottom)]);
    } else if (outfitInclude[randomAdd] === "dress") {
      cb[3](dress[randomNum(dress)]);
    };
  } else if (item.itemTypeId === 3) {
    // conditional to match dress
    outfitInclude = ["sweater", "outerwear", "none"];

    cb[3](item);
    cb[5](shoes[randomNum(shoes)]);
    if (outfitInclude[randomNum(outfitInclude)] === "sweater") {
      cb[1](sweater[randomNum(sweater)]);
    } else if (outfitInclude[randomNum(outfitInclude)] === "outerwear") {
      cb[0](outerwear[randomNum(outerwear)]);
    } else if (outfitInclude[randomNum(outfitInclude)] === "none") {
      return;
    };

  } else if (item.itemTypeId === 4) {
    // conditional to match top

    cb[2](item);
    cb[0](outerwear[randomNum(outerwear)])
    cb[4](bottom[randomNum(bottom)]);
    cb[5](shoes[randomNum(shoes)]);
  } else if (item.itemTypeId === 5) {
    // conditional to match bottoms

    outfitInclude = ["sweater", "top"];
    let randomAdd = randomNum(outfitInclude);

    cb[4](item);
    cb[0](outerwear[randomNum(outerwear)]);
    cb[5](shoes[randomNum(shoes)]);
    if (outfitInclude[randomAdd] === "sweater") {
      cb[1](sweater[randomNum(sweater)]);
    } else if (outfitInclude[randomAdd] === "top") {
      cb[2](top[randomNum(top)]);
    }
  } else if (item.itemTypeId === 6) {
    // conditional to match shoes
    outfitInclude = ["dress", "outerwear", "sweater", "bottoms", "top"];
    let randomAdd = randomNum(outfitInclude)
    let outfitItems;

    cb[5](item);

    if (outfitInclude[randomAdd] === "dress") {
      cb[3](dress[randomNum(dress)]);

      outfitItems = ["sweater", "outerwear", "none"];
      let randomPiece = randomNum(outfitItems)

      if (outfitItems[randomPiece] === "sweater") {
        cb[1](sweater[randomNum(sweater)]);
      } else if (outfitItems[randomPiece] === "outerwear") {
        cb[0](outerwear[randomNum(outerwear)]);
      } else if (outfitItems[randomPiece] === "none") {
        return;
      };

    } else if (outfitInclude[randomAdd] === "outerwear") {
      cb[0](outerwear[randomNum(outerwear)]);


      outfitItems = ["dress", "top", "sweater"];
      let randomPiece = randomNum(outfitItems);

      if (outfitItems[randomPiece] === "dress") {
        cb[3](dress(randomNum(dress)));
      } else if (outfitItems[randomPiece] === "top") {
        cb[2](top[randomNum(top)]);
        cb[4](bottom[randomNum(bottom)]);
      } else if (outfitItems[randomPiece] === "sweater") {
        cb[1](sweater[randomNum(sweater)]);
        cb[4](bottom[randomNum(bottom)]);
      };

    } else if (outfitInclude[randomAdd] === "sweater") {

      cb[0](outerwear[randomNum(outerwear)]);
      cb[1](sweater[randomNum(sweater)]);
      cb[4](bottom[randomNum(bottom)]);

    } else if (outfitInclude[randomAdd] === "top") {

      cb[0](outerwear[randomNum(outerwear)]);
      cb[2](top[randomNum(top)]);
      cb[4](bottom[randomNum(bottom)]);

    } else if (outfitInclude[randomAdd] === "bottoms") {
      cb[0](outerwear[randomNum(outerwear)]);
      cb[4](bottom[randomNum(bottom)]);

      outfitItems = ["top", "sweater"];
      let randomPiece = randomNum(outfitItems);

      if (outfitItems[randomPiece] === "top") {
        cb[2](top[randomNum(top)]);
      } else if (outfitItems[randomPiece] === "sweater") {
        cb[1](sweater[randomNum(sweater)]);
      };
    }
  };
};


