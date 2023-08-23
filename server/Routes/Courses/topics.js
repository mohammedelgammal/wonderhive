// Models
import { TopicModel } from "../../Models/Course/models.js";

// Libraries
import express from "express";

const topicRoute = express.Router();

topicRoute.post("/", async (req, res) => {
  try {
    const { title } = req.body;
    const targetTopic = await TopicModel.findOne({ title });
    if (targetTopic)
      return res.status(200).json({
        message: "Topic already exists!",
      });
    const newTopic = new TopicModel({
      ...targetTopic,
    });
    await newTopic.save();
    return res.status(201).json({ message: "Topic created successfully!" });
  } catch (error) {
    return res.status(400).json({
      error: "Your request could not be processed right now!",
    });
  }
});

topicRoute.get("/", async (req, res) => {
  try {
    const { title } = req.body;
    const targetTopic = await TopicModel.findOne({ title });
    if (!targetTopic)
      return res.status(404).body({ message: "Topic not found!" });
    return res.body();
  } catch (error) {
    return res.status(400).json({
      error: "Your request could not be processed!",
    });
  }
});

export default topicRoute;
