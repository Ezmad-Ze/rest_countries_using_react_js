const Cards = ({ load, country }) => {
  const CountryCard = () => {
    return (
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
    );
  };

  return <main>{CountryCard()}</main>;
};

export default Cards;
