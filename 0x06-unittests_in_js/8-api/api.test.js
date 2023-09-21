/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable no-console */
const request = require('request');
const { expect } = require('chai');

describe('API Tests', () => {
  it('should return a 200 status code', (done) => {
    request.get('http://localhost:7865/', (_, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
