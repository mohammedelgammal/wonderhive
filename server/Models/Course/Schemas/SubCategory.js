// Libraries
import { Schema } from "mongoose";

// Schemas
import topicSchema from "./Topic.js";

const subCategorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  topics: [topicSchema],
});

export default subCategorySchema;
