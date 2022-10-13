import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Components/Cards";
import NavBar from "./Components/NavBar";
import { ThemeContext } from "./Context/ThemeContext";
import { CountryContext } from "./Context/CountryContext";
import { BASE_API } from "./Components/APIs";

function App() {
  const [theme, setTheme] = useState("dark");
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(BASE_API)
      .then((res) => {
        setCountry(
          res.data.sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
        );
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
    
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <CountryContext.Provider value={{ country, setCountry }}>
        <div className="App" id={theme}>
          <NavBar />
          <Cards load={isLoading} />
        </div>
      </CountryContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
