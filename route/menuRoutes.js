import express from "express";

import { addMenu, findItemByID, deleteMenu,getAllMenu } from "../controllers/menuController.js";
import { protect } from "../middleware/authMiddleware.js";

const menuRoutes = express.Router();

menuRoutes.route("/create").post(protect, addMenu);
menuRoutes.route("/").get(getAllMenu);


menuRoutes
.route("/:id")
.get(protect, findItemByID)
.delete(protect, deleteMenu)


export default menuRoutes;
