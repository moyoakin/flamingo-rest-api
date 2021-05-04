import express from "express";
import {
  addOrder,
  deleteOrder,
  findOrder,
} from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

const orderRoutes = express.Router();

orderRoutes.route("/").post(protect, addOrder);

orderRoutes
  .route("/:id")
  .delete(protect, deleteOrder)
  .get(protect, findOrder);

export default orderRoutes;
