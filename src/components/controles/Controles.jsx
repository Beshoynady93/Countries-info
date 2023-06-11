import { useContext, useEffect, useState } from 'react';
import CountryCard from '../country-card/CountryCard';
import SearchInput from '../search-input/SearchInput';
import { CardContext } from '../../context/card-details.context';

import SearchIcon from '../icons/search-icon';

import './select.scss';
import './controles.styles.scss';

const Controles = () => {
  const [countriesInfo, setCountriesInfo] = useState('');
  const { searchString } = useContext(CardContext);

  const selectRegion = async (e) => {
    try {
      const region = e.target.value;
      if (!region) return;
      const res = await fetch(
        `https://restcountries.com/v3.1/region/${region}`
      );
      const data = await res.json();
      setCountriesInfo(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    let isSubscribed = true;
    if (!searchString) {
      setCountriesInfo([]);
      return;
    }
    const getSearchResult = async () => {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${searchString}`
      );
      const data = await res.json();
      if (isSubscribed) setCountriesInfo(data);
    };
    try {
      getSearchResult().catch(console.error);
    } catch (error) {
      console.error(error);
    }

    return () => (isSubscribed = false);
  }, [searchString]);

  return (
    <>
      <section className="controles-section">
        <div className="search-container">
          <SearchIcon />
          <SearchInput />
        </div>
        <div className="select-container">
          <select
            defaultValue={'Filter by Region'}
            name="filter"
            id="filter-by-region"
            onChange={selectRegion}
          >
            <option disabled>Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
      </section>

      <section className="cards-section">
        {(countriesInfo != []) & (countriesInfo.status !== 404) ? (
          countriesInfo.map((country) => (
            <CountryCard countryInfo={country} key={country.cca3} />
          ))
        ) : (
          <div>{countriesInfo.message}</div>
        )}
      </section>
    </>
  );
};

export default Controles;
