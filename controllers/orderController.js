import asyncHandler from "express-async-handler";
import Order from "../models/orderModels.js";


const addOrder = asyncHandler(async (req, res) => {
  const { items } = req.body;

  if (items && items.length == 0) {
    res.status(400);
    throw new Error("No item in order ");
  }

  const order = new Order({
    items,
    user: req.user._id,
  });

  const newOrder = await order.save();
  res.status(201).json(newOrder);

});

  // Delete order

const deleteOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if(order){
    await order.remove();
    res.json({message: "Order Deleted"})
  }else{
    res.status(404);
    throw new Error("No order to delete");
  }
})

// get order by ID

const findOrderById = asyncHandler(async(req, res) => {
  const order = await Order.findById(req.params.id);

  if(order){
    res.status(201).json(order)
  }else{
    res.status(404);
    throw new Error("No order found");
  }
})


export {addOrder, deleteOrder,findOrderById}

  


//define the req.body..
//check if the array is not empty..
//add orders

//Get orders
// Delete - remove Items
// GetOrderById .... moving to cart
// Post, Delete
