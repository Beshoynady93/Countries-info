import { createContext, useState } from 'react';

export const CardContext = createContext({
  countryCode: '',
  setCountryCode: () => {},
  countryDetails: {},
  setcountryDetails: () => {},
  searchString: '',
  setSearchString: () => {},
});

export const CardContextProvider = ({ children }) => {
  const [countryCode, setCountryCode] = useState('');
  const [countryDetails, setcountryDetails] = useState('');
  const [searchString, setSearchString] = useState('');

  const value = {
    countryCode,
    setCountryCode,
    countryDetails,
    setcountryDetails,
    searchString,
    setSearchString,
  };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};
