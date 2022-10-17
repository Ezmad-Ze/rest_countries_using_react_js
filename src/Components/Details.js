import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { NAME_API } from "./APIs";
const Details = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${NAME_API}/${id}`)
      .then((res) => {
        setCountry(res.data[0]);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);

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
