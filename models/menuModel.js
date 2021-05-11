import mongoose from "mongoose";

const menuSchema = mongoose.Schema({
    menuItemName:{
        type:String,
        require:true
    },

    menuItemPrice:{
        type:Number,
        require:true
    }
})

const Menu = mongoose.model('Menu', menuSchema);

export default Menu;