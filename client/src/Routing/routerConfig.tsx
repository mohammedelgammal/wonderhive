// Components
import { AuthLayout, MainLayout } from "Layouts";
import { Login } from "Features";

// Routes
import paths from "Data/Constants/Routes/paths";

// Libraries
import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: paths.MAIN.homepage,
    element: <MainLayout />,
  },
  {
    path: paths.AUTH.login,
    element: <AuthLayout />,
    children: [
      {
        path: paths.AUTH.login,
        element: <Login />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
