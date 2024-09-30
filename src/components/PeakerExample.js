import React, { useState } from "react";
import { DatePicker, DialogContentContainer,Divider } from "monday-ui-react-core";
import "monday-ui-react-core/dist/main.css";  // Import the default styles


function PeakerExample() {
  const MOCK_INITIAL_DATE = new Date("2023-09-27");
  const [date, setDate] = useState(MOCK_INITIAL_DATE);  // Use MOCK_INITIAL_DATE directly
  
  return (
    <div>
       <h1>Date Peaker with Range</h1>
       <Divider />
      {/* Ensure you import and reference the styles */}
      <DialogContentContainer className="datepickerDialogContentContainer">
        <DatePicker
          numberOfMonths={2}
          range data-testid="date-picker"
          onPickDate={d => setDate(d)}
          date={date.startDate}
          endDate={date.endDate}
        />
      </DialogContentContainer>
      <h1>Simple Date Peaker</h1>
      <Divider />
      <DialogContentContainer className="DatePicker-stories-module_datepickerDialogContentContainer">
  <DatePicker
    data-testid="date-picker"
    date={date.startDate}
    onPickDate={function noRefCheck(){}}
  />
</DialogContentContainer>
    </div>
  );
}

export default PeakerExample;
