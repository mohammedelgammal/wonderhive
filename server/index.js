import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";

// Routes
import topicRoute from "./Routes/Courses/topics.js";

// Application
const app = express();

// Configuration
app.use(express.json());
app.use(cors());

// Connection to DB
mongoose.connect("mongodb://127.0.0.1:27017/wonderhive", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use("/topics", topicRoute);

// Port listening
app.listen(process.env.PORT, () =>
  console.log("Server is listening on port", process.env.PORT)
);
