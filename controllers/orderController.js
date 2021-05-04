import asyncHandler from "express-async-handler";
import Order from "../models/orderModels.js";
import { request } from "express";

const addOrder = asyncHandler(async (req, res) => {
  const { items } = req.body;

  if (items && items.length == 0) {
    res.status(400);
    throw new Error("No item in order ");
  }

  const order = new Order({
    items,
    user: request.user._id,
  });

  const newOrder = await order.save();
  res.status(201).json(addOrder);

});

  // Delete order

const deleteOrder = asyncHandler(async (req, res) => {
  const delOrder = await Order.findById(req.params.id);

  if(delOrder){
    await Order.remove();
    res.json({message: "Order Deleted"})
  }else{
    res.status(404);
    throw new Error("Your cart is empty");
  }
})

// get order by ID

const findOrder = asyncHandler((req, res) => {
  const checkedOrder = await Order.findById(req.params.id);

  if(checkedOrder){
    res.status(201).json(checkedOrder)
  }else{
    res.status(404);
    throw new Error("No order found");
  }
})


  


//define the req.body..
//check if the array is not empty..
//add orders

//Get orders
// Delete - remove Items
// GetOrderById .... moving to cart
// Post, Delete
