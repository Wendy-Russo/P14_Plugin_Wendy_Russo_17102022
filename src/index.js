import React from 'react';
import { createRoot } from 'react-dom/client';
import DropdownPlugin from "./lib/DropdownPlugin"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"


const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    <DropdownPlugin options={["a","b","c"]} defaultValue={"aaa"} />
  </div>
);

const CONTAINER = document.getElementById("root")
const ROOT = createRoot(CONTAINER);
ROOT.render(<App />);