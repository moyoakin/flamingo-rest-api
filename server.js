import express from "express";

import dotenv from "dotenv";

import connectDB from "./config/db.js";

//Route imports

import userRoutes from "./route/userRoutes.js"

dotenv.config();
connectDB();

const app = express();
const PORT = 8080;

app.use(express.json());

app.use("/api/users" , userRoutes);



app.listen(PORT, () => console.log(`server started on Port: ${PORT}`));
