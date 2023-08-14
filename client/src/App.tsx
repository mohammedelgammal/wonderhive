// Components
import Router from './Routing/'

// Libraries
import { RouterProvider } from "react-router-dom";
// Styles
import Style from "./App.module.css";

const App = () => {
  return (
    <div className={Style.app}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
