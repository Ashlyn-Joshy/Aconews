import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  const handleNewsCategory = (e) => {
    const category = e.target.value;
    switch (category) {
      case "Current":
        navigate("/general");
        break;
      case "Business":
        navigate("/business");
        break;
      case "Sports":
        navigate("/sports");
        break;
      case "World":
        navigate("/world");
        break;
      case "Nation":
        navigate("/nation");
        break;
      case "Technology":
        navigate("/technology");
        break;
      case "Entertainment":
        navigate("/entertainment");
        break;
      case "Science":
        navigate("/science");
        break;
      case "Health":
        navigate("/health");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <div>
      <nav className="flex justify-between p-5 shadow shadow-lg font-bold dark:bg-gray-600">
        <h1 className="text-3xl text-blue-400">
          <Link to={"/"}>AcoNews</Link>
        </h1>

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
            <li>
              <select
                className="border-b border-blue-400 outline-none"
                onChange={handleNewsCategory}
              >
                <option selected disabled>
                  Select News Category
                </option>
                <option value="Current">Current Trending</option>
                <option value="Business">Business</option>
                <option value="Sports">Sports</option>
                <option value="World">World</option>
                <option value="Nation">Nation</option>
                <option value="Technology">Technology</option>
                <option value="Science">Science</option>
                <option value="Health">Health</option>
                <option value="Entertainment">Entertainment</option>
              </select>
            </li>
            <li>
              <Link to={"/aboutus"}>About Us</Link>
            </li>
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
