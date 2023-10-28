import React, { useState } from "react";

const Menu = () => {
  return (
    <div className="tabs">
    
      <Tabs>
        <Tab label="Beverages" className="font-cormantThiner uppercase">
          <div>
            {/* Your content for the 'Beverages' tab */}
          </div>
        </Tab>
        <Tab label="Tab 2">
          <div>
            <img
              className="imagesss"
              src="https://example.com/tab2-image.jpg"
              alt="Tab 2"
            />
            <p>Tab 2 content</p>
          </div>
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
  return <React.Fragment className={props.className}>{props.children}</React.Fragment>;
};

export default Menu;
