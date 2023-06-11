import { useContext } from 'react';
import { CardContext } from '../../context/card-details.context';

import './search-input.styles.scss';

const SearchInput = () => {
  const { setSearchString } = useContext(CardContext);

  const searchCountries = (e) => {
    setSearchString(e.target.value);
  };

  return (
    <input
      className="search-input"
      type="search"
      placeholder="Search for a country..."
      onChange={searchCountries}
    />
  );
};

export default SearchInput;
