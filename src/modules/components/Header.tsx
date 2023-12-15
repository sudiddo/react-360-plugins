import React from "react";

function Header() {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-row w-full px-2 justify-between items-center absolute top-0 pt-5 md:pt-10 bg-[#f1f1f1] z-20 max-w-7xl">
        <div className="bg-black rounded-lg md:p-3 p-1">
          <h1 className="font-bold md:text-2xl text-white">
            360°: Image, Clicks, and Code
          </h1>
        </div>
        <a
          href="https://github.com/sudiddo/react-360-plugins"
          target="_blank"
          className="underline font-medium md:text-lg"
        >
          Github Repo
        </a>
      </div>
    </div>
  );
}

export default Header;
