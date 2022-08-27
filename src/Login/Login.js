import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const loginSubmit = (e) => {
    e.preventDefault();
    if (data.username === "" && data.password !== "") {
      alert("must fill  username");
    } else if (data.username !== "" && data.password === "") {
      alert("must fill password");
    } else if (data.username !== "" && data.password !== "") {
      navigate("/Home");
    }
  };
  return (
    <div>
      <div className="cards">
        <Card style={{ width: "28rem", height: "23rem" }}>
          <Card.Body>
            <Card.Title className="title1">Diocese of Hosur</Card.Title>
            <Card.Subtitle className="mb-2 title2">
              Login to continue
            </Card.Subtitle>
            <div className="inputs">
              <input
                type="text"
                name="username"
                value={data.username}
                className="form-control"
                onChange={handleChange}
                placeholder="Username"
              />

              <input
                type="password"
                name="password"
                value={data.password}
                className="form-control"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <div className="d-grid gap-2 container inputs">
              <button
                className="btn btn-primary"
                type="button"
                onClick={loginSubmit}
              >
                Login
              </button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Login;
