import React, { useState } from "react";
import TopNavbar from "./TopNavBar";
import DashBoard from "./DashBoard";
import Patients from "./Components/Patients";

const appStyle = {
  position: "absolute",
  top: "0px",
  left: "0px",
  width: "1600px",
  height: "1195px",
  background: "#F6F7F8",
  opacity: 1,
};

function App() {
  return (
    <div style={appStyle}>
      <TopNavbar />
      <DashBoard />
      <Patients />
      
    </div>
  );
}


export default App;