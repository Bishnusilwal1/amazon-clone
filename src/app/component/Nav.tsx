"use client";
import React, { useState } from "react";
import {
  MapPinHouse,
  AlignJustify,
  ShoppingCart,
  ChevronDown,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Language from "./Language";

export default function Navbar() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = [
    "All Categories",
    "Books",
    "Electronics",
    "Fashion",
    "Home & Kitchen",
    "Toys & Games",
    "Sports & Outdoors",
  ];
  return (
    <div>
      <div className="w-full bg-green-800 h-20">
        <div className="">
          <div className="flex items-center ">
            <h1 className="text-white font-bold text-2xl p-5">amazon</h1>
            <div className="flex items-center">
              <MapPinHouse className="text-white h-4 w-4" />
              <div className="py-4 px-1">
                <p className="text-gray-400">deliver to</p>
                <p className="text-white font-bold -mt-1">Nepal</p>
              </div>
            </div>

            {/* search bar */}
            <div className="flex ml-4 w-1/2">
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center px-4 py-2 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md text-gray-700 focus:outline-none"
                >
                  {selectedCategory}
                  <span className="ml-2">▼</span>
                </button>
                {isDropdownOpen && (
                  <ul className="absolute left-0 right-0 bg-white border border-gray-300 max-h-48 overflow-y-auto z-10 rounded-md shadow-md">
                    {categories.map((category) => (
                      <li
                        key={category}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                        onClick={() => {
                          setSelectedCategory(category);
                          setIsDropdownOpen(false);
                        }}
                      >
                        {category}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Input */}
              <input
                type="text"
                placeholder="Search for products"
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring focus:ring-yellow-300"
              />

              {/* Search Button */}
              <button className="hover:bg-yellow-600 px-4 text-white rounded-r-md bg-purple-700">
                🔍
              </button>
            </div>

            <Language />

            <div className="flex p-4">
              <p className="text-white border border-white border-opacity-0 hover:border-opacity-100 ">
                {" "}
                Devolucioy <br /> Pedidos
              </p>
            </div>

            <div className="flex p-4">
            <p className="text-white border border-white border-opacity-0 hover:border-opacity-100 ">
            {" "}
                Devolucioy <br /> Pedidos
              </p>
            </div>

            <div className="flex p-4 border border-white border-opacity-0 hover:border-opacity-100">
              <ShoppingCart className="text-white h-10 w-10" />
              <p className="text-white ml-1 mt-4">Carrito</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-900 h-15 flex items-center">
        <div className="flex items-center py-2 px-4">
          <Sheet>
            <SheetTrigger>
              <div className="flex items-center">
                <AlignJustify className="text-white" />
                <h1 className="text-white font-bold text-base px-1">All</h1>
              </div>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        {/* This is the section with the borders */}
        <div className="flex text-white text-base px-4">
          <h1 className="px-4 py-2 border border-white border-opacity-0 hover:border-opacity-100 mr-2">
            Today's Deals
          </h1>
          <h1 className="px-4 py-2 border border-white border-opacity-0 hover:border-opacity-100 mr-2">
            Service
          </h1>
          <h1 className="px-4 py-2 border border-white border-opacity-0 hover:border-opacity-100 mr-2">
            Registrys
          </h1>
          <h1 className="px-4 py-2 border border-white border-opacity-0 hover:border-opacity-100 mr-2">
            Gift Cards
          </h1>
          <h1 className="px-4 py-2 border border-white border-opacity-0 hover:border-opacity-100 mr-2">
            Sell
          </h1>
        </div>
      </div>
    </div>
  );
}
