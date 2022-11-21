import React, { useState } from "react";
import arrow from "./Images/arrow.png";
import "./CSS/style.css";

export default function Dropdown({ label, arr, field }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Choose");
  const handleOpen = () => {
    setOpen(!open);
  };

  function selectedValue(e) {
    setSelected(e.target.innerText);
  }

  return (
    <>
      <div className="dropdown">
        <label className="dropdownLabel"> {label} </label>
        <button className="dropdownButton" onClick={handleOpen}>
          <p>{selected}</p>
          {open ? (
            <img alt="arrow up" className="arrow active" src={arrow} />
          ) : (
            <img alt="arrow down" className="arrow" src={arrow} />
          )}
        </button>

        {open ? (
          <div className="dropdownOptionsContainer">
            <ul>
              {arr.map((item) => (
                <li
                  value={selected}
                  className="dropdownOption"
                  key={item[field]}
                  onClick={selectedValue}
                >
                  {item[field]}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
}
