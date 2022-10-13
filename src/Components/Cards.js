import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_API } from "./APIs";

const Cards = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_API)
      .then((res) => {
        setCountry(
          res.data.sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
        );
      })
      .catch((err) => console.log(err));
  }, []);

  const CountryCard = () => {
    return (
      <main>
        <div className="main--style">
          {country.map((coun) => (
            <div key={coun.name.official} className="card">
              <img src={coun.flags.png} alt="" className="card--image" />
              <h3 className="card--title mode">{coun.name.common}</h3>
              <p className="card--info mode">
                <span className="card--info__subtitle">Population:</span>{" "}
                {coun.population.toLocaleString()}
              </p>
              <p className="card--info mode">
                <span className="card--info__subtitle">Region:</span>{" "}
                {coun.region}
              </p>
              <p className="card--info mode">
                <span className="card--info__subtitle">Capital:</span>{" "}
                {coun.capital}
              </p>
            </div>
          ))}
        </div>
      </main>
    );
  };

  return <>{CountryCard()}</>;
};

export default Cards;
