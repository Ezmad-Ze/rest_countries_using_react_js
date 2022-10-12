import React, { useContext } from "react";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { ThemeContext } from "../Context/ThemeContext";

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      {theme === "dark" ? (
        <nav>
          <h2 className="mode top--title">Where in the world?</h2>
          <div className="toggle" role="button" onClick={toggleTheme}>
            <BsFillMoonFill color="white" />
            <span className="mode top--right">Dark Mode</span>
          </div>
        </nav>
      ) : (
        <nav>
          <h2 className="mode top--title">Where in the world?</h2>
          <div className="toggle" role="button" onClick={toggleTheme}>
            <BsSunFill />
            <span className="mode top--right">Light Mode</span>
          </div>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
