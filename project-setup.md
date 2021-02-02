# Project Description

"LAzYdREsSer" is an application built to assist users on their closet inventory. Ever wake up for work, school, or interview and thought, "What do I have to wear?". This app is supposed to help you create your outfits by having a section for all your clothing items. If you ever get stuck, the application will also have a randomization button to help you as well.

Let's take a deeper dive into the different aspects of the application, which will consist of: (1) how the item gets uploaded, (2) what filtering is required, (3) have a location where the user adds he item to create a "look", and (4) how will the randomization algorithm work?

1. How will the user upload their clothing items?
    - My heart is gearing towards AWS for this implementation. However, I would like to do some more research to see if there's any other API that can help with the uploading by taking a picture. With this picture upload, there will be other form fields the user will need to complete. Those items will be color, item type (shirt, pants, dress, etc), fit (loose, tight, or fitted), occasion (daytime, nighttime, casual, dressy), and a description box that will allow them to add any comment on it.

2. What are the filters?
    - This is probably the main bulk of what the application will be about. Based on how the user completed the clothing item, this feature is meant to help them look through their inventory with ease. The user should be able to filter based on the color, item type, fit, and occasion. With the filtering, they can then add the item to their "look"

3. How to create the look?
    - Once the user filters, each item should have an add feature. Once they click on the "+" button, the item will be added into a "new look" location. I would like to have that display show next to their filter so the user can actively see what they're putting together. Once they're satisfied, they can "create the look" and add a title to the item along with a description.
    This "look" will now be in their inventory for future use. (There's nothing wrong with repeating outfits!)

4. Outfit Randomization?
    - This feature is definitely a reach, but I feel like is the most innovative idea I have. It's definitely easy for anyone to create an app that stores an inventory of things. The randomization is supposed to help the user quickly find an outfit based on their needs. This will, for now, start by asking the user what look they're looking for (daytime, night, casual, dressy, business) and filter through their entire inventory. The matching will be based on complementary colors, clothing types (like a shirt needs pants and maybe a jacket whereas a dress just needs a jacket). As time goes on, I would like to advance this randomization algorithm by allowing the user to filter out colors, clothing items, occasion, and style.


# MVP

1. Upload Clothing Item
2. Create Outfit
3. Randomizing Look

# Bonus Features/Stretch Goals

1. Allow the user to create "closets" that will pertain all the outfit variations they could want. This closet could be work, party, casual, athletic, etc.

2. Advance the randomization algorithm so it does more than just compare the colors and ensure all the components are there. I would like to have the user be able to filter the randomization based on color, clothing item, style, and occasion.

3. A big stretch that I would love is to integrate outside retail sites into the app to allow users to see how the item they're interested in integrates to their wardrobe.

# Database Schema and Diagram
  - [Work in progress](https://drawsql.app/app-academy-23/diagrams/lazy-dresser-1)

# Sketches of Wireframes

  ![Homepage](./wireframe/homepage.png)
# Planned Routes
  Work in progress, kind of stuck on what the first page should be once the user logs in/signs up.

  1. /login
  2. /signup
  3. /outfit - a list of all their outfits
  4. /outfit/:id - this is for the outfit
  5. /item - a list of all their clothing items
  6. /item/:id - this is for the clothing item
  7. /item/create - to create item for their inventory

# React Component List
  - Work in progress

  1. Login
  2. SignUp
  3. CreateItemForm
  4. ItemList
  5. OutfitList
  6. SingleItem
  7. SingleOutfit
  8. CreateOutfitForm

# List of planned technologies
  - Work in progress

  1. Express
  2. React
  3. Heroku
  4. [ColorTag API](https://rapidapi.com/cloud-actions-cloud-actions-default/api/image-color-tag/endpoints) or [Color From Picture API](https://rapidapi.com/hotpot-ai-hotpot/api/color-from-picture) to detect colors
  5. AWS
