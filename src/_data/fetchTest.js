const axios = require('axios');

// test fetching of async data
module.exports = async () => {
  const country = await axios.get('https://restcountries.eu/rest/v2/name/sweden');
  return country.data[0];
};