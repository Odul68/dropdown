import { useState } from "react";

export default function Dropdown({ name, arr, data, field }) {
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
      <div>
        <button className="dropdownButton" onClick={handleOpen}>
          {selected}
          {/* {open ? (
            <i className="fa-solid fa-angle-down"></i>
          ) : (
            <i className="fa-solid fa-chevron-up"></i>
          )} */}
        </button>

        {open ? (
          <div className="dropdownOptionsContainer">
            <ul>
              {arr.map((item) => (
                <li
                  value={item[field]}
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
