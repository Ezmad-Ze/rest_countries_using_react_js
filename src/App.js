import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Components/Cards";
import NavBar from "./Components/NavBar";
import { ThemeContext } from "./Context/ThemeContext";
import { CountryContext } from "./Context/CountryContext";
import { BASE_API } from "./Components/APIs";
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";

function App() {
  const [theme, setTheme] = useState("dark");
  const [country, setCountry] = useState([]);
  const [query, setQuery] = useState("");
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

  const searchFilter = (queryValue) => {
    setQuery(queryValue);
  };

  const searchCountry = country.filter(
    (coun) =>
      coun.name.common.toLowerCase().includes(query) ||
      coun.name.official.toLowerCase().includes(query)
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <CountryContext.Provider value={{ country, setCountry }}>
        <div className="App" id={theme}>
          <NavBar />
          <Search
            getCountry={(arr) => setCountry(country)}
            searchFilter={searchFilter}
          />
          <Dropdown />
          <Cards load={isLoading} country={searchCountry} />
        </div>
      </CountryContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
