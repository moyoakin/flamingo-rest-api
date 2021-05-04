import express from "express";
import {
  addOrder,
  deleteOrder,
  findOrder,
} from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

const orderRoute = express.Router();

orderRoute.route("/addOrder").post(protect, addOrder);


orderRoute
  .route("/:id")
  .post(protect, updateOrder)
  .delete(protect, deleteOrder)
  .get(protect, findOrder);

export default orderRoute;
