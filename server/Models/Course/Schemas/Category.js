// Libraries
import { Schema } from "mongoose";

// Schemas
import subCategorySchema from "./SubCategories";

const categorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  subCategories: [subCategorySchema],
});

export default categorySchema;
