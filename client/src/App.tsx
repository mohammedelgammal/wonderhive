// Components
import router from "Routing/routerConfig";

// Libraries
import { RouterProvider } from "react-router-dom";

// Styles
import Style from "./App.module.css";

const App: React.FC = (): React.ReactNode => {
  return (
    <div className={Style.app}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
