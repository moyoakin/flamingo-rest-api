import express from "express";

import { addMenu } from "../controllers/menuController.js";
import { protect } from "../middleware/authMiddleware.js";

const menuRoutes = express.Router();

menuRoutes.route("/create").post(protect, addMenu);

export default menuRoutes;
