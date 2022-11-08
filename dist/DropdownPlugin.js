import React, { useState } from "react";
import iconUP from "./icons/caret-up-solid.svg";
import iconDOWN from "./icons/caret-down-solid.svg";
function DropdownPlugin(props) {
  const OPTIONS = props.options;
  const DEFAULT_VALUE = props.defaultValue;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [valueID, updateValueID] = useState(0);
  const [value, updateValue] = useState(props.defaultValue);
  const icon = isDropdownOpen ? iconUP : iconDOWN;
  const listClass = "dropdown-options bg-white list-decoration-none p-0 m-0" + (isDropdownOpen ? "" : " d-none");
  function makeOptions(array) {
    if (OPTIONS) {
      return array.map((elem, id) => /*#__PURE__*/React.createElement("li", {
        key: id,
        className: "list-group-item"
      }, /*#__PURE__*/React.createElement("button", {
        type: "button",
        onClick: e => handleSelect(e),
        id: "dropdown-option-" + id,
        className: " w-100 list-group-item text-dark text-center border-top p-2 d-flex"
      }, elem)));
    } else {
      console.log("Please use the 'options' prop to pass down options");
    }
  }
  function handleSelect(e) {
    updateValue(e.target.innerHTML);
    toggleDropdown();
  }
  function toggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen);
  }
  function handleWheel(event) {
    event.preventDefault();
    const SCROLL_AMOUNT = event.nativeEvent.wheelDeltaY;
    let newValueID;
    SCROLL_AMOUNT > 0 && (newValueID = Math.max(0, valueID - 1));
    SCROLL_AMOUNT < 0 && (newValueID = Math.min(OPTIONS.length - 1, valueID + 1));
    updateValue(OPTIONS[newValueID]);
    updateValueID(newValueID);
  }
  return /*#__PURE__*/React.createElement("div", {
    id: "dropdown-plugin",
    className: "w-100 dropdown-container btn border-dark border border-2 border-opacity-50 bg-white p-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-100 me-auto "
  }, /*#__PURE__*/React.createElement("button", {
    id: DEFAULT_VALUE,
    value: value,
    onWheel: handleWheel,
    onClick: toggleDropdown,
    type: "button",
    className: "ms-0 w-100 dropdown-button border-0 bg-transparent me-auto d-flex justify-content-between align-items-center p-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: ""
  }, value), /*#__PURE__*/React.createElement("img", {
    alt: "open or close icon",
    src: icon,
    height: "24px"
  }))), /*#__PURE__*/React.createElement("ul", {
    className: listClass
  }, makeOptions(OPTIONS)));
}
export default DropdownPlugin;