import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";

// Routes
import { topicsRoute } from "./Routes/Courses/index";

// Application
const app = express();

// Configuration
app.use(express.json());
app.use(cors());

// Connection to DB
mongoose.connect(proces.env.DB_URI);

// Routes
app.use("/topics", topicsRoute);

// Port listening
app.listen(process.env.PORT, () =>
  console.log("Server is listening on port", process.env.PORT)
);
