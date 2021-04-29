import mongoose from 'mongoose';
import user from './userModel';

const orderSchema = mongoose.Schema({
    user:{
        
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },

    items:[{

        itemName:{
            type:String,
            require:true,
        },

        itemQty:{
            type: Number,
            required: true,
        },

        itemPrice:{
            type: Number,
            required: true
        }
      
    }]
       
    
})

const Order = moongoose.Schema("Order" , orderSchema);

export default Order;