import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Cards from "./Components/Cards";
import NavBar from "./Components/NavBar";
import { ThemeContext } from "./Context/ThemeContext";
import { BASE_API } from "./Components/APIs";
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";

function App() {
  const [theme, setTheme] = useState("dark");
  const [country, setCountry] = useState([]);
  const [query, setQuery] = useState("");
  const [filterVal, setFilterVal] = useState("all");
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

  const regionFilter = (filterValue) => {
    setFilterVal(filterValue);
  };

  const byName = (name) => (coun) => {
    return (
      coun.name.common.toLowerCase().includes(name.toLowerCase()) ||
      coun.name.official.toLowerCase().includes(name.toLowerCase())
    );
  };

  const byRegion = (region) => (coun) => {
    if (region === "all") {
      return country;
    } else {
      return coun.region.toLowerCase() === region.toLowerCase();
    }
  };
  const mainContent = () => {
    return (isLoading ? (
        <div className="loading">Loading 👇 👇 👇</div>
      ) : (
        <>
          {" "}
          <div className="filter">
            <Search searchFilter={searchFilter} />
            <Dropdown regionFilter={regionFilter} />
          </div>
          {!searchCountry.length ? (
            <div className="empty">Not Found</div>
          ) : (
            <Cards country={searchCountry} />
          )}
        </>
      ))
  };
  const searchCountry = country
    .filter(byName(query))
    .filter(byRegion(filterVal));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <NavBar />
        {mainContent()}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
