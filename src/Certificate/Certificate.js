import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Navbar from "../Navbar/Navbar";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Table from "react-bootstrap/Table";
import "./Certificate.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Certificate = () => {
  let navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    Mobile: "",
    dob: "",
    Family: "",
    NFamily: "",
    Diocese: "",
    Relation: "",
    Baptism: "",
    Marriage: "",
    Address: "",
    Malabar: "",
    Members: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleCancel = () => {
    navigate("/Home");
  };
  const handleSubmit = () => {
    alert("Form Submitted Successfully!!!");
    let localdata = localStorage.getItem("data");
    if (localdata) {
      let local = JSON.parse(localdata);
      local.push(data);
      localStorage.setItem("data", JSON.stringify(local));
    } else {
      localStorage.setItem("data", JSON.stringify([data]));
    }
    navigate("/parish");
  };

  return (
    <div>
      <Navbar />

      <div className="card-bo">
        <Card style={{ width: "60rem", height: "60rem" }}>
          <div className="arrow">
            <Link to="/Home">
              <HiOutlineArrowNarrowLeft />
            </Link>
          </div>
          <div className="form-top cool-12">
            <span className="head1">DIOCESE OF HOSUR</span>
            <br />
            <span className="head2">PARISH MEMBERSHIP REGISTRATION</span>
            <br />
            <span className="head3">(Aatmasthithi Book)</span>
          </div>
          <div className="form1 ">
            <Box
              component="form"
              sx={{
                "& > :not(style)": { width: "95ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div className="labl1 d-flex">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Name of Head of the Family"
                  variant="outlined"
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Family Name"
                  variant="outlined"
                  onChange={handleChange}
                />
              </div>
              <div className="labl1">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                  onChange={handleChange}
                />
              </div>
            </Box>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { width: "95ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div className="labl1 d-flex ">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                  onChange={handleChange}
                />
                <div className="comu">
                  <span className="comunity">Community</span>
                  <div className="d-flex">
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Syro Malabar"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Syro Malankara"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Latin"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Others"
                      labelPlacement="end"
                    />{" "}
                  </div>
                </div>
              </div>
            </Box>
          </div>
          <div className="form2">
            <span className="famly">Family Members</span>
            <div>
              <Card
                className="form2"
                style={{ width: "53rem", height: "26rem" }}
              >
                <Table responsive className="table ">
                  <thead>
                    <tr>
                      <th>Sl.No</th>
                      <th>Name</th>
                      <th>Mobile No</th>
                      <th>Date of Birth</th>
                      <th>Family Name</th>
                      <th>Name of the Family</th>
                      <th>Relationship with Head </th>
                      <th>Baptism</th>
                      <th>Marriage/Ordination</th>
                      <th>Profession</th>
                      <th>Address</th>
                      <th>Diocese of Kerala</th>
                      <th>syro Malabar</th>
                      <th>Members Count</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>
                        <input
                          type="text"
                          name="name"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name="Mobile"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="dob"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Family"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="NFamily"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          name="Relation"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <input
                        type="text"
                        name="Baptism"
                        onChange={handleChange}
                        className="border border-0"
                      />{" "}
                      <td>
                        <input
                          type="text"
                          name="Marriage"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Diocese"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>{" "}
                      <td>
                        <input
                          type="text"
                          name="Profession"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>{" "}
                      <td>
                        <input
                          type="text"
                          name="Address"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Malabar"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>{" "}
                      <td>
                        <input
                          type="text"
                          name="Members"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <input
                          type="text"
                          name="name"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name="Mobile"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="dob"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Family"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="NFamily"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          name="Relation"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <input
                        type="text"
                        name="Baptism"
                        onChange={handleChange}
                        className="border border-0"
                      />{" "}
                      <td>
                        <input
                          type="text"
                          name="Marriage"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Diocese"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>{" "}
                      <td>
                        <input
                          type="text"
                          name="Profession"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>{" "}
                      <td>
                        <input
                          type="text"
                          name="Address"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Malabar"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>{" "}
                      <td>
                        <input
                          type="text"
                          name="Members"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <input
                          type="text"
                          name="name"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name="Mobile"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="dob"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Family"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="NFamily"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          name="Relation"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <input
                        type="text"
                        name="Baptism"
                        onChange={handleChange}
                        className="border border-0"
                      />{" "}
                      <td>
                        <input
                          type="text"
                          name="Marriage"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Diocese"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>{" "}
                      <td>
                        <input
                          type="text"
                          name="Profession"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>{" "}
                      <td>
                        <input
                          type="text"
                          name="Address"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Malabar"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>{" "}
                      <td>
                        <input
                          type="text"
                          name="Members"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                    </tr>{" "}
                    <tr>
                      <td>4</td>
                      <td>
                        <input
                          type="text"
                          name="name"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name="Mobile"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="dob"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Family"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="NFamily"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          name="Relation"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <input
                        type="text"
                        name="Baptism"
                        onChange={handleChange}
                        className="border border-0"
                      />{" "}
                      <td>
                        <input
                          type="text"
                          name="Marriage"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Diocese"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>{" "}
                      <td>
                        <input
                          type="text"
                          name="Profession"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>{" "}
                      <td>
                        <input
                          type="text"
                          name="Address"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Malabar"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>{" "}
                      <td>
                        <input
                          type="text"
                          name="Members"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                    </tr>{" "}
                    <tr>
                      <td>5</td>
                      <td>
                        <input
                          type="text"
                          name="name"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name="Mobile"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="dob"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Family"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="NFamily"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          name="Relation"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <input
                        type="text"
                        name="Baptism"
                        onChange={handleChange}
                        className="border border-0"
                      />{" "}
                      <td>
                        <input
                          type="text"
                          name="Marriage"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Diocese"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>{" "}
                      <td>
                        <input
                          type="text"
                          name="Profession"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>{" "}
                      <td>
                        <input
                          type="text"
                          name="Address"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Malabar"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>{" "}
                      <td>
                        <input
                          type="text"
                          name="Members"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                    </tr>{" "}
                    <tr>
                      <td>6</td>
                      <td>
                        <input
                          type="text"
                          name="name"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name="Mobile"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="dob"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Family"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="NFamily"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          name="Relation"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <input
                        type="text"
                        name="Baptism"
                        onChange={handleChange}
                        className="border border-0"
                      />{" "}
                      <td>
                        <input
                          type="text"
                          name="Marriage"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Diocese"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>{" "}
                      <td>
                        <input
                          type="text"
                          name="Profession"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>{" "}
                      <td>
                        <input
                          type="text"
                          name="Address"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Malabar"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>{" "}
                      <td>
                        <input
                          type="text"
                          name="Members"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                    </tr>{" "}
                    <tr>
                      <td>7</td>
                      <td>
                        <input
                          type="text"
                          name="name"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name="Mobile"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="dob"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Family"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="NFamily"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          name="Relation"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <input
                        type="text"
                        name="Baptism"
                        onChange={handleChange}
                        className="border border-0"
                      />{" "}
                      <td>
                        <input
                          type="text"
                          name="Marriage"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Diocese"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>{" "}
                      <td>
                        <input
                          type="text"
                          name="Profession"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>{" "}
                      <td>
                        <input
                          type="text"
                          name="Address"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Malabar"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>{" "}
                      <td>
                        <input
                          type="text"
                          name="Members"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                    </tr>{" "}
                    <tr>
                      <td>8</td>
                      <td>
                        <input
                          type="text"
                          name="name"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name="Mobile"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="dob"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Family"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="NFamily"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          name="Relation"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <input
                        type="text"
                        name="Baptism"
                        onChange={handleChange}
                        className="border border-0"
                      />{" "}
                      <td>
                        <input
                          type="text"
                          name="Marriage"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Diocese"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>{" "}
                      <td>
                        <input
                          type="text"
                          name="Profession"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>{" "}
                      <td>
                        <input
                          type="text"
                          name="Address"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Malabar"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>{" "}
                      <td>
                        <input
                          type="text"
                          name="Members"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                    </tr>{" "}
                    <tr>
                      <td>9</td>
                      <td>
                        <input
                          type="text"
                          name="name"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name="Mobile"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="dob"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Family"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="NFamily"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          name="Relation"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <input
                        type="text"
                        name="Baptism"
                        onChange={handleChange}
                        className="border border-0"
                      />{" "}
                      <td>
                        <input
                          type="text"
                          name="Marriage"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Diocese"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>{" "}
                      <td>
                        <input
                          type="text"
                          name="Profession"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>{" "}
                      <td>
                        <input
                          type="text"
                          name="Address"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Malabar"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>{" "}
                      <td>
                        <input
                          type="text"
                          name="Members"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                    </tr>{" "}
                    <tr>
                      <td>10</td>
                      <td>
                        <input
                          type="text"
                          name="name"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name="Mobile"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="dob"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Family"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="NFamily"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        {" "}
                        <input
                          type="text"
                          name="Relation"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <input
                        type="text"
                        name="Baptism"
                        onChange={handleChange}
                        className="border border-0"
                      />{" "}
                      <td>
                        <input
                          type="text"
                          name="Marriage"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Diocese"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>{" "}
                      <td>
                        <input
                          type="text"
                          name="Profession"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>{" "}
                      <td>
                        <input
                          type="text"
                          name="Address"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Malabar"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>{" "}
                      <td>
                        <input
                          type="text"
                          name="Members"
                          onChange={handleChange}
                          className="border border-0"
                        />
                      </td>
                    </tr>{" "}
                    
                  </thead>
                  <tbody>
                    <tr></tr>
                  </tbody>
                </Table>
              </Card>
            </div>
          </div>
          <div className="buttons">
            <Button
              className="margin"
              onClick={handleCancel}
              variant="outline-primary"
            >
              Cancel
            </Button>

            <Button className="margin" onClick={handleSubmit} variant="primary">
              Submt
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Certificate;
