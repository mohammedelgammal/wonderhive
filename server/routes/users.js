import express from "express";
import UserModel from "../models/Users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const usersRoute = express.Router();

usersRoute.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const targetUser = await UserModel.findOne({ username });
  if (targetUser) return res.json({ message: "User already exists!" });
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new UserModel({
    username: username,
    password: hashedPassword,
  });
  await newUser.save();
  return res.json({ message: "User has been created successfully!" });
});

usersRoute.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const targetUser = await UserModel.findOne({ username });
  if (!targetUser) return res.json({ message: "User does not exist!" });
  const isPasswordValid = await bcrypt.compare(password, targetUser.password);
  if (!isPasswordValid)
    return res.json({ message: "Password is not correct!" });
  const token = jwt.sign({ username }, process.env.SECRET);
  return res.json({ message: "Login successfully!", username, token });
});

export default usersRoute;
