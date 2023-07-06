import { useState } from "react";

// Styles
import Style from "./Login.module.css";

const Login = () => {
  const [formData, setFormData] = useState({
      username: "",
      password: "",
    }),
    submitFormhandler = (e) => {
      e.preventDefault();
      console.log(formData);
    };

  return (
    <div className={Style.login}>
      <h1>Login</h1>
      <form>
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
        <button
          disabled={!formData.password || !formData.username}
          onClick={submitFormhandler}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
