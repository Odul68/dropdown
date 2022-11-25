import React, { useEffect, useState } from "react";
import arrow from "./Images/arrow.png";
import "./CSS/style.css";

export default function Dropdown({ label, arr, field, selected, onClick }) {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState(arr);

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (!field) {
      const updateList = arr.map((item) => JSON.stringify(item));
      setList(updateList);
    }
  }, [arr, field]);

  return (
    <>
      <div className="dropdown">
        <label className="dropdownLabel"> {label} </label>
        <button type="button" className="dropdownButton" onClick={handleOpen}>
          <p>{selected[field]}</p>
          {open ? (
            <img alt="arrow up" className="arrow active" src={arrow} />
          ) : (
            <img alt="arrow down" className="arrow" src={arrow} />
          )}
        </button>

        {open ? (
          <div className="dropdownOptionsContainer">
            <ul>
              {list.map((item) => (
                <li
                  className="dropdownOption"
                  key={item?.[field] || item}
                  onClick={() => onClick(item)}
                >
                  {item?.[field] || item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
}
