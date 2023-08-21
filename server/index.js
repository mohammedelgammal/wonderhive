import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";

path.resolve("./");

// Routes
import topicRoute from "./Routes/Courses/topics.js";

// Application
const app = express();

// Configuration
app.use(express.json());
app.use(cors());

// Connection to DB
mongoose.connect(process.env.DB_URI);

// Routes
app.use("/topics", topicRoute);

// Port listening
app.listen(process.env.PORT, () =>
  console.log("Server is listening on port", process.env.PORT)
);
