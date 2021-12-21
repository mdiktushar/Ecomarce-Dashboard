import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Navebar/Header";
const Login = () => {
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/add");
    }
  }, []);

  const login = async () => {
    let data = { email, password };
    let result = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(data),
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    history.push("/add");
  };

  return (
    <div>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h1>Login</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="form-control"
        />
        <br />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="form-control"
        />
        <br />

        <button onClick={login} className="btn btn-primary">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
