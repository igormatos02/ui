import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import CheckboxExample from "./components/CheckboxExample";
import TabExample from "./components/TabExample";
import MenuButtonExample from "./components/MenuButtonExample";



function App() {
  return (
    <Router>
    <div style={{ display: "flex" }}>
      <Navbar />
      <div style={{ marginLeft: "220px", padding: "20px" }}>
        <Routes>
          <Route path="/" element={<h2>Welcome to the App!</h2>} />
          <Route path="/checkbox" element={<CheckboxExample />} />
          <Route path="/tab" element={<TabExample />} />
         <Route path="/menuButton"  element={<MenuButtonExample />} ></Route>
        </Routes>
      </div>
    </div>
  </Router>
  );
}

export default App;