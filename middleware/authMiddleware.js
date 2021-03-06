import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/usermodel.js";

/**
 *
 */

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    console.log("Token found");

    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      res.status(401);
      console.log(error);
      throw new Error(error);
    }
  } else if (!token) {
    res.status(401);
    throw new Error("Not Authorized, no token");
  }
});

export { protect };
