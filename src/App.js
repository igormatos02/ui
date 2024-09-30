import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import CheckboxExample from "./components/CheckboxExample";
import TabExample from "./components/TabExample";
import MenuButtonExample from "./components/MenuButtonExample";
import  ButtonExample  from "./components/ButtonExample";
import  PeakerExample  from "./components/PeakerExample";


function App() {
  return (
   
    <Router>
    <div style={{ display: "flex" }}>
      <Navbar />
      <div style={{ marginLeft: "220px", padding: "20px" }}>
      <div>https://vibe.monday.com/?path=/docs/data-display-divider--docs</div>
        <Routes>
          <Route path="/" element={<h2>Welcome to the App!</h2>} />
          <Route path="/" element={<h2>Welcome to the App!</h2>} />
          <Route path="/buttons" element={<ButtonExample />} />
          <Route path="/peakers" element={<PeakerExample />} />
          
          <Route path="/tab" element={<TabExample />} />
         <Route path="/menuButton"  element={<MenuButtonExample />} ></Route>
        </Routes>
      </div>
    </div>
  </Router>
  );
}

export default App;