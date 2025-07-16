import React from "react";
import "./style.css";
import filterLogo from "../img/filterLogo.png"
import arrowBot from "../img/arrowBottom.png"

function LeftBar() {
  return (
    <div className="leftbar">
      <div className="filter-header">
        <img src={filterLogo} alt="" />
      </div>
      <div className="filter-group">
        <div className="filter-item">
        <p>Status</p> <img src={arrowBot} alt="" />
        </div>
        <div className="filter-item">
          <p>Price</p> <img src={arrowBot} alt="" />
        </div>
        <div className="filter-item">
          <p>Collections</p> <img src={arrowBot} alt="" />
        </div>
        <div className="filter-item">
          <p>Chains</p> <img src={arrowBot} alt="" />
        </div>
        <div className="filter-item">
          <p>Categories</p> <img src={arrowBot} alt="" />
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
