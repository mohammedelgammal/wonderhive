// Components
import { AuthLayout, MainLayout } from "Layouts";

// Libraries
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "courses/",
        // element: <Courses />,
      },
    ],
  },
  {
    path: "auth/",
    element: <AuthLayout />,
    children: [{ path: "login", element: <div>Login</div> }],
  },
]);

export default router;
