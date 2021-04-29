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
  res.status(201).json(newOrder);

const addOrder = await order + 1;
res.status(201).json(addOrder)
  
});

//define the req.body..
//check if the array is not empty..
//add orders

//Get orders
// Delete - remove Items
// GetOrderById .... moving to cart
// Post, Delete
