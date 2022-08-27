import Button from "react-bootstrap/Button";
import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";
import Navbar from "../Navbar/Navbar";

const Homepage = () => {
  let navigate = useNavigate();

  const handlePview = () => {
      navigate("/parish");
  };
  const handleAview=()=>{
    navigate("/A")
  }
  const handleBview=()=>{
    navigate("/B")
  }
  const handleAdd = () => {
    navigate("/add");
  };
  return (
    <div>
      <Navbar />
      <div className="body">
        <h4>Certificates (3)</h4>
        <div className="cardbody">
          <Card style={{ width: "80rem", height: "4.5rem" }}>
            <div className="certify">
              Parish Membership Registration
              <div className="button">
                <Button
                  className="margin"
                  onClick={handlePview}
                  variant="outline-primary"
                >
                  VIEW
                </Button>

                <Button
                  className="margin"
                  onClick={handleAdd}
                  variant="primary"
                >
                  + ADD ENTRY
                </Button>
              </div>
            </div>
          </Card>
        </div>
        <div className="cardbody">
          <Card style={{ width: "80rem", height: "4.5rem" }}>
            <Card.Title className="certify">Certificate A</Card.Title>
            <div className="button">
              <Button
                className="margin"
                onClick={handleAview}
                variant="outline-primary"
              >
                VIEW
              </Button>

              <Button className="margin" onClick={handleAdd} variant="primary">
                + ADD ENTRY
              </Button>
            </div>
          </Card>
        </div>
        <div className="cardbody">
          <Card style={{ width: "80rem", height: "4.5rem" }}>
            <Card.Title className="certify">Certificate B</Card.Title>
            <div className="button">
              <Button
                className="margin"
                onClick={handleBview}
                variant="outline-primary"
              >
                VIEW
              </Button>

              <Button className="margin" onClick={handleAdd} variant="primary">
                + ADD ENTRY
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
