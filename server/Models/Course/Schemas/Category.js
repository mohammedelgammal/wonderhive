// Libraries
import { Schema } from "mongoose";

// Schemas
import subCategorySchema from "./SubCategory.js";

const categorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  subCategories: [subCategorySchema],
});

export default categorySchema;
