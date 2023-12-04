"use client";

import { useState } from "react";
import ActionButton from "./ActionBtn";

const ApiInput = ({ onSubmit }) => {
  const [apiType, setApiType] = useState("api url"); // Default to API URL
  const [apiUrl, setApiUrl] = useState("");

  const handleInputChange = (e) => {
    setApiUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(apiType, apiUrl);
  };

  const handleExampleDataClick = () => {
    const exampleApiUrl = "https://jsonplaceholder.typicode.com/users";
    setApiType("api url");
    setApiUrl(exampleApiUrl);
    onSubmit("api url", exampleApiUrl);
  };

  return (
    <form className="flex flex-col items-center justify-between p-2 bg-white border rounded-md shadow-md md:p-4 md:gap-2 dark:bg-gray-800 md:flex-row dark:border-gray-600 dark:shadow-gray-700">
      <div className="relative mb-2 md:max-w-min md:text-base md:mb-0 dark:bg-gray-700 dark:border-gray-500 dark:text-white md:w-fit md:flex-grow ">
        <div className="inline w-full p-2 bg-white rounded-md cursor-pointer peer whitespace-nowrap">
          {apiType.toUpperCase()}
        </div>
        <div className="absolute right-0 hidden mt-2 bg-white rounded-md shadow-md peer-hover:block">
          <div className="p-2 text-gray-800 cursor-pointer dark:text-white hover:bg-gray-100 hover:text-gray-900 whitespace-nowrap">
            API URL
          </div>
          <div className="p-2 text-gray-800 cursor-pointer dark:text-white hover:bg-gray-100 hover:text-gray-900 whitespace-nowrap">
            JSON Text
          </div>
          <div className="p-2 text-gray-800 cursor-pointer dark:text-white hover:bg-gray-100 hover:text-gray-900 whitespace-nowrap">
            JSON File
          </div>
        </div>
      </div>

      {apiType === "api url" && (
        <input
          id="apiUrl"
          className="w-full p-2 text-sm bg-gray-200 border rounded-md md:text-base focus:outline-none focus:shadow-outline-blue dark:bg-gray-700 dark:border-gray-500 dark:text-white md:w-fit md:flex-grow focus:border-blue-500"
          type="text"
          value={apiUrl}
          onChange={handleInputChange}
          placeholder="Enter API URL"
        />
      )}
      {apiType === "json text" && (
        <textarea
          id="apiText"
          className="w-full h-[42px] p-2 text-sm bg-gray-200 border rounded-md max-h-64 min-h-[42px] md:text-base focus:outline-none focus:shadow-outline-blue dark:bg-gray-700 dark:border-gray-500 dark:text-white md:w-fit md:flex-grow focus:border-blue-500"
          value={apiUrl}
          onChange={handleInputChange}
          placeholder="Enter JSON Text"
        />
      )}
      {apiType === "json file" && (
        <input
          id="apiFile"
          className="w-full h-[42px] p-2 text-sm bg-gray-200 border rounded-md md:text-base focus:outline-none focus:shadow-outline-blue dark:bg-gray-700 dark:border-gray-500 dark:text-white md:w-fit md:flex-grow focus:border-blue-500"
          type="file"
          onChange={(e) => setApiUrl(e.target.files[0])}
        />
      )}
      <div className="flex w-full gap-2 mt-2 md:w-fit md:mt-0">
        <ActionButton label="Fetch Data" color="blue" onClick={handleSubmit} />
        <ActionButton
          label="Example Data"
          color="green"
          onClick={handleExampleDataClick}
        />
      </div>
    </form>
  );
};

export default ApiInput;
