import express from "express";

import dotenv from "dotenv";

import connectDB from "./config/db.js";

import orderRoutes from "./route/orderRoutes.js"

//Route imports

import userRoutes from "./route/userRoutes.js";

import setupProdMiddleWare from "./config/prod.js";

dotenv.config();
connectDB();

const app = express();

setupProdMiddleWare(app);

const port = process.env.PORT || 8030;

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.listen(port, () => console.log(`server started on Port: ${port}`));
