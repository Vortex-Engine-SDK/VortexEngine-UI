import { useState } from "react";
import ConnectButton from "./ConnectButton";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedChain, setSelectedChain] = useState("Aptos");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
    setIsOpen(false); // Close the mobile menu on click
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleChainSelection = (chain: string) => {
    setSelectedChain(chain);
    setDropdownOpen(false);
  };

  return (
    <div>
      <div className="bg-transparent z-50 w-full fixed backdrop-filter backdrop-blur-lg bg-opacity-20 pb-3 pt-2 px-3 flex justify-between items-center text-white">
        <a
          href="/"
          className="text-white text-xs lg:text-xl bg-transparent backdrop-blur-2xl backdrop-filter hover:scale-105 transform transition-transform duration-100 hover:shadow-xl hover:bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 p-3 px-6 rounded-xl md:text-base border-2 border-white"
        >
          VortexEngine
        </a>

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="block text-xl font-semibold focus:outline-none mr-4">
            ☰
          </button>
        </div>

        <div
          className={`lg:hidden absolute inset-y-0 z-50 left-0 transform transition duration-300 ease-in-out bg-black text-white backdrop-filter backdrop-blur-lg h-screen w-full ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button onClick={toggleMenu} className="absolute top-0 right-0 m-4 text-2xl focus:outline-none">
            ×
          </button>
          <div className="flex justify-center min-h-screen">
            <ul className="p-4 space-y-2 text-center font-medium">
              <li>
                <a
                  href="#home"
                  className={`py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap cursor-pointer ${
                    activeMenu === "home" ? "bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-md text-black" : "hover:bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 hover:rounded-md hover:text-black"
                  }`}
                  onClick={() => handleMenuClick("home")}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#howitworks"
                  className={`py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap cursor-pointer ${
                    activeMenu === "howitworks" ? "bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-md text-black" : "hover:bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 hover:rounded-md hover:text-black"
                  }`}
                  onClick={() => handleMenuClick("howitworks")}
                >
                  How it Works
                </a>
              </li>
              <li>
                <a
                  href="#walkthrough"
                  className={`py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap cursor-pointer ${
                    activeMenu === "walkthrough" ? "bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-md text-black" : "hover:bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 hover:rounded-md hover:text-black"
                  }`}
                  onClick={() => handleMenuClick("walkthrough")}
                >
                  Walkthrough
                </a>
              </li>
              <li>
                <a
                  href="/dashboard"
                  className={`py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap cursor-pointer ${
                    activeMenu === "dashboard" ? "bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-md text-black" : "hover:bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 hover:rounded-md hover:text-black"
                  }`}
                  onClick={() => handleMenuClick("dashboard")}
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className={`py-1 px-1 mx-1 pt-2 md:py-3 underline md:px-3 md:mx-3 flex-wrap cursor-pointer pb-2 ${
                    activeMenu === "resources" ? "bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-md text-black" : "hover:bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 hover:rounded-md hover:text-black"
                  }`}
                  onClick={() => handleMenuClick("resources")}
                >
                  Resources
                </a>
              </li>

              <li>
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap cursor-pointer hover:bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 hover:rounded-md hover:text-black"
                  >
                    Select Chain
                  </button>
                  {isDropdownOpen && (
                    <ul className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded-md">
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleChainSelection("Aptos")}
                      >
                        Aptos
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleChainSelection("Ethereum")}
                      >
                        Ethereum
                      </li>
                    </ul>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-2 space-x-2 text-white font-medium mr-4 text-lg">
          <a
            href="#home"
            className={`py-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap p-3 px-6 cursor-pointer ${
              activeMenu === "home" ? "hover:scale-105 border-b-2 rounded-xl" : " hover:text-gray-400"
            }`}
            onClick={() => handleMenuClick("home")}
          >
            Home
          </a>
          <a
            href="#howitworks"
            className={`py-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap p-3 px-6 cursor-pointer ${
              activeMenu === "howitworks" ? "hover:scale-105 border-b-2 rounded-xl" : " hover:text-gray-400"
            }`}
            onClick={() => handleMenuClick("howitworks")}
          >
            How it works
          </a>
          <a
            href="#walkthrough"
            className={`py-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap p-3 px-6 cursor-pointer ${
              activeMenu === "walkthrough" ? "hover:scale-105 rounded-xl border-b-2" : " hover:text-gray-400"
            }`}
            onClick={() => handleMenuClick("walkthrough")}
          >
            Walkthrough
          </a>
          <a
            href="/dashboard"
            className={`py-1 px-5 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap p-2 cursor-pointer ${
              activeMenu === "dashboard" ? "text-gray-400 hover:scale-105 underline" : " hover:text-gray-400"
            }`}
            onClick={() => handleMenuClick("dashboard")}
          >
            Dashboard
          </a>
          <a
            href="https://manis-organization-2.gitbook.io/vortexdocs"
            target="_blank"
            className="text-white text-2xl bg-transparent backdrop-blur-2xl backdrop-filter hover:scale-105 transform transition-transform duration-100 hover:shadow-xl border-b-2 p-3 px-6 rounded-xl md:text-base mr-6"
          >
            Resources
          </a>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap cursor-pointer hover:bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 hover:rounded-md hover:text-black"
            >
              {selectedChain}
            </button>
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded-md">
                <li
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleChainSelection("Aptos")}
                >
                  Aptos
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleChainSelection("Ethereum")}
                >
                  Ethereum
                </li>
              </ul>
            )}
          </div>
          <ConnectButton chain = {selectedChain} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;