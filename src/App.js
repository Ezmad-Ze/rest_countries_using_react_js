import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme} role="main">
        <NavBar />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
