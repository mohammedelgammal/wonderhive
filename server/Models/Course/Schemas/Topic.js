import { Schema } from "mongoose";

const topicSchema = new Schema({
  title: { type: String, required: true },
});

export default topicSchema;
