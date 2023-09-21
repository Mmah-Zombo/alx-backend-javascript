/* eslint-disable linebreak-style */
/* eslint-disable no-console */
module.exports = function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({ data: 'Successful response from the API' });
  }
  return 0;
};
