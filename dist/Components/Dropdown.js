"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Dropdown;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
var _arrow = _interopRequireDefault(require("./Images/arrow.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Dropdown(_ref) {
  let {
    label,
    arr,
    field
  } = _ref;
  const [open, setOpen] = (0, _react.useState)(false);
  const [selected, setSelected] = (0, _react.useState)("Choose");
  const handleOpen = () => {
    setOpen(!open);
  };
  function selectedValue(e) {
    setSelected(e.target.innerText);
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "dropdownLabel"
  }, " ", label, " "), /*#__PURE__*/React.createElement("button", {
    className: "dropdownButton",
    onClick: handleOpen
  }, /*#__PURE__*/React.createElement("p", null, selected), open ? /*#__PURE__*/React.createElement("img", {
    alt: "arrow up",
    className: "arrow active",
    src: _arrow.default
  }) : /*#__PURE__*/React.createElement("img", {
    alt: "arrow down",
    className: "arrow",
    src: _arrow.default
  })), open ? /*#__PURE__*/React.createElement("div", {
    className: "dropdownOptionsContainer"
  }, /*#__PURE__*/React.createElement("ul", null, arr.map(item => /*#__PURE__*/React.createElement("li", {
    value: selected,
    className: "dropdownOption",
    key: item[field],
    onClick: selectedValue
  }, item[field])))) : null));
}