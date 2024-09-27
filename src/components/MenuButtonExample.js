import React, { useState } from "react";
import { Button, Menu, MenuItem } from "monday-ui-react-core";
import "monday-ui-react-core/dist/main.css";

function MenuButtonExample() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (item) => {
    alert(`You clicked on ${item}`);
    setIsOpen(false); // Close the menu after an item is clicked
  };

  return (
    <div style={{ position: "relative" }}>
      <Button onClick={toggleMenu} style={{ marginBottom: "10px" }}>
        Menu
      </Button>
      {isOpen && (
        <Menu style={{ position: "absolute", zIndex: 100 }}>
          <MenuItem onClick={() => handleMenuItemClick("Item 1")} title="Item 1" />
          <MenuItem onClick={() => handleMenuItemClick("Item 2")} title="Item 2" />
          <MenuItem onClick={() => handleMenuItemClick("Item 3")} title="Item 3" />
        </Menu>
      )}
    </div>
  );
}

export default MenuButtonExample;