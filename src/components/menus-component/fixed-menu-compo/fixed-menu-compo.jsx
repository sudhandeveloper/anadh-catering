import React, { useState } from "react";

const FixedMenu = () => {
  return (
    <div className="tabs">
      <Tabs>
        <Tab label="Breakfast Menu1" className="font-cormantThiner uppercase">
          <div>
            <section className="py-6 ">
              <div className="container flex flex-col  p-4 mx-auto">
                <div className="flex">
                  <div className="h-10 mr-5 w-[7px] mt-2 bg-green-700 "></div>
                  <div> </div>
                  <h1 className="text-start uppercase text-[40px] mb-5 text-green-800 font-extrabold">
                    OUR FANTASTIC Breakfast Menu1
                  </h1>
                </div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                  <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                    <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                      Welcome Drink
                    </h2>
                    <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                      <li>Sweet</li>
                      <li>Idly</li>
                      <li>Pongal/Kichadi</li>
                      <li>Mini Uttapam/Mini Masala Dosa (Live Counter)</li>
                      <li>Sevai/Upma with Curd/Idiyappam with Stew</li>
                      <li>Sambar</li>
                      <li>Coconut Chutney</li>
                      <li>Kara Chutney/Malli Chutney/Pudina Chutney</li>
                      <li>Coffee/Badam Milk</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Tab>

        <Tab label="Breakfast Menu2">
          <div>
            <section className="py-6 ">
              <div className="container flex flex-col  p-4 mx-auto">
                <div className="flex">
                  <div className="h-10 mr-5 w-[7px] mt-2 bg-green-700 "></div>

                  <h1 className="text-start uppercase text-[40px] mb-5 text-green-800 font-extrabold">
                    OUR FANTASTIC Breakfast Menu2
                  </h1>
                </div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                  <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                    <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                      Breakfast Menu2
                    </h2>
                    <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                      <li>Sweet</li>
                      <li>Ulundu Vadai/Mysore Bonda</li>
                      <li>Idly</li>
                      <li>Pongal/Kichadi</li>
                      <li>Mini Uttapam/Mini Masala Dosa (Live Counter)</li>
                      <li>Poori-Masal (Live Counter)</li>
                      <li>Sevai/Upma with Curd/Idiyappam with Stew</li>
                      <li>Sambar</li>
                      <li>Coconut Chutney</li>
                      <li>Kara Chutney/Malli Chutney/Pudina Chutney</li>
                      <li>Coffee/Badam Milk</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Tab>

        <Tab label="Breakfast Menu3">
          <div>
            <section className="py-6 ">
              <div className="container flex flex-col  p-4 mx-auto">
                <div className="flex">
                  <div className="h-10 mr-5 w-[7px] mt-2 bg-green-700 "></div>

                  <h1 className="text-start uppercase text-[40px] mb-5 text-green-800 font-extrabold">
                    OUR FANTASTIC Breakfast Menu3
                  </h1>
                </div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                  <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                    <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                      Breakfast Menu3
                    </h2>
                    <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                      <li>Sweet</li>
                      <li>Ulundu Vadai/Mysore Bonda</li>
                      <li>Idly</li>
                      <li>Pongal/Kichadi</li>
                      <li>Mini Uttapam/Mini Masala Dosa (Live Counter)</li>
                      <li>Poori-Masal (Live Counter)</li>
                      <li>Idiyappam with Coconut Milk</li>
                      <li>Sevai/Upma with Curd</li>
                      <li>Sambar</li>
                      <li>Coconut Chutney</li>
                      <li>Kara Chutney/Malli Chutney/Pudina Chutney</li>
                      <li>Coffee/Badam Milk</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Tab>

        <Tab label="Breakfast Menu4">
          <div>
            <section className="py-6 ">
              <div className="container flex flex-col  p-4 mx-auto">
                <div className="flex">
                  <div className="h-10 mr-5 w-[7px] mt-2 bg-green-700 "></div>

                  <h1 className="text-start uppercase text-[40px] mb-5 text-green-800 font-extrabold">
                    OUR FANTASTIC Breakfast Menu 4
                  </h1>
                </div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                  <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                    <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                      veg
                    </h2>
                    <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                      <li>Sweet</li>
                      <li>Ulundu Vadai/Mysore Bonda</li>
                      <li>Thattu Idly/Mini Sambar Idly/Rava Idly</li>
                      <li>Pongal/Kichadi/Rava Pongal</li>
                      <li>Mini Uthappam/Mini Masala Dosa</li>
                      <li>Poori-Masal (Live Counter)</li>
                      <li>Sevai/Upma with Curd/Idiyappam with Stew</li>
                      <li>Sambar</li>
                      <li>Coconut Chutney</li>
                      <li>Kara Chutney/Malli Chutney/Pudina Chutney</li>
                      <li>Coffee/Badam Milk</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Tab>

        <Tab label="Lunch Menu1">
          <div>
            <section className="py-6 ">
              <div className="container flex flex-col  p-4 mx-auto">
                <div className="flex">
                  <div className="h-10 mr-5 w-[7px] mt-2 bg-green-700 "></div>

                  <h1 className="text-start uppercase text-[40px] mb-5 text-green-800 font-extrabold">
                    OUR FANTASTIC Breakfast Menu 1
                  </h1>
                </div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                  <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                    <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                      Veg
                    </h2>
                    <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                      <li>Salt</li>
                      <li>Rice</li>
                      <li>Kadamba Sambar</li>
                      <li>Puli Kuzhambu/Kara Kuzhambu</li>
                      <li>Rasam</li>
                      <li>Kootu</li>
                      <li>Poriyal</li>
                      <li>Appalam</li>
                      <li>Paruppu Vadai</li>
                      <li>Payasam</li>
                      <li>Curd</li>
                      <li>Pickle</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Tab>

        <Tab label="Lunch Menu 2">
          {" "}
          <div>
            <section className="py-6 ">
              <div className="container flex flex-col  p-4 mx-auto">
                <div className="flex">
                  <div className="h-10 mr-5 w-[7px] mt-2 bg-green-700 "></div>

                  <h1 className="text-start uppercase text-[40px] mb-5 text-green-800 font-extrabold">
                    OUR FANTASTIC Lunch Menu2
                  </h1>
                </div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                  <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                    <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                      Veg
                    </h2>
                    <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                      <li>Sweet</li>
                      <li>Salt</li>
                      <li>Rice</li>
                      <li>Kadamba Sambar</li>
                      <li>Puli Kuzhambu/Kara Kuzhambu</li>
                      <li>Rasam</li>
                      <li>Kootu</li>
                      <li>Poriyal</li>
                      <li>Appalam</li>
                      <li>Paruppu Vadai</li>
                      <li>Payasam</li>
                      <li>Curd</li>
                      <li>Pickle</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Tab>

        <Tab label="Lunch Menu3">
          {" "}
          <div>
            <section className="py-6 ">
              <div className="container flex flex-col  p-4 mx-auto">
                <div className="flex">
                  <div className="h-10 mr-5 w-[7px] mt-2 bg-green-700 "></div>

                  <h1 className="text-start uppercase text-[40px] mb-5 text-green-800 font-extrabold">
                    OUR FANTASTIC Lunch Menu 3
                  </h1>
                </div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                  <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                    <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                      <li>Sweet</li>
                      <li>Salt</li>
                      <li>Rice</li>
                      <li>Paruppu Podi with Ghee</li>
                      <li>Kadamba Sambar</li>
                      <li>Puli Kuzhambu/Kara Kuzhambu</li>
                      <li>Rasam</li>
                      <li>Kootu</li>
                      <li>Poriyal</li>
                      <li>Appalam</li>
                      <li>Paruppu Vadai</li>
                      <li>Payasam</li>
                      <li>Curd</li>
                      <li>Pickle</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Tab>

        <Tab
          label="Lunch Menu4
"
        >
          <div>
            <section className="py-6 ">
              <div className="container flex flex-col  p-4 mx-auto">
                <div className="flex">
                  <div className="h-10 mr-5 w-[7px] mt-2 bg-green-700 "></div>

                  <h1 className="text-start uppercase text-[40px] mb-5 text-green-800 font-extrabold">
                    OUR FANTASTIC Lunch Menu 4
                  </h1>
                </div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                  <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                    <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                      <li>Sweet</li>
                      <li>Salt</li>
                      <li>Chapati (1pc)</li>
                      <li>Veg Gravy</li>
                      <li>Rice</li>
                      <li>Kadamba Sambar</li>
                      <li>Puli Kuzhambu/Kara Kuzhambu</li>
                      <li>Rasam</li>
                      <li>Kootu</li>
                      <li>Poriyal</li>
                      <li>Appalam</li>
                      <li>Paruppu Vadai</li>
                      <li>Payasam</li>
                      <li>Curd</li>
                      <li>Pickle</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Tab>

        <Tab label="Lunch Menu 5">
          <div>
            <section className="py-6 ">
              <div className="container flex flex-col  p-4 mx-auto">
                <div className="flex">
                  <div className="h-10 mr-5 w-[7px] mt-2 bg-green-700 "></div>

                  <h1 className="text-start uppercase text-[40px] mb-5 text-green-800 font-extrabold">
                    OUR FANTASTIC Lunch Menu 5
                  </h1>
                </div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                  <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                    <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                      <li>Sweet</li>
                      <li>Salt</li>
                      <li>Chapati (1pc)</li>
                      <li>Veg Gravy</li>
                      <li>Veg Biryani/Mushroom Biryani/Ghee Rice</li>
                      <li>Raita/Kuruma</li>
                      <li>Rice</li>
                      <li>Kadamba Sambar</li>
                      <li>Puli Kuzhambu/Kara Kuzhambu</li>
                      <li>Rasam</li>
                      <li>Kootu</li>
                      <li>Poriyal</li>
                      <li>Appalam</li>
                      <li>Paruppu Vadai</li>
                      <li>Payasam</li>
                      <li>Curd</li>
                      <li>Pickle</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Tab>

        <Tab label="Lunch Menu 6">
          <div>
            <section className="py-6 ">
              <div className="container flex flex-col  p-4 mx-auto">
                <div className="flex">
                  <div className="h-10 mr-5 w-[7px] mt-2 bg-green-700 "></div>

                  <h1 className="text-start uppercase text-[40px] mb-5 text-green-800 font-extrabold">
                    OUR FANTASTIC Lunch Menu 6
                  </h1>
                </div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                  <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                    <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                      <li>Sweet</li>
                      <li>Salt</li>
                      <li>Chapati (1pc)</li>
                      <li>Veg Gravy</li>
                      <li>Veg Biryani/Mushroom Biryani/Ghee Rice</li>
                      <li>Raita/Kuruma</li>
                      <li>Rice</li>
                      <li>Kadamba Sambar</li>
                      <li>Puli Kuzhambu/Kara Kuzhambu</li>
                      <li>Rasam</li>
                      <li>Kootu</li>
                      <li>Poriyal</li>
                      <li>Appalam</li>
                      <li>Paruppu Vadai</li>
                      <li>Payasam</li>
                      <li>Curd</li>
                      <li>Pickle</li>
                      <li>Ice cream</li>
                      <li>Beeda</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Tab>

        <Tab label="Lunch Menu 7">
          <div>
            <section className="py-6 ">
              <div className="container flex flex-col  p-4 mx-auto">
                <div className="flex">
                  <div className="h-10 mr-5 w-[7px] mt-2 bg-green-700 "></div>

                  <h1 className="text-start uppercase text-[40px] mb-5 text-green-800 font-extrabold">
                    OUR FANTASTIC Lunch Menu 7
                  </h1>
                </div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                  <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                    <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                      <li>Sweet</li>
                      <li>Salt</li>
                      <li>Chilli Gobi/Chilli Babycorn/Veg Cutlet/Porial</li>
                      <li>Chapati (1pc)</li>
                      <li>Veg Gravy</li>
                      <li>Veg Biryani/Mushroom Biryani/Ghee Rice</li>
                      <li>Raita/Kuruma</li>
                      <li>Rice</li>
                      <li>Kadamba Sambar</li>
                      <li>Puli Kuzhambu/Kara Kuzhambu</li>
                      <li>Rasam</li>
                      <li>Kootu</li>
                      <li>Poriyal</li>
                      <li>Appalam</li>
                      <li>Paruppu Vadai</li>
                      <li>Payasam</li>
                      <li>Curd</li>
                      <li>Pickle</li>
                      <li>Ice cream</li>
                      <li>Beeda</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Tab>

        <Tab label="Dinner Menu1">
          <div>
            <section className="py-6 ">
              <div className="container flex flex-col  p-4 mx-auto">
                <div className="flex">
                  <div className="h-10 mr-5 w-[7px] mt-2 bg-green-700 "></div>

                  <h1 className="text-start uppercase text-[40px] mb-5 text-green-800 font-extrabold">
                    Dinner Menu1
                  </h1>
                </div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                  <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                    <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                      <li>Sweet</li>
                      <li>
                        Cutlet/Chilli Gobi/Chilli Babycorn/Veg Spring Roll
                      </li>
                      <li>Tomato Sauce</li>
                      <li>Roti/Naan/Chapati/Parotta</li>
                      <li>Veg Gravy</li>
                      <li>Veg Biryani/Mushroom Biryani/Pulao</li>
                      <li>Raita</li>
                      <li>Idly/Mini Pepper Idly</li>
                      <li>Mini Uttapam/Mini Masala Dosa</li>
                      <li>Sambar</li>
                      <li>Coconut Chutney</li>
                      <li>Kara Chutney/Malli Chutney/Pudina Chutney</li>
                      <li>Curd Rice/Curd Semiya/Kambu Curd/Wheat Curd</li>
                      <li>Pickle</li>
                      <li>Ice cream</li>
                      <li>Beeda</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Tab>

        <Tab label="Dinner Menu2">
          <div>
            <section className="py-6 ">
              <div className="container flex flex-col  p-4 mx-auto">
                <div className="flex">
                  <div className="h-10 mr-5 w-[7px] mt-2 bg-green-700 "></div>

                  <h1 className="text-start uppercase text-[40px] mb-5 text-green-800 font-extrabold">
                    Dinner Menu 2
                  </h1>
                </div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                  <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                    <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                      <li>Sweet (2 nos)</li>
                      <li>
                        Cutlet/Chilli Gobi/Chilli Babycorn/Veg Spring Roll
                      </li>
                      <li>Tomato Sauce</li>
                      <li>Roti/Naan/Chapati/Parotta</li>
                      <li>Veg Gravy</li>
                      <li>Veg Biryani/Mushroom Biryani/Pulao</li>
                      <li>Raita</li>
                      <li>Idly/Mini Pepper Idly</li>
                      <li>Variety Dosa (3 nos)</li>
                      <li>Sambar</li>
                      <li>Coconut Chutney</li>
                      <li>Kara Chutney/Malli Chutney/Pudina Chutney</li>
                      <li>Curd Rice/Curd Semiya/Kambu Curd/Wheat Curd</li>
                      <li>Pickle</li>
                      <li>Ice cream</li>
                      <li>Beeda</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Tab>

        <Tab label="Dinner Menu 3">
          <div>
            <section className="py-6 ">
              <div className="container flex flex-col  p-4 mx-auto">
                <div className="flex">
                  <div className="h-10 mr-5 w-[7px] mt-2 bg-green-700 "></div>

                  <h1 className="text-start uppercase text-[40px] mb-5 text-green-800 font-extrabold">
                    Dinner Menu 3
                  </h1>
                </div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                  <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                    <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                      <li>Sweet</li>
                      <li>
                        Cutlet/Chilli Gobi/Chilli Babycorn/Veg Spring Roll
                      </li>
                      <li>Tomato Sauce</li>
                      <li>Roti/Naan/Chapati/Parotta</li>
                      <li>Veg Gravy</li>
                      <li>Veg Biryani/Mushroom Biryani/Pulao</li>
                      <li>Raita</li>
                      <li>Idly/Mini Pepper Idly</li>
                      <li>Variety Dosa (3 nos)</li>
                      <li>Idiyappam with Stew</li>
                      <li>Sambar</li>
                      <li>Coconut Chutney</li>
                      <li>Kara Chutney/Malli Chutney/Pudina Chutney</li>
                      <li>Curd Rice/Curd Semiya/Kambu Curd/Wheat Curd</li>
                      <li>Pickle</li>
                      <li>Ice cream</li>
                      <li>Beeda</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Tab>

        <Tab label="Dinner Menu4">
          <div>
            <section className="py-6 ">
              <div className="container flex flex-col  p-4 mx-auto">
                <div className="flex">
                  <div className="h-10 mr-5 w-[7px] mt-2 bg-green-700 "></div>

                  <h1 className="text-start uppercase text-[40px] mb-5 text-green-800 font-extrabold">
                    Dinner Menu 4
                  </h1>
                </div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                  <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                    <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                      <li>Sweet (2 nos)</li>
                      <li>
                        Cutlet/Chilli Gobi/Chilli Babycorn/Veg Spring Roll
                      </li>
                      <li>Tomato Sauce</li>
                      <li>Roti/Naan/Chapati/Parotta</li>
                      <li>Veg Gravy</li>
                      <li>Veg Biryani/Mushroom Biryani/Pulao</li>
                      <li>Raita</li>
                      <li>Idly/Mini Pepper Idly</li>
                      <li>Variety Dosa (3 nos)</li>
                      <li>Idiyappam with Stew</li>
                      <li>Sambar</li>
                      <li>Coconut Chutney</li>
                      <li>Kara Chutney/Malli Chutney/Pudina Chutney</li>
                      <li>Curd Rice/Curd Semiya/Kambu Curd/Wheat Curd</li>
                      <li>Pickle</li>
                      <li>Ice cream</li>
                      <li>Beeda</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Tab>

        <Tab label="Dinner Menu5">
          <div>
            <section className="py-6 ">
              <div className="container flex flex-col  p-4 mx-auto">
                <div className="flex">
                  <div className="h-10 mr-5 w-[7px] mt-2 bg-green-700 "></div>

                  <h1 className="text-start uppercase text-[40px] mb-5 text-green-800 font-extrabold">
                    Dinner Menu 5
                  </h1>
                </div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                  <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                    <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                      <li>Sweet (2 nos)</li>
                      <li>
                        Cutlet/Chilli Gobi/Chilli Babycorn/Veg Spring Roll (Any
                        2)
                      </li>
                      <li>Tomato Sauce</li>
                      <li>Roti/Naan/Chapati/Parotta</li>
                      <li>Veg Gravy</li>
                      <li>Veg Biryani/Mushroom Biryani/Pulao</li>
                      <li>Raita</li>
                      <li>Idly/Mini Pepper Idly</li>
                      <li>Variety Dosa (3 nos)</li>
                      <li>Idiyappam with Stew</li>
                      <li>Sambar</li>
                      <li>Coconut Chutney</li>
                      <li>Kara Chutney/Malli Chutney/Pudina Chutney</li>
                      <li>Curd Rice/Curd Semiya/Kambu Curd/Wheat Curd</li>
                      <li>Pickle</li>
                      <li>Ice cream</li>
                      <li>Beeda</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Tab>

        <Tab label="Dinner Menu6">
          <div>
            <section className="py-6 ">
              <div className="container flex flex-col  p-4 mx-auto">
                <div className="flex">
                  <div className="h-10 mr-5 w-[7px] mt-2 bg-green-700 "></div>

                  <h1 className="text-start uppercase text-[40px] mb-5 text-green-800 font-extrabold">
                    Dinner Menu 6
                  </h1>
                </div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                  <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                    <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                      <li>Sweet (2 nos)</li>
                      <li>
                        Cutlet/Chilli Gobi/Chilli Babycorn/Veg Spring Roll (Any
                        2)
                      </li>
                      <li>Roti/Naan/Chapati/Parotta</li>
                      <li>Veg Gravy</li>
                      <li>Veg Biryani/Mushroom Biryani/Pulao</li>
                      <li>Raita</li>
                      <li>Idly/Mini Pepper Idly</li>
                      <li>Variety Dosa (3 nos)</li>
                      <li>Idiyappam with Stew</li>
                      <li>Sambar</li>
                      <li>Coconut Chutney</li>
                      <li>Kara Chutney/Malli Chutney/Pudina Chutney</li>
                      <li>Curd Rice/Curd Semiya/Kambu Curd/Wheat Curd</li>
                      <li>Pickle</li>
                      <li>Ice cream</li>
                      <li>Beeda</li>
                      <li>Badam Milk/SukkuPaal/Coffee</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Tab>

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
