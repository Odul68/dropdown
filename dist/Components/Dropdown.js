"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Dropdown;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.json.stringify.js");
var _react = _interopRequireWildcard(require("react"));
var _arrow = _interopRequireDefault(require("./Images/arrow.png"));
require("./CSS/style.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Dropdown(_ref) {
  let {
    label,
    arr,
    field,
    selected,
    onClick: _onClick
  } = _ref;
  const [open, setOpen] = (0, _react.useState)(false);
  const [list, setList] = (0, _react.useState)(arr);
  const handleOpen = () => {
    setOpen(!open);
  };
  (0, _react.useEffect)(() => {
    if (!field) {
      const updateList = arr.map(item => JSON.stringify(item));
      setList(updateList);
    }
  }, [arr, field]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown"
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "dropdownLabel"
  }, " ", label, " "), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "dropdownButton",
    onClick: handleOpen
  }, /*#__PURE__*/_react.default.createElement("p", null, selected[field]), open ? /*#__PURE__*/_react.default.createElement("img", {
    alt: "arrow up",
    className: "arrow active",
    src: _arrow.default
  }) : /*#__PURE__*/_react.default.createElement("img", {
    alt: "arrow down",
    className: "arrow",
    src: _arrow.default
  })), open ? /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdownOptionsContainer"
  }, /*#__PURE__*/_react.default.createElement("ul", null, list.map(item => /*#__PURE__*/_react.default.createElement("li", {
    className: "dropdownOption",
    key: (item === null || item === void 0 ? void 0 : item[field]) || item,
    onClick: () => _onClick(item)
  }, (item === null || item === void 0 ? void 0 : item[field]) || item)))) : null));
}