import React, { useState } from "react";
import { Checkbox } from "monday-ui-react-core";

import "monday-ui-react-core/dist/main.css";  // Import the default styles
function CheckboxExample() {
 
    const tasks = [
        "Design Homepage",
        "Develop API",
        "Test Application",
        "Deploy to Production",
      ];
      const [checkedItems, setCheckedItems] = useState([false, false, false, false]);
      const handleCheckboxChange = (index) => {
        const updatedCheckedItems = [...checkedItems];
        updatedCheckedItems[index] = !updatedCheckedItems[index]; // Toggle the checked state
        setCheckedItems(updatedCheckedItems);
      };
  return (
    <div>
      
<h1>Task List with Checkboxes</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ display: "flex", alignItems: "center" }}>
            <Checkbox
              checked={checkedItems[index]}
              onChange={() => handleCheckboxChange(index)}
            />
            <span style={{ marginLeft: "8px" }}>{task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CheckboxExample;