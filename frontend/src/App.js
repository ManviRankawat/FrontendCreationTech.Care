import React from "react";
import TopNavbar from "./TopNavBar";
import DashBoard from "./DashBoard";

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
    </div>
  );
}

export default App;
