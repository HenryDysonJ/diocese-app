import React from "react";
import { RiDoorOpenFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Navbar.css";

const Navbar = () => {
  let navigate = useNavigate();
  const loginClick = () => {
    navigate("/");
  };
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <div className="titles">
          <li className="tit1">Diocese of Hosur</li>
          <li className="tit2">v0.1.6</li>
        </div>
        <div>
          <Button className="icon" onClick={loginClick}>
            <RiDoorOpenFill />
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
