import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
const Language = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  return (
    <div className="relative flex ml-4 items-center">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <img
          src="https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg"
          alt="flag"
          className="h-4 w-4"
        />
        <h1 className="text-white ml-1 w-4 h-4 -mt-2">{selectedLanguage}</h1>
        <span className="ml-1 text-gray-400 mt-2">
          {" "}
          <ChevronDown />
        </span>
      </div>

      {showDropdown && (
        <div className="absolute top-8 left-0 bg-white shadow-md rounded-md p-2 z-10 w-64">
         <div className="flex ">
         <p>change language </p>
         <Link href="/language" className="ml-4 text-blue-500 text-sm underline">learn more</Link>
         </div>
          <div
            className="flex items-center cursor-pointer p-1 hover:bg-gray-200 rounded"
            onClick={() => {
              setSelectedLanguage("EN");
              setShowDropdown(false);
            }}
          >
            <input
              type="radio"
              id="en"
              name="language"
              value="EN"
              checked={selectedLanguage === "EN"}
              onChange={() => setSelectedLanguage("EN")}
              className="mr-2"
            />
            <label htmlFor="en" className="cursor-pointer">
              English-EN
            </label>
          </div>
          <br className="bg-black border-[1px]"/>
          {/* Language Option: Spanish */}
          <div
            className="flex items-center cursor-pointer p-1 hover:bg-gray-200 rounded"
            onClick={() => {
              setSelectedLanguage("ES");
              setShowDropdown(false);
            }}
          >
            <input
              type="radio"
              id="es"
              name="language"
              value="ES"
              checked={selectedLanguage === "ES"}
              onChange={() => setSelectedLanguage("ES")}
              className="mr-2"
            />
            <label htmlFor="es" className="cursor-pointer">
              Spanish-ES
            </label>
          </div>
          {/* Language Option: French */}
          <div
            className="flex items-center cursor-pointer p-1 hover:bg-gray-200 rounded"
            onClick={() => {
              setSelectedLanguage("FR");
              setShowDropdown(false);
            }}
          >
            <input
              type="radio"
              id="fr"
              name="language"
              value="FR"
              checked={selectedLanguage === "FR"}
              onChange={() => setSelectedLanguage("FR")}
              className="mr-2"
            />
            <label htmlFor="fr" className="cursor-pointer">
              French-FR
            </label>
          </div>

             {/* Language Option: Nepal */}
             <div
            className="flex items-center cursor-pointer p-1 hover:bg-gray-200 rounded"
            onClick={() => {
              setSelectedLanguage("FR");
              setShowDropdown(false);
            }}
          >
            <input
              type="radio"
              id="ne"
              name="language"
              value="NE"
              checked={selectedLanguage === "NE"}
              onChange={() => setSelectedLanguage("NE")}
              className="mr-2"
            />
            <label htmlFor="NE" className="cursor-pointer">
              Nepal-NE
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default Language;
