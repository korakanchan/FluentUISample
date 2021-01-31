import "./App.css";
import { initializeIcons, PrimaryButton } from "@fluentui/react";
import React from "react";

initializeIcons();

const clickMe = () => {
  alert("hello world");
};
function App() {
  return <PrimaryButton text="Click Me" onClick={clickMe} />;
}

export default App;
