# Item Codes
The code provides an implementation of selecting an item from variations and further providing a combined item code using the previously selected user's choices. Code is written in React and CSS and uses yarn workspace.

![](https://github.com/lienebalina/item-codes/blob/main/item-codes/public/ezgif.com-video-to-gif.gif)

## Installation and running
To use and run this code, follow these instructions:
1. Move into the project path and install all the dependencies:
   ```bash
   cd item-codes
   npm install
   ```
2. Run the code:
   ```bash
   yarn start
   ```
3. To test the code open another terminal while the code is still running and type:
   ```bash
   yarn run test
   ```
   and press "a".
   
If you did everything correctly, the project should be properly running. :)

## Features
* The products and variations are read from JSON files.
* When user selects a product, the variations are displayed.
* When the selection is being made, a proper item code is displayed above.
