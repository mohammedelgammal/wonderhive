// Libraries
import { model } from "mongoose";

// Schemas
import TopicSchema from "./Schemas/Topic.js";
import subCategorySchema from "./Schemas/SubCategory.js";
import categorySchema from "./Schemas/Category.js";

const TopicModel = model("Topic", TopicSchema);
const SubCategoryModel = model("SubCategory", subCategorySchema);
const CategoryModel = model("Category", categorySchema);

export { TopicModel, SubCategoryModel, CategoryModel };
