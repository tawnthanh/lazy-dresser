'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ClothingItems', [
      // title, description, imgUrl, primaryColor, secondaryColor, itemTypeId, fitId, userId, occasionId
      {title:"boyfriend jeans", description: "they're alright", imgUrl: "/imgs/b-1.jpg", primaryColor:"#4b639c", secondaryColor: "#a4bcec", itemTypeId: 5, fitId: 2, userId: 1, occasionId: 3},
      {title:"leather leggings", description: null, imgUrl: "/imgs/b-2.jpg", primaryColor:"#424242", secondaryColor: "#424242", itemTypeId: 5, fitId: 3, userId: 1, occasionId: 2},
      {title:"skinny jeans", description: "goes with everything", imgUrl: "/imgs/b-3.jpg", primaryColor:"#243755", secondaryColor: "#243755", itemTypeId: 5, fitId: 1, userId: 1, occasionId: 1},
      {title:"dressy wideleg pants", description: "Idk what to wear with this. Worn once?", imgUrl: "/imgs/b-5.jpg", primaryColor:"#f4c297", secondaryColor: "#f4c297", itemTypeId: 5, fitId: 2, userId: 1, occasionId: 6},
      {title: "brown plaid skirt", description: "living my dark academia life", imgUrl: "/imgs/b-6.jpg", primaryColor: "#54442c", secondaryColor: "#54442c", itemTypeId: 5, fitId: 1, userId: 1, occasionId: 1 },
      {title:"grey sweatpants",description: "my faveee", imgUrl: "/imgs/b-4.jpg", primaryColor:"#ccc5bc", secondaryColor: "#ccc5bc", itemTypeId: 5, fitId: 1, userId: 1, occasionId: 3},
      {title:"black satin slip dress",description: "I can wear anything with thiss", imgUrl: "/imgs/d-1.jpg", primaryColor:"#3c3c3c", secondaryColor: "#3c3c3c", itemTypeId: 3, fitId: 1, userId: 1, occasionId: 2},
      {title:"blue striped shirt dress",description: "good for work or casual day", imgUrl: "/imgs/d-2.jpg", primaryColor:"#596d9d", secondaryColor: "#596d9d", itemTypeId: 3, fitId: 1, userId: 1, occasionId: 1},
      {title:"crushed velvet wrap dress",description: "feels soo good and flattering", imgUrl: "/imgs/d-3.jpg", primaryColor:"#7e8c6c", secondaryColor: "#7e8c6c", itemTypeId: 3, fitId: 1, userId: 1, occasionId: 4},
      {title:"leather a-line dress",description: "I gotta chill with the leather. Haven't worn this yet.", imgUrl: "/imgs/d-4.jpg", primaryColor:"#000000", secondaryColor: "#000000", itemTypeId: 3, fitId: 1, userId: 1, occasionId: 2},
      {title: "sunflower dress", description: null, imgUrl: "/imgs/d-5.jpg", primaryColor: "#000000", secondaryColor: "#cd7d38", itemTypeId: 3, fitId: 1, userId: 1, occasionId: 1 },
      {title: "peasant dress", description: null, imgUrl: "https://lazydresser.s3.amazonaws.com/1612761982181.jpg", primaryColor: "#631c14", secondaryColor: "#631c14", itemTypeId: 3, fitId: 1, userId: 1, occasionId: 4 },
      {title:"grey oversized wool coat",description: "great for business, night, everything.", imgUrl: "/imgs/o-1.jpg", primaryColor:"#7c7c84", secondaryColor: "#7c7c84", itemTypeId: 1, fitId: 2, userId: 1, occasionId: 3},
      {title:"boyfriend blazer",description: "totally wrinkles easily. booo", imgUrl: "/imgs/o-2.jpg", primaryColor:"#000000", secondaryColor: "#000000", itemTypeId: 1, fitId: 2, userId: 1, occasionId: 6},
      {title:"moto leather jacket",description: "prized possession- I love this Celine.", imgUrl: "/imgs/o-3.jpg", primaryColor:"#000000", secondaryColor: "#000000", itemTypeId: 1, fitId: 2, userId: 1, occasionId: 1},
      {title:"yellow jacket",description: "love the color but why.", imgUrl: "/imgs/o-4.jpg", primaryColor:"#f4b454", secondaryColor: "#f4b454", itemTypeId: 1, fitId: 2, userId: 1, occasionId: 3},
      {title:"My lazy day jacket",description: "There's a hole at left armpit. Don't wear to outings", imgUrl: "/imgs/o-5.jpg", primaryColor:"#647ca4", secondaryColor: "#647ca4", itemTypeId: 1, fitId: 1, userId: 1, occasionId: 3},
      {title:"Green printed organza top",description: "needs an undershirt for sure", imgUrl: "/imgs/s-1.jpg", primaryColor:"#66572a", secondaryColor: "#66572a", itemTypeId: 4, fitId: 1, userId: 1, occasionId: 4},
      {title:"printed Tee",description: "in case ppl don't know I'm a coder", imgUrl: "/imgs/s-2.jpg", primaryColor:"#ffffff", secondaryColor: "#ffffff", itemTypeId: 4, fitId: 2, userId: 1, occasionId: 3},
      {title:"striped button up shirt",description: "work stuff", imgUrl: "/imgs/s-3.jpg", primaryColor:"#648cd4", secondaryColor: "#648cd4", itemTypeId: 4, fitId: 1, userId: 1, occasionId: 6},
      {title:"black crop",description: "great for a night out and it's hot", imgUrl: "/imgs/s-4.jpg", primaryColor:"#000000", secondaryColor: "#000000", itemTypeId: 4, fitId: 3, userId: 1, occasionId: 2},
      {title:"red satin tank",description: "great layerr", imgUrl: "/imgs/s-5.jpg", primaryColor:"#6f0b0d", secondaryColor: "#6f0b0d", itemTypeId: 4, fitId: 1, userId: 1, occasionId: 4},
      {title:"black heeled boots",description: "great with everything, super comfy", imgUrl: "/imgs/sh-1.jpg", primaryColor:"#000000", secondaryColor: "#000000", itemTypeId: 6, fitId: 1, userId: 1, occasionId: 3},
      {title:"white dr. martens",description: "why white. wore a few times", imgUrl: "/imgs/sh-2.jpg", primaryColor:"#fcf4f4", secondaryColor: "#fcf4f4", itemTypeId: 6, fitId: 1, userId: 1, occasionId: 2},
      {title:"brown ankle boots",description: null, imgUrl: "/imgs/sh-3.jpg", primaryColor:"#642c13", secondaryColor: "#642c13", itemTypeId: 6, fitId: 1, userId: 1, occasionId: 3},
      {title:"black heels",description: "great with everything, super comfy", imgUrl: "/imgs/sh-4.jpg", primaryColor:"#000000", secondaryColor: "#000000", itemTypeId: 6, fitId: 1, userId: 1, occasionId: 4},
      {title:"black converse",description: null , imgUrl: "/imgs/sh-5.jpg", primaryColor:"#000000", secondaryColor: "#000000", itemTypeId: 6, fitId: 1, userId: 1, occasionId: 3},
      {title:"green sweater",description: "the balloon sleeves are everythingg" , imgUrl: "/imgs/sw-1.jpg", primaryColor:"#041c0c", secondaryColor: "#041c0c", itemTypeId: 2, fitId: 2, userId: 1, occasionId: 3},
      {title:"bernie mood",description: null , imgUrl: "/imgs/sw-2.jpg", primaryColor:"#3c3c3c", secondaryColor: "#3c3c3c", itemTypeId: 2, fitId: 2, userId: 1, occasionId: 3},
      {title:"creme knit sweater",description: "layer friendly" , imgUrl: "/imgs/sw-3.jpg", primaryColor:"#dcccb2", secondaryColor: "#dcccb2", itemTypeId: 2, fitId: 1, userId: 1, occasionId: 1},
      {title:"color block sweatshirt",description: "The colors are so funn" , imgUrl: "/imgs/sw-4.jpg", primaryColor:"#641c22", secondaryColor: "#cca236", itemTypeId: 2, fitId: 2, userId: 1, occasionId: 3},
      {title:"tie-dye madness",description: null , imgUrl: "/imgs/sw-5.jpg", primaryColor:"#04101c", secondaryColor: "#b1b8c4", itemTypeId: 2, fitId: 2, userId: 1, occasionId: 3},
      {title:"oversized cardigan",description: "grandpa cardi for sure" , imgUrl: "/imgs/sw-6.jpg", primaryColor:"#918474", secondaryColor: "#918474", itemTypeId: 1, fitId: 2, userId: 1, occasionId: 3},
      {title:"blue sweater",description: null , imgUrl: "https://lazydresser.s3.amazonaws.com/1612761582054.jpg", primaryColor:"#344869", secondaryColor: "#344869", itemTypeId: 2, fitId: 2, userId: 1, occasionId: 3},
      {title:"mom jeans", description: "90s vibes", imgUrl: "/imgs/b-7.jpg", primaryColor:"#8caccc", secondaryColor: "#afbfc8", itemTypeId: 5, fitId: 2, userId: 1, occasionId: 3},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ClothingItems', null, {});
  }
};
