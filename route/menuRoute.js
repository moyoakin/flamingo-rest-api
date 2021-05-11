import express from "express";

import { menuItemName, menuItemPrice } from "../controllers/menuController.js";
import { protect } from "../middleware/authMiddleware.js";

const menuRoute = express.Router();

menuRoute.route("/").post(protect, menuItemName);

export default menuRoute;


