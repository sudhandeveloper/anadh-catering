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


        <Tab label="Salads">
       <div>
        <table>
          
        </table>
       </div>
        </Tab>

        <Tab label="Indian Sweets
">
          <div>
            <img
              className="imagesss"
              src=""
              alt="Tab 2"
            />
            <p>Tab 2 content</p>
          </div>
        </Tab>

        <Tab label="Soup
">
          <div>
            <img
              className="imagesss"
              src=""
              alt="Tab 2"
            />
            <p>Tab 2 content</p>
          </div>
        </Tab>

        <Tab label="Starters">
          <div>
            <img
              className="imagesss"
              src=""
              alt="Tab 2"
            />
            <p>Tab 2 content</p>
          </div>
        </Tab>

        <Tab label="Delhi Chaat">
          <div>
            <img
              className="imagesss"
              src=""
              alt="Tab 2"
            />
            <p>Tab 2 content</p>
          </div>
        </Tab>

        <Tab label="Gravy">
          <div>
            <img
              className="imagesss"
              src=""
              alt="Tab 2"
            />
            <p>Tab 2 content</p>
          </div>
        </Tab>

        <Tab label="Breads">
          <div>
            <img
              className="imagesss"
              src=""
              alt="Tab 2"
            />
            <p>Tab 2 content</p>
          </div>
        </Tab>

             
        <Tab label="Chinese">
          <div>
            <img
              className="imagesss"
              src=""
              alt="Tab 2"
            />
            <p>Tab 2 content</p>
          </div>
        </Tab>

        <Tab label="Around the world">
          <div>
            <img
              className="imagesss"
              src=""
              alt="Tab 2"
            />
            <p>Tab 2 content</p>
          </div>
        </Tab>

               
        <Tab label="Rice">
          <div>
            <img
              className="imagesss"
              src=""
              alt="Tab 2"
            />
            <p>Tab 2 content</p>
          </div>
        </Tab>

        <Tab label="South Indian Lunch">
          <div>
            <img
              className="imagesss"
              src=""
              alt="Tab 2"
            />
            <p>Tab 2 content</p>
          </div>
        </Tab>

        <Tab label="South Indian Tiffen">
          <div>
            <img
              className="imagesss"
              src=""
              alt="Tab 2"
            />
            <p>Tab 2 content</p>
          </div>
        </Tab>

        
        <Tab label="Fruits,Desserts,Ice Creams and Much More">
          <div>
            <img
              className="imagesss"
              src=""
              alt="Tab 2"
            />
            <p>Tab 2 content</p>
          </div>
        </Tab>

            
        <Tab label="Mouth Fresh">
          <div>
            <img
              className="imagesss"
              src=""
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
