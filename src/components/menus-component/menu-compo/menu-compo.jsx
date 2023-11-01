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
                    <div className="h-10 mr-5 w-[7px] mt-2 bg-green-700 "></div>
                    <div> </div>
                    <h1 className="text-start text-[40px] mb-5 text-green-800 font-extrabold">
                      OUR FANTASTIC BEVERAGES
                    </h1>
                  </div>

                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
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

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Milkshakes
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Mango Milkshake</li>
                        <li>Strawberry Milkshake</li>
                        <li>Banana Milkshake</li>
                        <li>Vanilla Milkshake</li>
                        <li>Chiku Milkshake</li>
                        <li>Pista Milkshake</li>
                        <li>Rose Milk</li>
                        <li>Badam Milk</li>
                        <li>Masala Badam Milk</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Asli Punjabi Lassi
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Sweet Lassi</li>
                        <li>Salted Lassi</li>
                        <li>Mango Lassi</li>
                        <li>Pineapple Lassi</li>
                        <li>Strawberry Lassi</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Hot Beverages
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Tea</li>
                        <li>Coffee</li>
                        <li>Milk</li>
                        <li>Badham Milk</li>
                        <li>Sukku Coffee</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </Tab>
          {/* =========== */}
          <Tab label="Salads">
            <div>
              <section className="py-6 ">
                <div className="container flex flex-col  p-4 mx-auto">
                  <div className="flex">
                    <div className="h-10 mr-5 w-[7px] mt-2 bg-green-700 "></div>
                    <div> </div>
                    <h1 className="text-start uppercase text-[40px] mb-5 text-green-800 font-extrabold">
                      OUR FANTASTIC Salads
                    </h1>
                  </div>

                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 sm:grid-cols-2">
                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Salads
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Green Salad</li>
                        <li> Cucumber Salad</li>
                        <li>Russian Salad </li>
                        <li>Sprouts </li>
                        <li>Aloo Chana salad</li>
                        <li>Corn Salad</li>
                        <li> Lettuce Salad</li>
                        <li> Macaroni Salad</li>
                        <li>Pasta Salad</li>
                        <li>Macaroni Salad</li>
                        <li>Fruit Salad</li>
                        <li>Cream Fruit Salad</li>
                        <li>Broccoli</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Salads with Dressing
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>French Dressing</li>
                        <li>Mayonnaise Dressing</li>
                        <li>Cream Dressing</li>
                        <li>Yogurt Dressing</li>
                        <li>Lemon Dressing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </Tab>
          {/* ============ */}
          <Tab label="Indian Sweets">
            <div>
              <section className="py-6 ">
                <div className="container flex flex-col  p-4 mx-auto">
                  <div className="flex">
                    <div className="h-10 mr-5 w-[7px] mt-2 bg-green-700 "></div>
                    <div> </div>
                    <h1 className="text-start text-[40px] mb-5 text-green-800 font-extrabold">
                      OUR FANTASTIC Indian Sweets
                    </h1>
                  </div>

                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Rava Kesari</li>
                        <li>Fruit Kesari</li>
                        <li>Pineapple Kesari</li>
                        <li>Gulab Jamun</li>
                        <li>Kala Jamun</li>
                        <li>Pumpkin Halwa</li>
                        <li>Carrot Halwa</li>
                        <li>Wheat Halwa</li>
                        <li>Badam Halwa</li>
                        <li>Athipalam Halwa</li>
                        <li>Pista Roll</li>
                        <li>Boondi Laddu</li>
                        <li>Mysurpa</li>
                        <li>Rasmalai</li>
                        <li>Rasgulla</li>
                        <li>Strawberry Rasgulla</li>
                        <li>Kaju Katli</li>
                        <li>Kaju Burfi</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Badam Katli</li>
                        <li>Badam Burfi</li>
                        <li>Dry Fruit Burfi</li>
                        <li>Milk Burfi</li>
                        <li>Makkan Peda</li>
                        <li>Milk Peda</li>
                        <li>Hot Jalebi Jangari</li>
                        <li>Paneer Jangari</li>
                        <li>Badhusha</li>
                        <li>Boli</li>
                        <li>Basundi</li>
                        <li>Sandesh</li>
                        <li>Strawberry Sandesh</li>
                        <li>Mango Sandesh</li>
                        <li>Orange Sandesh</li>
                        <li>Special Bengali Sweets</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Payasam
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Semiya Payasam</li>
                        <li>Wheat Payasam</li>
                        <li>PasiParuppuPayasam</li>
                        <li>Pineapple RavaPayasam</li>
                        <li>Fruit Payasam</li>
                        <li>Tender Coconut Payasam</li>
                        <li>Aval Payasam</li>
                        <li>Jackfruit Payasam</li>
                        <li>Ada Pradhaman</li>
                        <li>Kasa Kasa Payasam</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </Tab>

          <Tab label="Soup">
            <div>
              <section className="py-6 ">
                <div className="container flex flex-col  p-4 mx-auto">
                  <div className="flex">
                    <div className="h-10 mr-5 w-[7px] mt-2 bg-green-700 "></div>
                    <div> </div>
                    <h1 className="text-start uppercase text-[40px] mb-5 text-green-800 font-extrabold">
                      OUR FANTASTIC Soup
                    </h1>
                  </div>

                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 sm:grid-cols-2">
                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Veg
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Tomato Soup</li>
                        <li>Veg Manchow Soup</li>
                        <li>Vegetable Sweet Corn Soup</li>
                        <li>Vegetable Clear Soup</li>
                        <li>Sweet Corn Soup</li>
                        <li>Hot & Sour Soup</li>
                        <li>Wanton Soup</li>
                        <li>French Onion Soup</li>
                        <li>Cream of Veg Soup</li>
                        <li>Cream of Mushroom Soup</li>
                        <li>Cream of Tomato Soup</li>
                        <li>Cream of Broccoli Soup</li>
                        <li>Cream of Green Peas Soup</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Non-Veg
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Chicken Manchow Soup</li>
                        <li>Chicken Clear Soup</li>
                        <li>Sweet Corn Chicken Soup</li>
                        <li>Hot & Sour Chicken Soup</li>
                        <li>Tomato Egg Drop Soup</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </Tab>

          <Tab label="Starters">
            <div>
              <section className="py-6 ">
                <div className="container flex flex-col  p-4 mx-auto">
                  <div className="flex">
                    <div className="h-10 mr-5 w-[7px] mt-2 bg-green-700 "></div>
                    <div> </div>
                    <h1 className="text-start uppercase text-[40px] mb-5 text-green-800 font-extrabold">
                      OUR FANTASTIC Starters
                    </h1>
                  </div>

                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Veg
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Mushroom Pepper Fry</li>
                        <li>Onion Rings</li>
                        <li>Chilli Gobi</li>
                        <li>Chilli Babycorn</li>
                        <li>Babycorn Sauté</li>
                        <li>Paneer Sauté</li>
                        <li>Corn Cheese Ball</li>
                        <li>Cheese Shots</li>
                        <li>Veg Nuggets</li>
                        <li>Veggie Sticks</li>
                        <li>Panneer Tikka</li>
                        <li>Veg Cutlet</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Paneer Cutlet</li>
                        <li>Marconi Cutlet</li>
                        <li>Sweetcorn Cutlet</li>
                        <li>Veg Pakora</li>
                        <li>Paneer Pakora</li>
                        <li>Mirchi Pakora</li>
                        <li>Bhindi Jaipuri</li>
                        <li>Dal Vada</li>
                        <li>Keera Vada</li>
                        <li>Uraddal Vada</li>
                        <li>Thayir Vada</li>
                        <li>Sambar Vada</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Onion Bajji</li>
                        <li>Vazhakkai Bajji</li>
                        <li>Mysore Bonda</li>
                        <li>Masala Bonda</li>
                        <li>Cashew Bonda</li>
                        <li>Samosa</li>
                        <li>Kachori</li>
                        <li>French Fries</li>
                        <li>Cheese Cherry Pineapple Sticks</li>
                        <li>Moong Dal Pakoda</li>
                        <li>Paneer Finger</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Non-Veg
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Pepper Chicken</li>
                        <li>Chicken Lollypop</li>
                        <li>Chilli Chicken</li>
                        <li>Chicken Pakoda</li>
                        <li>Chicken Manchurian</li>
                        <li>Chicken 65</li>
                        <li>Chicken Leg Fry</li>
                        <li>Fish Fry</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Non-Veg
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Chilly Fish</li>
                        <li>Chilli Prawns</li>
                        <li>Chicken Spring Roll</li>
                        <li>Kaadai Fry</li>
                        <li>Tandoori Chicken</li>
                        <li>Chicken Kabab</li>
                        <li>Mutton Chukka</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </Tab>

          <Tab label="Delhi Chaat">
            <div>
              <section className="py-6 ">
                <div className="container flex flex-col  p-4 mx-auto">
                  <div className="flex">
                    <div className="h-10 mr-5 w-[7px] mt-2 bg-green-700 "></div>
                    <div> </div>
                    <h1 className="text-start uppercase text-[40px] mb-5 text-green-800 font-extrabold">
                      OUR FANTASTIC Delhi Chaat
                    </h1>
                  </div>

                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 sm:grid-cols-2">
                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Pani Puri</li>
                        <li>Bhel Puri</li>
                        <li>Fruit Bhel</li>
                        <li>Sev Puri</li>
                        <li>Dahi Puri</li>
                        <li>Masala Puri</li>
                        <li>Papadi Chaat</li>
                        <li>Dahi Papadi Chaat</li>
                        <li>Aloo Matar Chaat</li>
                        <li>Pav Bhaji</li>
                        <li>Cheese Pav Bhaji</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Aloo Tikki</li>
                        <li>Dahi Aloo Tikki</li>
                        <li>Aloo Tikki Chaat</li>
                        <li>Dahi Bhalla</li>
                        <li>Raj Kachori</li>
                        <li>Tokri Chaat</li>
                        <li>Kanji Vada</li>
                        <li>Samosa Chaat</li>
                        <li>Dahi Samosa</li>
                        <li>Kachori Chaat</li>
                        <li>Dahi Kachori</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </Tab>

          <Tab label="Gravy">
            <div>
              <section className="py-6 ">
                <div className="container flex flex-col  p-4 mx-auto">
                  <div className="flex">
                    <div className="h-10 mr-5 w-[7px] mt-2 bg-green-700 "></div>
                    <div> </div>
                    <h1 className="text-start uppercase text-[40px] mb-5 text-green-800 font-extrabold">
                      OUR FANTASTIC Gravy
                    </h1>
                  </div>

                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 sm:grid-cols-2">
                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Veg
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Paneer Butter Masala</li>
                        <li>Kadai Veg</li>
                        <li>Green Peas Masala</li>
                        <li>Malai Kofta</li>
                        <li>Aloo Palak</li>
                        <li>Aloo Mutter</li>
                        <li>Veg Shahi Korma</li>
                        <li>Mutter Paneer</li>
                        <li>Chana Masala</li>
                        <li>Mushroom Chettinad</li>
                        <li>Mushroom Masala</li>
                        <li>Palak Paneer</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Dum Aloo</li>
                        <li>Mixed Vegetable</li>
                        <li>Golden Babycorn Masala</li>
                        <li>Kadai Paneer</li>
                        <li>Paneer Tikka Masala</li>
                        <li>Aloo Mutter Paneer Masala</li>
                        <li>Aloo Gobi Masala</li>
                        <li>Navratan Korma</li>
                        <li>Mushroom Pallipalayam</li>
                        <li>Paneer Capsicum Masala</li>
                        <li>Baby Corn Capsicum Masala</li>
                        <li>Tawa Subzi</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        NON-Veg
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Chicken Kurma</li>
                        <li>Mutton Kurma</li>
                        <li>Chicken Pallipalayam</li>
                        <li>Mutton Pallipalayam</li>
                        <li>Chicken Masala</li>
                        <li>Kadai Chicken</li>
                        <li>Methi Chicken</li>
                        <li>Chicken Chettinad</li>
                        <li>Chicken Shahi Korma</li>
                        <li>Butter Chicken</li>
                        <li>Ginger Chicken</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </Tab>

          <Tab label="Breads">
            <div>
              <section className="py-6 ">
                <div className="container flex flex-col  p-4 mx-auto">
                  <div className="flex">
                    <div className="h-10 mr-5 w-[7px] mt-2 bg-green-700 "></div>
                    <div> </div>
                    <h1 className="text-start uppercase text-[40px] mb-5 text-green-800 font-extrabold">
                      OUR FANTASTIC Breads
                    </h1>
                  </div>

                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 sm:grid-cols-2">
                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Veg
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Chapati</li>
                        <li>Phulka</li>
                        <li>Thepla</li>
                        <li>Tandoori Roti</li>
                        <li>Butter Tandoori Roti</li>
                        <li>Naan</li>
                        <li>Butter Naan</li>
                        <li>Garlic Naan</li>
                        <li>Cheese Naan</li>
                        <li>Kulcha</li>
                        <li>Butter Kulcha</li>
                        <li>Stuffed Kulcha</li>
                        <li>Onion Kulcha</li>
                        <li>Cheese Kulcha</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Rumali Roti</li>
                        <li>Beetroot Rumali</li>
                        <li>Palak Rumali</li>
                        <li>Parotta</li>
                        <li>Kerala Parotta</li>
                        <li>Veechu Parotta</li>
                        <li>Coin Parotta</li>
                        <li>Bun Parotta</li>
                        <li>Bajra Roti</li>
                        <li>Missi Roti</li>
                        <li>Makai Roti</li>
                        <li>Methi Poori</li>
                        <li>Poori</li>
                        <li>Mini Poori</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </Tab>

          <Tab label="Chinese">
            <div>
              <section className="py-6 ">
                <div className="container flex flex-col  p-4 mx-auto">
                  <div className="flex">
                    <div className="h-10 mr-5 w-[7px] mt-2 bg-green-700 "></div>
                    <div> </div>
                    <h1 className="text-start uppercase text-[40px] mb-5 text-green-800 font-extrabold">
                      OUR FANTASTIC Chinese
                    </h1>
                  </div>

                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 sm:grid-cols-2">
                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Starters
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Fried Wanton</li>
                        <li>Vegetable Spring Roll</li>
                        <li>Mushroom Spring Roll</li>
                        <li>Honey Chili Potato</li>
                        <li>Gobi Manchurian</li>
                        <li>Mushroom Manchurian</li>
                        <li>Baby Corn Manchurian</li>
                        <li>Paneer Manchurian</li>
                        <li>Mix Veg Manchurian</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Noodles & Rice
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Veg Fried Rice</li>
                        <li>Burnt Garlic Fried Rice</li>
                        <li>Shanghai Fried Rice</li>
                        <li>Szechwan Fired Rice</li>
                        <li>Szechwan Noodles</li>
                        <li>Garlic Noodles</li>
                        <li>Mushroom Noodles</li>
                        <li>Paneer Noodles</li>
                        <li>Hakka Noodles</li>
                        <li>Singapore Noodles</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Gravy
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Veg Ball in Hot Garlic Sauce</li>
                        <li>Baby Corn in Szechwan Sauce</li>
                        <li>Bamboo Shoots in Hot Chinese Gravy</li>
                        <li>Mix Veg Manchurian Gravy</li>
                        <li>8 Treasure Pot</li>
                        <li>Tofu in Hot Garlic Sauce</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </Tab>

          <Tab label="Around the world">
            <div>
              <section className="py-6 ">
                <div className="container flex flex-col  p-4 mx-auto">
                  <div className="flex">
                    <div className="h-10 mr-5 w-[7px] mt-2 bg-green-700 "></div>
                    <div> </div>
                    <h1 className="text-start uppercase text-[40px] mb-5 text-green-800 font-extrabold">
                      OUR FANTASTIC Around the world
                    </h1>
                  </div>

                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 sm:grid-cols-2">
                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Lasagne</li>
                        <li>Mexican Lasagne</li>
                        <li>Spinach Corn AuGratin</li>
                        <li>Vegetable AuGratin</li>
                        <li>Tacos</li>
                        <li>Enchiladas</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>White Pasta</li>
                        <li>Red Pasta</li>
                        <li>Mexican Pasta</li>
                        <li>Stir Fried Vegetable Spaghetti</li>
                        <li>Veg Pizza</li>
                        <li>Mushroom & Golden Corn Pizza</li>
                        <li>Margherita Pizza</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </Tab>

          <Tab label="Rice">
            <div>
              <section className="py-6 ">
                <div className="container flex flex-col  p-4 mx-auto">
                  <div className="flex">
                    <div className="h-10 mr-5 w-[7px] mt-2 bg-green-700 "></div>
                    <div> </div>
                    <h1 className="text-start uppercase text-[40px] mb-5 text-green-800 font-extrabold">
                      OUR FANTASTIC Rice
                    </h1>
                  </div>

                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 sm:grid-cols-2">
                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Veg
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Plain Rice</li>
                        <li>Jeera Rice</li>
                        <li>Ghee Rice</li>
                        <li>Curd Rice</li>
                        <li>Veg Pulao</li>
                        <li>Kashmiri Pulao</li>
                        <li>Peas Pulao</li>
                        <li>Butter Beans Pulao</li>
                        <li>American Corn Pulao</li>
                        <li>Peas Cauliflower Pulao</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Navratan Pulao</li>
                        <li>Paneer Pulao</li>
                        <li>Aloo Methi Pulao</li>
                        <li>Soya Keema Biryani</li>
                        <li>Hyderabadi Dum Biryani</li>
                        <li>Corn Biryani</li>
                        <li>Veg Biryani</li>
                        <li>Mushroom Biryani</li>
                        <li>Coriander Biryani</li>
                        <li>Kambu Curd</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Non Veg
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Mutton Biryani</li>
                        <li>Prawn Biryani</li>
                        <li>Fish Biryani</li>
                        <li>Chicken Fried Rice</li>
                        <li>Mutton Pulao</li>
                        <li>Chicken Pulao</li>
                        <li>Hyderabadi Chicken Biryani</li>
                        <li>Chicken Dum Biryani</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </Tab>

          <Tab label="South Indian Lunch">
            <div>
              <section className="py-6 ">
                <div className="container flex flex-col  p-4 mx-auto">
                  <div className="flex">
                    <div className="h-10 mr-5 w-[7px] mt-2 bg-green-700 "></div>
                    <div> </div>
                    <h1 className="text-start uppercase text-[40px] mb-5 text-green-800 font-extrabold">
                      OUR FANTASTIC South Indian Lunch
                    </h1>
                  </div>

                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 sm:grid-cols-2">
                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Rice
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Raw Rice</li>
                        <li>Half Boiled</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Dhal
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Dhal – Ghee Green</li>
                        <li>Dhal-Ghee</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Sambar
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Drumstick + Small Onion Sambar</li>
                        <li>Malabar Sambar</li>
                        <li>Navaratna Sambar</li>
                        <li>Brinjal Potato Sambar</li>
                        <li>Pumpkin Sambar</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Kuzhambu
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Vathal Kuzhambu</li>
                        <li>Garlic Kuzhambu</li>
                        <li>Brinjal Kuzhambu</li>
                        <li>Vendakkai Kuzhambu</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Rasam
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Tomato Rasam</li>
                        <li>Dhal Rasam</li>
                        <li>Paneer Rasam</li>
                        <li>Pepper Rasam</li>
                        <li>Kollu Rasam</li>
                        <li>Pineapple Rasam</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Poriyal
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Carrot Poriyal</li>
                        <li>Beans Poriyal</li>
                        <li>Avarakkai Poriyal</li>
                        <li>Kovakkai Poriyal</li>
                        <li>Cabbage Poriyal</li>
                        <li>Mixed Veg Poriyal</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Kootu
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Pumpkin</li>
                        <li>Pudalangai</li>
                        <li>Merakai</li>
                        <li>Senai Kizhangu</li>
                        <li>Sorakkai</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Chops
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Curry Palakkai</li>
                        <li>Potato</li>
                        <li>Senai Kizhangu</li>
                        <li>Vazhakai</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Vadai
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Keera Vadai</li>
                        <li>Masal Vadai</li>
                        <li>Tayir Vadai</li>
                        <li>Thatta Payir</li>
                        <li>Senai Kizhangu</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Payasam
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Appalam</li>
                        <li>Vadagam</li>
                        <li>Chips</li>
                        <li>Pappadam</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Curd
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Pot Curd</li>
                        <li>Cup Curd</li>
                        <li>Loose Curd</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Pickles
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Mango</li>
                        <li>Inji Puli</li>
                        <li>Maa Inji Thokku</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Banana
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Virupachi</li>
                        <li>Moris</li>
                        <li>Rasthali</li>
                        <li>Karpura Valli</li>
                        <li>Poovan</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Beeda
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Plain Beeda</li>
                        <li>Special Beeda</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </Tab>

          <Tab label="South Indian Tiffen">
            <div>
              <section className="py-6 ">
                <div className="container flex flex-col  p-4 mx-auto">
                  <div className="flex">
                    <div className="h-10 mr-5 w-[7px] mt-2 bg-green-700 "></div>
                    <div> </div>
                    <h1 className="text-start uppercase text-[40px] mb-5 text-green-800 font-extrabold">
                      OUR FANTASTIC South Indian Tiffen
                    </h1>
                  </div>

                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 sm:grid-cols-2">
                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Rice
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Poori Masal</li>
                        <li>Thayir Semiya</li>
                        <li>Channa Batura</li>
                        <li>Kichadi</li>
                        <li>Kuzhi Paniyaram</li>
                        <li>Ragi Puttu</li>
                        <li>Idiyappam</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Idly
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Idly</li>
                        <li>Mini Idly</li>
                        <li>Vegetable Idly</li>
                        <li>Rava Idly</li>
                        <li>Masala Idly</li>
                        <li>Pepper Idly</li>
                        <li>Idly Fry</li>
                        <li>Pudina Idly</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Pongal
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Rava Pongal</li>
                        <li>Ghee Pongal</li>
                        <li>Millet Pongal</li>
                        <li>Keerai Pongal</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Dosa
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Ghee Roast</li>
                        <li>Rava Dosa</li>
                        <li>Podi Dosa</li>
                        <li>Onion Dosa</li>
                        <li>Kal Dosa</li>
                        <li>Masala Dosa</li>
                        <li>American Corn Dosa</li>
                        <li>Mysore Masala Dosa</li>
                        <li>Green Peas Masala Dosa</li>
                        <li>Cauliflower Masala Dosa</li>
                        <li>Paneer Masala Dosa</li>
                        <li>Veg Masala Dosa</li>
                        <li>Mushroom Masala Dosa</li>
                        <li>Ragi Dosa</li>
                        <li>Chola Dosa</li>
                        <li>Kambu Dosa</li>
                        <li>Set Dosa Vada Curry</li>
                        <li>Wheat Dosa</li>
                        <li>Pesarattu</li>
                        <li>Tomato Dosa</li>
                        <li>Appam</li>
                        <li>Adai Avial</li>
                      </ul>
                    </div>


                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Rasam
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Tomato Rasam</li>
                        <li>Dhal Rasam</li>
                        <li>Paneer Rasam</li>
                        <li>Pepper Rasam</li>
                        <li>Kollu Rasam</li>
                        <li>Pineapple Rasam</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Poriyal
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Carrot Poriyal</li>
                        <li>Beans Poriyal</li>
                        <li>Avarakkai Poriyal</li>
                        <li>Kovakkai Poriyal</li>
                        <li>Cabbage Poriyal</li>
                        <li>Mixed Veg Poriyal</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Kootu
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Pumpkin</li>
                        <li>Pudalangai</li>
                        <li>Merakai</li>
                        <li>Senai Kizhangu</li>
                        <li>Sorakkai</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Chops
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Curry Palakkai</li>
                        <li>Potato</li>
                        <li>Senai Kizhangu</li>
                        <li>Vazhakai</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Vadai
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Keera Vadai</li>
                        <li>Masal Vadai</li>
                        <li>Tayir Vadai</li>
                        <li>Thatta Payir</li>
                        <li>Senai Kizhangu</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Payasam
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Appalam</li>
                        <li>Vadagam</li>
                        <li>Chips</li>
                        <li>Pappadam</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Curd
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Pot Curd</li>
                        <li>Cup Curd</li>
                        <li>Loose Curd</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Pickles
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Mango</li>
                        <li>Inji Puli</li>
                        <li>Maa Inji Thokku</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Banana
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Virupachi</li>
                        <li>Moris</li>
                        <li>Rasthali</li>
                        <li>Karpura Valli</li>
                        <li>Poovan</li>
                      </ul>
                    </div>

                    <div className="border-[7px] border-green-700 shadow-md pl-5 pb-5 text-start shadow-gray-600 rounded-md">
                      <h2 className="text-green-700 mt-5 font-cormantThiner   uppercase text-[25px] font-extrabold ">
                        Beeda
                      </h2>
                      <ul className="text-[20px] font-extrabold list-decimal pl-5 mt-5">
                        <li>Plain Beeda</li>
                        <li>Special Beeda</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
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
