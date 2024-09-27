import React, { useState } from "react";
import {Tab, TabList, TabPanel,Button } from "monday-ui-react-core";
import "monday-ui-react-core/dist/main.css";


function TabExample() {
  const [activeTab, setActiveTab] = useState(0);

  // Function to handle tab click
  const handleTabChange = (index) => {
    setActiveTab(index);
  };
  return (
    <div>
      <h1>Tabbed Interface Example</h1>
      <TabList activeTabId={activeTab} onTabChange={handleTabChange}>
        <Tab id={0}>Tab 1</Tab>
        <Tab id={1}>Tab 2</Tab>
        <Tab id={2}>Tab 3</Tab>
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
  );
}

export default TabExample;