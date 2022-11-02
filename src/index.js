import React from 'react';
import { render } from "react-dom";
import DropdownPlugin from "./lib/DropdownPlugin"

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    <DropdownPlugin defaultValue={"aaa"} />
  </div>
);

render(<App />, document.getElementById("root"));