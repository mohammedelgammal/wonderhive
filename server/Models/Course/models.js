// Libraries
import { model } from "mongoose";

// Schemas
import {
  TopicSchema,
  subCategorySchema,
  categorySchema,
  categorySchema,
} from "./Schemas";

const TopicModel = model("Topic", TopicSchema);
const SubCategoryModel = model("SubCategory", subCategorySchema);
const CategoryModel = model("Category", categorySchema);

export { TopicModel, SubCategoryModel, CategoryModel };
