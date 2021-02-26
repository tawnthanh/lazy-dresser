# LAzYdREsSer
## Introduction

["LAzYdREsSer"](http://lazy-dresser.herokuapp.com/) is an application for users to inventory all of their clothes into their account. Ever wake up for work, school, or interview and thought, "What do I have to wear?". This app is supposed to help you create your outfits by pulling your inventory and adding whatever you see fit. If you ever get stuck, the application will also have a randomization button to help you as well.

## Table of Contents

- [Dependencies](#dependencies)
- [Features](#features)
  - [Inventory Clothes](#inventory-clothes)
  - [Create Outfits](#create-outfits)
  - [Randomize Outfit](#randomize-outfit)



## Dependencies

<a href="https://heroku.com/"><img alt="Heroku" src="https://img.shields.io/badge/-Heroku-430098?style=flat-square&logo=Heroku&logoColor=white" /></a>
<a href="https://reactjs.org/"><img alt="React" src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black" /></a>
<a href="https://redux.js.org/"><img alt="Redux" src="https://img.shields.io/badge/-Redux-764ABC?style=flat-square&logo=Redux&logoColor=white" /></a>
<a href="https://reactrouter.com/"><img alt="React Router" src="https://img.shields.io/badge/-React%20Router-CA4245?style=flat-square&logo=React-Router&logoColor=white" /></a>
<a href="https://aws.amazon.com/"><img alt="Amazon AWS" src="https://img.shields.io/badge/-Amazon%20AWS-232F3E?style=flat-square&logo=Amazon%20AWS&logoColor=white" /></a>
<a href="https://expressjs.com/"><img alt="Express" src="https://img.shields.io/badge/-Express-430098?style=flat-square&logo=Express&logoColor=white" /></a>
<a href="https://www.npmjs.com/package/react-palette"><img alt="React Palette" src="https://img.shields.io/badge/-React Palette-CA4245?style=flat-square&logo=react&logoColor=white" /></a>



## Features

  - ### Inventory Clothes
    The user will be asked to signup or login to their account before they can inventory their clothes. This feature is to allow the user to organize their current closet into an app. There will be a form for the user to fill out for each item, which are: upload a picture, select 2 colors, add a title, optional description, select the item type, fit type, and occasion. This item upload integrates AWS to efficiently maintain user's images and "Color-Palette" to quickly detect the colors of their item. The user will have the chance to upload more than one item at a time. Once they have uploaded all the items, they will be able to view these items and make any edits or delete the pieces by going to their inventory.

    - Add Items
    ![](./public/imgs/create-item.gif)


  - ### Create Outfits
    Now that the logged in user has made a full inventory of their closet, they can now see which items will go together. The user will be able to view their list of clothing items and add it to their look. Once they are done, this will be available in their outfit list. The user can also delete their outfit if they don't find it pleasing anymore.

    - Create Outfits
    ![](./public/imgs/create-outfit.gif)

  - ### Randomize Outfit
    This feature is to support the user by creating outfits based on what they have in their inventory. For now, the algorithm will match the pieces together based on the color of their items.
