import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

// routes
import usersRouter from "./routes/users.js";

// config
dotenv.config();
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// DB config
const connection_url = `mongodb+srv://mohammedelgammal:${process.env.DB_PASS}@hives.wqeko1q.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(connection_url);

// routes
app.use("/users", usersRouter);

// server listen
app.listen(process.env.PORT, () =>
  console.log(`Server is running on port: ${process.env.PORT}`)
);
