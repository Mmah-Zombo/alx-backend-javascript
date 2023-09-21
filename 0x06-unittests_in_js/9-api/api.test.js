/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable no-console */
const request = require('request');
const { expect } = require('chai');

describe('API Tests', () => {
  it('should return a 200 status code and message', (done) => {
    request.get('http://localhost:7865/', (_, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return correct status code when :id is a number', (done) => {
    request.get('http://localhost:7865/cart/123', (_, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 123');
      done();
    });
  });

  it('should return a 404 status code when :id is not a number', (done) => {
    request.get('http://localhost:7865/cart/abc', (_, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});
