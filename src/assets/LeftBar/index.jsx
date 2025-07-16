import React, { useState } from "react";
import "./style.css";
import filterLogo from "../img/filterLogo.png";
import arrowBot from "../img/arrowBottom.png";

function LeftBar() {
  const [openIndex, setOpenIndex] = useState(null);

  const filters = ["Status", "Price", "Collections", "Chains", "Categories"];

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index); // закрывает, если уже открыт
  };

  return (
    <div className="leftbar">
      <div className="filter-header">
        <img src={filterLogo} alt="Filter" />
      </div>
      <div className="filter-group">
        {filters.map((filter, index) => (
          <div key={filter}>
            <div
              className={`filter-item ${openIndex === index ? "active" : ""}`}
              onClick={() => handleClick(index)}
            >
              <p>{filter}</p>
              <img src={arrowBot} alt="Arrow" />
            </div>
            {openIndex === index && (
              <div className="dropdown-content">
                <p>{filter}</p>
                <p>{filter}</p>
                <p>{filter}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeftBar;
