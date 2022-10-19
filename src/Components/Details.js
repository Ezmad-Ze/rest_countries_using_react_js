import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { NAME_API } from "./APIs";

const Details = ({ allCountries }) => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios
      .get(`${NAME_API}/${id}`)
      .then((res) => {
        setCountry(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, [id]);

  //To Find the bordered countries
  const border = country?.borders !== undefined ? country?.borders : null;

  //To filter the bordered countries
  const bord = allCountries.filter((all) => border?.includes(all.cca3));

  const borders = () => {
    return (
      <>
        {country?.borders !== undefined &&
          bord.map((border) => (
            <div key={border?.name?.official}>
              <Link to={`/details/${border.name.common}`}>
                <div>{border?.name?.common}</div>
              </Link>
            </div>
          ))}
      </>
    );
  };

  const details = () => {
    return (
      <>
        {country ? (
          <>
            <Link to="/">
              <button>Back</button>
            </Link>
            <div className="details">
              <img src={country?.flags?.png} alt="" />
              <h3>{country?.name?.common}</h3>
              <p>
                <span>Native Name: </span>
                {Object.values(country?.name?.nativeName)[0]?.common}
              </p>
              <p>
                <span>Population: </span>{" "}
                {country?.population?.toLocaleString()}
              </p>
              <p>
                <span>Region: </span> {country?.region}
              </p>
              <p>
                <span>Sub Region: </span> {country?.subregion}
              </p>
              <p>
                <span>Capital: </span> {country?.capital}
              </p>
              <p>
                <span>Top Level Domain: </span> {country?.tld}
              </p>
              <p>
                <span>Languages: </span>
                {Object?.values(country?.languages)?.map((key) => ` ${key},`)}
              </p>
              <p>
                <span>Currency: </span>
                {Object.values(country?.currencies).map(
                  (key) => ` ${key.name},`
                )}
              </p>
            </div>
            {bord.length !== 0 ? borders() : <div>No border</div>}
          </>
        ) : (
          <div className="loading">Searching 👇 👇 👇</div>
        )}
      </>
    );
  };

  return <>{details()}</>;
};

export default Details;
