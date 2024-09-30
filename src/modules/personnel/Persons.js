// Home.js
import React, { useState } from "react";
import {Tab, TabList, TabPanel,Button } from "monday-ui-react-core";
import "monday-ui-react-core/dist/main.css";
import { MdOutlinePersonSearch } from "react-icons/md";
const Persons = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Function to handle tab click
  const handleTabChange = (index) => {
    setActiveTab(index);
  };
  return (
    <div>
       <div className="program-title"> <MdOutlinePersonSearch /> Persons</div>
       <div className="program-panel">
        
        <TabList  activeTabId={activeTab}  className="tab-list" onTabChange={handleTabChange}>
          <Tab id={0}>General</Tab>
          <Tab id={1}>Address</Tab>
          <Tab id={2}>Contact</Tab>
          <Tab id={2}>Aditional Data</Tab>
          <Tab id={2}>Company</Tab>
          <Tab id={2}>Remarks</Tab>
          <Tab id={2}>Cards</Tab>
          <Tab id={2}>Elevator</Tab>
          <Tab id={2}>Extra Info</Tab>
          <Tab id={2}>Signature</Tab>
          <Tab id={2}>Fingerprints</Tab>
        </TabList>

        {/* Tab Panels (Content for each tab) */}
        {activeTab === 0 && (
          <TabPanel>
            <h2>Content for Tab 1</h2>
            <p>This is the content of the first tab.</p>
            <Button kind={Button.kinds.PRIMARY}>Click Me</Button>
          </TabPanel>
        )}
        {activeTab === 1 && (
          <TabPanel>
            <h2>Content for Tab 2</h2>
            <p>This is the content of the second tab.</p>
          </TabPanel>
        )}
        {activeTab === 2 && (
          <TabPanel>
            <h2>Content for Tab 3</h2>
            <p>This is the content of the third tab.</p>
          </TabPanel>
        )}

      </div>
    </div>
  )
};




export default Persons;
