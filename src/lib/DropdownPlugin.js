import React,{ useState } from "react";
import iconUP from "./icons/caret-up-solid.svg"
import iconDOWN from "./icons/caret-down-solid.svg"
function DropdownPlugin(props){

  const OPTIONS = props.options;
  const DEFAULT_VALUE = props.defaultValue;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [valueID, updateValueID] = useState(0);
  const [value, updateValue] = useState("");
  const [displayValue, updateDisplayValue] = useState(props.defaultValue);
  const icon = ( isDropdownOpen ? iconUP : iconDOWN );
  const listClass = "dropdown-options bg-white list-decoration-none p-0 m-0" +( isDropdownOpen ? "" : " d-none" );

  function makeOptions(array){
    if(OPTIONS){
      return(
        array.map(
          (elem,id) =>
          <li key={id} className="list-group-item">
            <button type="button" onClick={(e) => handleSelect(e)} id={"dropdown-option-"+id} className=" w-100 list-group-item text-dark text-center border-top p-2 d-flex">
              {elem}
            </button>
          </li>
        )
      )
    }
    else{
      console.log("Please use the 'options' prop to pass down options")
    }
    
  }

  function handleSelect(e){

    updateValue(e.target.innerHTML);
    toggleDropdown();
    updateDisplayValue(e.target.innerHTML);
  }

  function toggleDropdown(){

    setIsDropdownOpen(!isDropdownOpen);

  }

  function handleWheel(event){

    event.preventDefault();
    const SCROLL_AMOUNT = event.nativeEvent.wheelDeltaY;

    let newValueID ;

    (SCROLL_AMOUNT > 0) && (newValueID = Math.max( 0 , valueID-1));

    (SCROLL_AMOUNT < 0) && (newValueID = Math.min( OPTIONS.length-1 , valueID+1));

    updateValue(OPTIONS[newValueID]);
    updateDisplayValue(OPTIONS[newValueID]);
    updateValueID(newValueID);

  }

  return(
    <div id="dropdown-plugin" className="w-100 dropdown-container btn border-dark border border-2 border-opacity-50 bg-white p-0">
      <div className="w-100 me-auto ">

        <button id={DEFAULT_VALUE} value={value} onWheel={handleWheel} onClick={toggleDropdown} type="button" className="ms-0 w-100 dropdown-button border-0 bg-transparent me-auto d-flex justify-content-between align-items-center p-2">
          <span className="">
            {displayValue}
          </span>

          <img alt="open or close icon" src={icon} height="24px" />

        </button>
        
      </div>
      
      <ul className={listClass}>
        {makeOptions(OPTIONS)}
      </ul>

    </div>

  )
}

export default DropdownPlugin
