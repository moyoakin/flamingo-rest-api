import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  signUpUser,
  userSignin,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

router.route("/").get(protect, getUsers);

router.route("/signUp").post(signUpUser);

router.route("/login").post(userSignin);

router.route("/deleteUser").delete(deleteUser);

router
  .route("/:id")
  .get(protect, getUserById)
  .put(protect, updateUser)
  .delete(protect, deleteUser);

  export default router;
