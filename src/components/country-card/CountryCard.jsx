import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CardContext } from '../../context/card-details.context';

import './country-card.styles.scss';

const CountryCard = ({ countryInfo }) => {
  const navigateToDetails = useNavigate();

  const { setCountryCode } = useContext(CardContext);

  const { flags, name, population, region, capital } = countryInfo;
  const flagPng = flags.png;
  const flagAlt = flags.alt;
  const commonName = name.common;

  const getDetails = (e) => {
    navigateToDetails('/details');
    const targetCard = e.currentTarget;
    setCountryCode(targetCard.id);
  };

  return (
    <div className="card-container" id={countryInfo.cca3} onClick={getDetails}>
      <img className="card-flag-image" src={flagPng} alt={flagAlt} />
      <div className="card-details">
        <span className="card-common-name">{commonName}</span>
        <div className="card-info">
          <div>
            <span className="card-info__title">Population: </span>
            <span className="card-info__results">
              {population.toLocaleString('en-US')}
            </span>
          </div>
          <div>
            <span className="card-info__title">Region: </span>
            <span className="card-info__results">{region}</span>
          </div>
          <div>
            <span className="card-info__title">Capital: </span>
            <span className="card-info__results">{capital}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
