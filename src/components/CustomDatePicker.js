import React, { useState } from "react";
import { TextField, DatePicker, DialogContentContainer, Divider } from "monday-ui-react-core";

const CustomDatePicker = () => {
  const [date, setDate] = useState({ startDate: null, endDate: null });
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // Function to toggle the DatePicker visibility
  const handleToggleDatePicker = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle date selection
  const handlePickDate = (pickedDate) => {
    const formattedDate = pickedDate ? pickedDate.toLocaleDateString() : "";
    setDate({ startDate: pickedDate, endDate: null });
    setInputValue(formattedDate);
    setIsOpen(false); // Close DatePicker after selecting a date
  };

  // Function to handle typing in the text field
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="monday-storybook-text-field_size">
      {/* TextField component */}
      <TextField
        size={TextField.sizes.MEDIUM}
        type={TextField.types.DATE_TIME}
        value={inputValue}
        onIconClick={handleToggleDatePicker} // Show DatePicker on click
        onChange={handleInputChange} // Allow manual input
        placeholder="Pick or type a date"
      />

      {/* DialogContentContainer for the DatePicker */}
      {isOpen && (
        <DialogContentContainer>
          <DatePicker
           
            data-testid="date-picker"
            onPickDate={(pickedDate) => handlePickDate(pickedDate)}
            date={date.startDate}
            endDate={date.endDate}
          />
          <Divider />
        </DialogContentContainer>
      )}
    </div>
  );
};

export default CustomDatePicker;
