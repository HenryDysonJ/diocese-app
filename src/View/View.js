import React from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import "./View.css";

const View = () => {
  let data = localStorage.getItem("data");
  let newData = JSON.parse(data);
  console.log("localdata", newData);

  return (
    <div>
      <div className="card-bo">
        <Card style={{ width: "75rem", height: "27rem" }}>
          <Table responsive css-serial>
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
              {newData.map((val, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{val.name}</td>
                    <td>{val.Mobile}</td>
                    <td>{val.dob}</td>
                    <td>{val.Family}</td>
                    <td>{val.NFamily}</td>
                    <td>{val.Relation}</td>
                    <td>{val.Baptism}</td>
                    <td>{val.Marriage}</td>
                    <td>{val.Profession}</td>
                    <td>{val.Address}</td>
                    <td>{val.Diocese}</td>
                    <td>{val.Malabar}</td>
                    <td>{val.Members}</td>
                  </tr>
                );
              })}
            </thead>
            <tbody>
              <tr></tr>
            </tbody>
          </Table>
        </Card>
      </div>
    </div>
  );
};

export default View;
