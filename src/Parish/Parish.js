import React from "react";
import View from "../View/View";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
const Parish = () => {
  let data = localStorage.getItem("data");
  let newData = JSON.parse(data);
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="viewhead d-flex">
        <div className="arrow">
          <Link to="/Home">
            <HiOutlineArrowNarrowLeft />
          </Link>
        </div>
        <div className="titile">
          <h4>Parish Membership Registration ({newData.length})</h4>
        </div>
      </div>
      <div>
        <View />
      </div>
    </div>
  );
};

export default Parish;
