import React, { useState } from "react";

const FixedMenu = () => {
  return (
    <div className="tabs">
      <Tabs>
        <Tab label="Breakfast Menu1" className="font-cormantThiner uppercase">
          <div>{/* Your content for the 'Beverages' tab */}</div>
        </Tab>

        <Tab label="Breakfast Menu2">
          <div>
            <table></table>
          </div>
        </Tab>

        <Tab
          label="Breakfast Menu3
"
        >
         
        </Tab>

        <Tab
          label="Soup
"
        >
       
        </Tab>

        <Tab label="Breakfast Menu4">
          <div>
            <img className="imagesss" src="" alt="Tab 2" />
            <p>Tab 2 content</p>
          </div>
        </Tab>

        <Tab label="Lunch Menu1">
     
        </Tab>

        <Tab label="Lunch Menu2">
       
        </Tab>

        <Tab label="Lunch Menu3">

        </Tab>

        <Tab label="Lunch Menu4
">
     
        </Tab>

        <Tab label="Lunch Menu6">
        
        </Tab>

        <Tab label="Rice">
          <div>
            <img className="imagesss" src="" alt="Tab 2" />
            <p>Tab 2 content</p>
          </div>
        </Tab>

        <Tab label="Lunch Menu7">
          <div>
            <img className="imagesss" src="" alt="Tab 2" />
            <p>Tab 2 content</p>
          </div>
        </Tab>

        <Tab label="Dinner Menu1">
          <div>
            <img className="imagesss" src="" alt="Tab 2" />
            <p>Tab 2 content</p>
          </div>
        </Tab>

        <Tab label="Dinner Menu2">
          <div>
            <img className="imagesss" src="" alt="Tab 2" />
            <p>Tab 2 content</p>
          </div>
        </Tab>

        <Tab label="Dinner Menu3">
     
        </Tab>

        
        <Tab label="Dinner Menu4">
     
        </Tab>
        
        <Tab label="Dinner Menu5">
     
        </Tab>
        
        <Tab label="Dinner Menu6">
     
        </Tab>
        
        <Tab label="Dinner Menu7">
     
        </Tab>
        {/* Other Tab components */}
      </Tabs>
    </div>
  );
};

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <TabButtons
        activeTab={activeTab}
        buttons={children.map((child) => child.props.label)}
        changeTab={changeTab}
      />
      <div className="tab-content">
        {children.find((child) => child.props.label === activeTab)}
      </div>
    </div>
  );
};

const TabButtons = ({ buttons, changeTab, activeTab }) => {
  return (
    <div className="tab-buttons">
      {buttons.map((button) => (
        <button
          key={button}
          className={button === activeTab ? "active" : ""}
          onClick={() => changeTab(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

const Tab = (props) => {
  return (
    <React.Fragment className={props.className}>
      {props.children}
    </React.Fragment>
  );
};

export default FixedMenu;
