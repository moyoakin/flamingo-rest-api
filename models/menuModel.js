import mongoose from "mongoose";

const menuSchema = mongoose.Schema({

    
      itemName: {
        type: String,
        require: true,
      },

      itemPrice: {
        type: Number,
        require: true,
      },

      imageUrl: {
        type: String,
        require: true,
      },

      itemDescription: {
        type: String,
        require: true,
      },
      status:{
        type:Boolean,
        require:true
      },

      dateCreated:{
        type:Date,
        require:true
      },

      dateDeleted:{
        type:Date
        
      }


    
  
});

const Menu = mongoose.model("Menu", menuSchema);

// menu controller
// image url
// menu description

export default Menu;
