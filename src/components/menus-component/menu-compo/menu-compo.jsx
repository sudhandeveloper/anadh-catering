import React, { useState } from "react";

const Menu = () => {
  return (
    <>
      <div className="tabs ">
        <Tabs>
          <Tab label="Beverages" className="">
            <div>
              <section className="py-6 ">
                <div className="container flex flex-col  p-4 mx-auto">
                  <div className="flex">
                    {" "}
                    <div className="h-10 mr-5 w-[7px] mt-2 bg-green-700 "> </div>{" "}
                    <div> </div>
                    <h1 className="text-start text-[40px] mb-5 text-green-800 font-extrabold">
                      OUR FANTASTIC BEVERAGES
                    </h1>{" "}
                  </div>

                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        {" "}
                        Welcome Drink
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Fresh Lime</li>
                        <li> Jal –Jeera</li>
                        <li>Rose Sarbat </li>
                        <li>KhusSarbat Cool </li>
                        <li>Drinks Soda </li>
                        <li> (Sweet or Salted) </li>
                        <li> Mint – O – Pine Panagam </li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        {" "}
                        Fresh Fruit Juice
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Pineapple Juice</li>
                        <li> Orange Juice</li>
                        <li>Mosambi Juice</li>
                        <li>Grape Juice</li>
                        <li>Water-Melon Juice</li>
                       
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        {" "}
                        Mocktails
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Fruit Punch</li>
                        <li> Tender Delight</li>
                        <li>Blue Moon</li>
                        <li>Mojito</li>
                        <li>Silver Spring</li>
                        <li>Virgin Mary</li>
                        <li>Cranberry Cutie</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </Tab>

          <Tab label="Salads">
            <div>
              <table></table>
            </div>
          </Tab>

          <Tab
            label="Indian Sweets
"
          >
            <div>
              <img className="imagesss" src="" alt="Tab 2" />
              <p>Tab 2 content</p>
            </div>
          </Tab>

          <Tab
            label="Soup
"
          >
            <div>
              <img className="imagesss" src="" alt="Tab 2" />
              <p>Tab 2 content</p>
            </div>
          </Tab>

          <Tab label="Starters">
            <div>
              <img className="imagesss" src="" alt="Tab 2" />
              <p>Tab 2 content</p>
            </div>
          </Tab>

          <Tab label="Delhi Chaat">
            <div>
              <img className="imagesss" src="" alt="Tab 2" />
              <p>Tab 2 content</p>
            </div>
          </Tab>

          <Tab label="Gravy">
            <div>
              <img className="imagesss" src="" alt="Tab 2" />
              <p>Tab 2 content</p>
            </div>
          </Tab>

          <Tab label="Breads">
            <div>
              <img className="imagesss" src="" alt="Tab 2" />
              <p>Tab 2 content</p>
            </div>
          </Tab>

          <Tab label="Chinese">
            <div>
              <img className="imagesss" src="" alt="Tab 2" />
              <p>Tab 2 content</p>
            </div>
          </Tab>

          <Tab label="Around the world">
            <div>
              <img className="imagesss" src="" alt="Tab 2" />
              <p>Tab 2 content</p>
            </div>
          </Tab>

          <Tab label="Rice">
            <div>
              <img className="imagesss" src="" alt="Tab 2" />
              <p>Tab 2 content</p>
            </div>
          </Tab>

          <Tab label="South Indian Lunch">
            <div>
              <img className="imagesss" src="" alt="Tab 2" />
              <p>Tab 2 content</p>
            </div>
          </Tab>

          <Tab label="South Indian Tiffen">
            <div>
              <img className="imagesss" src="" alt="Tab 2" />
              <p>Tab 2 content</p>
            </div>
          </Tab>

          <Tab label="Fruits,Desserts,Ice Creams and Much More">
            <div>
              <img className="imagesss" src="" alt="Tab 2" />
              <p>Tab 2 content</p>
            </div>
          </Tab>

          <Tab label="Mouth Fresh">
            <div>
              <img className="imagesss" src="" alt="Tab 2" />
              <p>Tab 2 content</p>
            </div>
          </Tab>
          {/* Other Tab components */}
        </Tabs>
      </div>
    </>
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

export default Menu;
