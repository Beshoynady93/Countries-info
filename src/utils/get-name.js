import Data from '../assets/data.json';

export const getFullName = (countryCode) => {
  if (Array.isArray(countryCode)) {
    return countryCode.map((code) => {
      return Data.filter(
        (country) => code.toLowerCase() === country.alpha3Code.toLowerCase()
      );
    });
  } else {
    return Data.filter(
      (country) =>
        countryCode.toLowerCase() === country.alpha3Code.toLowerCase()
    );
  }
};
