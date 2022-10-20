import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { NAME_API } from "./APIs";
import { BiArrowBack } from "react-icons/bi";
import "../Details.css";

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
                <div className="border--countries">{border?.name?.common}</div>
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
          <div className="details">
            <div className="details--back">
              <Link to="/">
                <BiArrowBack className="details--back__arrow" />
                <span className="details--back__back">Back</span>
              </Link>
            </div>
            <div className="details--container">
              <img
                src={country?.flags?.svg}
                alt= {country?.name?.common}
                className="details--image"
              />
              <div className="details--container__top">
                <h3 className="details--country">{country?.name?.common}</h3>
                <p className="details--key">
                  <span className="details--key__title">Native Name: </span>
                  {country?.name?.nativeName !== undefined &&
                    Object.values(country?.name?.nativeName)[0]?.common}
                </p>
                <p className="details--key">
                  <span className="details--key__title">Population: </span>{" "}
                  {country?.population?.toLocaleString()}
                </p>
                <p className="details--key">
                  <span className="details--key__title">Region: </span>{" "}
                  {country?.region}
                </p>
                <p className="details--key">
                  <span className="details--key__title">Sub Region: </span>{" "}
                  {country?.subregion}
                </p>
                <p className="details--key">
                  <span className="details--key__title">Capital: </span>{" "}
                  {country?.capital}
                </p>
              </div>
              <div className="detail--container__bottom">
                <p className="details--key">
                  <span className="details--key__title">
                    Top Level Domain:{" "}
                  </span>{" "}
                  {country?.tld}
                </p>
                <p className="details--key">
                  <span className="details--key__title">Currency: </span>
                  {country?.currencies !== undefined &&
                    Object.values(country?.currencies).map(
                      (key) => ` ${key.name},`
                    )}
                </p>
                <p className="details--key">
                  <span className="details--key__title">Languages: </span>
                  {country?.languages !== undefined &&
                    Object?.values(country?.languages)?.map(
                      (key) => ` ${key},`
                    )}
                </p>
              </div>
              <div className="details--key__border">
                <span className="details--key__title">Border Countries: </span>
                {bord.length !== 0 ? borders() : "No border"}
              </div>
            </div>
          </div>
        ) : (
          <div className="loading">Searching 👇 👇 👇</div>
        )}
      </>
    );
  };

  return <div className="allDetails">{details()}</div>;
};

export default Details;
