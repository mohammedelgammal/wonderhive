import express from "express";
import UserModel from "../models/Users.js";
import bcrypt from "bcrypt";

const router = express.Router();

// routes
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const targetUser = await UserModel.findOne({ username });
  if (targetUser) return res.json({ message: "User already exists!" });
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new UserModel({ username, password: hashedPassword });
  await newUser.save();
  return res.json({ message: "User created successfully!" });
});

export default router;
