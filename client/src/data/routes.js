// Components
import SavedRecipes from "../Components/Recipes/SavedRecipes/SavedRecipes";
import Recipes from "../Components/Recipes/Recipes/Recipes";
import Login from "../Components/Auth/Login/Login";
import Register from "../Components/Auth/Register/Register";

// Libs
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Recipes />,
  },
  {
    path: "/saved-recipes",
    element: <SavedRecipes />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },
]);

export default router;
