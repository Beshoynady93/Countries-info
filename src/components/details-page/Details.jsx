import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CardContext } from '../../context/card-details.context';
import { getFullName } from '../../utils/get-name';

import './details.styles.scss';

const Details = () => {
  const { countryCode, countryDetails, setcountryDetails } =
    useContext(CardContext);

  useEffect(() => {
    getCard();
  }, []);

  if (!countryCode)
    return (
      <div className="details-container">
        <div className="back-button-container">
          <Link to="/" className="back-button-link">
            &#x2190; Back
          </Link>
        </div>
      </div>
    );

  const getCard = async () => {
    try {
      if (!countryCode) return;
      const res = await fetch(
        `https://restcountries.com/v3.1/alpha/${countryCode}`
      );

      if (!res.ok) return;

      const data = await res.json();

      setcountryDetails(data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  if (!countryDetails) return;
  const {
    flags, // Object
    name, //Object
    population, // String
    region, // String
    subregion, // String
    capital, // Array
    tld, // Array
    currencies, // Object
    languages, // Array
    borders, // Array
  } = countryDetails;

  const flagpng = flags.png;
  const flagAlt = flags.alt;
  const commonName = name.common;
  const nativeNames = name.nativeName;
  const countryLanguages = [];
  const countryCourencies = [];
  const allNativeNames = [];
  const contryBorders = getFullName(borders).map((border) =>
    border.map((borderName) => borderName.name)
  );

  for (const language in languages) {
    countryLanguages.push(languages[language]);
  }

  for (const currency in currencies) {
    countryCourencies.push(currencies[currency].name);
  }

  for (const name in nativeNames) {
    allNativeNames.push(nativeNames[name].common);
  }

  return (
    <div className="details-container">
      <div className="back-button-container">
        <Link to="/" className="back-button-link">
          &#x2190; Back
        </Link>
      </div>

      {countryDetails != [] ? (
        <div className="country-details">
          <div className="country-details__img-container">
            <img src={flagpng} alt={flagAlt} />
          </div>

          <div className="country-details__info-container">
            <div className="country-details__name">
              <h1 className="country-details__common-name">{commonName}</h1>
            </div>
            <div className="country-details__info">
              <div>
                <span className="country-details__title">Native Name: </span>
                <span className="country-details__results">
                  {allNativeNames[0]}
                </span>
              </div>
              <div>
                <span className="country-details__title">Population: </span>
                <span className="country-details__results">
                  {population.toLocaleString('en-US')}
                </span>
              </div>
              <div>
                <span className="country-details__title">Region: </span>
                <span className="country-details__results">{region}</span>
              </div>
              <div>
                <span className="country-details__title">Sub Region: </span>
                <span className="country-details__results">{subregion}</span>
              </div>
              <div>
                <span className="country-details__title">Capital: </span>
                <span className="country-details__results">{capital}</span>
              </div>
            </div>
            <div className="country-details__more-info">
              <div>
                <span className="country-details__title">
                  Top Level Domain:{' '}
                </span>
                <span className="country-details__results">{tld[0]}</span>
              </div>
              <div>
                <span className="country-details__title">Currencies: </span>
                <span className="country-details__results">
                  {countryCourencies.join(',')}
                </span>
              </div>
              <div>
                <span className="country-details__title">Languages: </span>
                <span className="country-details__results">
                  {countryLanguages.join(', ')}
                </span>
              </div>
            </div>
            <div className="country-details__borders">
              <span>Border Countries: </span>
              <div className="country-details__border-countries">
                {contryBorders
                  .flat(1)
                  .slice(0, 3)
                  .map((border) => (
                    <span key={border.alpha3Code}>{border}</span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>No details to show</div>
      )}
    </div>
  );
};

export default Details;
