// Components
import { AuthLayout, MainLayout } from "Layouts";

// Routes
import paths from "Data/Constants/Routes/paths";

// Libraries
import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: paths.MAIN.homepage,
    element: <MainLayout />,
    children: [
      {
        path: paths.MAIN.courses,
        // element: <div>This is courses</div>,
      },
    ],
  },
  {
    path: paths.AUTH.login,
    element: <AuthLayout />,
    children: [
      {
        path: paths.AUTH.login,
        // element: <div>Login</div>
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
