import express from "express";

import dotenv from "dotenv";

import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();
const PORT = 8080;

app.use(express.json());

app.use("/", (req, res) => {
  res.send("App is running");
});

app.listen(PORT, () => console.log(`server started on Port: ${PORT}`));
