import mongoose from "mongoose";

const menuSchema = mongoose.Schema({
  menu: [
    {
      menuItemName: {
        type: String,
        require: true,
      },

      menuItemPrice: {
        type: Number,
        require: true,
      },

      imageUrl: {
        type: String,
        require: true,
      },

      menuDescription: {
        type: String,
        require: true,
      },
    },
  ],
});

const Menu = mongoose.model("Menu", menuSchema);

// menu controller
// image url
// menu description

export default Menu;
