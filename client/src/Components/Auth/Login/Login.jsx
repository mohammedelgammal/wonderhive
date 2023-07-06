import { useState } from "react";

// Libraries
import axios from "axios";

// endPoints
import endPoints from "../../../data/endPoints";

// Styles
import Style from "./Login.module.css";

const Login = () => {
  const [formData, setFormData] = useState({
      username: "",
      password: "",
    }),
    submitFormhandler = (e) => {
      e.preventDefault();
      axios.post(endPoints.auth.login, formData).then((err, res) => {
        res ? console.log(res) : console.log("Error is: ", err);
      });
    };

  return (
    <div className={Style.login}>
      <h1>Login</h1>
      <form onSubmit={submitFormhandler}>
        <input
          className={Style.username}
          type="text"
          placeholder="Username"
          onChange={(e) =>
            setFormData({
              ...formData,
              username: e.target.value,
            })
          }
        />
        <input
          className={Style.password}
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <button disabled={!formData.password || !formData.username}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
