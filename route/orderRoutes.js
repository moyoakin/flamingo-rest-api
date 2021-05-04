import express from "express";
import {
  addOrder,
  deleteOrder,
  findOrderById,
} from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

const orderRoutes = express.Router();

orderRoutes.route("/").post(protect, addOrder);

orderRoutes
  .route("/:id")
  .delete(protect, deleteOrder)
  .get(protect, findOrderById);

export default orderRoutes;
