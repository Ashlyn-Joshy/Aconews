import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu); // Toggles the menu visibility
  };

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark); // Toggles dark mode
  };

  return (
    <div>
      <nav className="flex justify-between p-5 shadow shadow-lg font-bold dark:bg-gray-600">
        <h1 className="text-3xl text-blue-400">AcoNews</h1>

        <div className="block lg:hidden">
          {menu ? (
            <span className="material-symbols-outlined" onClick={toggleMenu}>
              close
            </span>
          ) : (
            <span className="material-symbols-outlined" onClick={toggleMenu}>
              menu
            </span>
          )}
        </div>

        <div
          className={`${
            menu ? "block" : "hidden"
          } lg:flex lg:items-center lg:w-auto lg:space-x-4`}
        >
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 text-blue-400">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>
              <button onClick={toggleDarkMode} className="outline px-2 rounded">
                {isDark ? "🌞" : "🌚"}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
