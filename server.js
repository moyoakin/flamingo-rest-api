import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

//Route imports
import orderRoutes from "./route/orderRoutes.js";
import userRoutes from "./route/userRoutes.js";
import setupProdMiddleWare from "./config/prod.js";
import menuRoutes from "./route/menuRoutes.js";

dotenv.config();
connectDB();

const app = express();

setupProdMiddleWare(app);

const port = process.env.PORT || 8030;

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/menu",menuRoutes);

app.listen(port, () => console.log(`server started on Port: ${port}`));
